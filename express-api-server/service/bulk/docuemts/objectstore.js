const AWS = require("aws-sdk");
const uuid = require("uuid");
const xsenv = require("@sap/xsenv");
const StreamZip = require('node-stream-zip');
const fs = require('fs').promises;
// const utils = require("../../utils/database/index.js")();

module.exports = () => {

    const createETLJob = ({ payload, db }) => {
        return new Promise(async (resolve, reject) => {
            try {

                // extract everything back to s3 under a tenantfolder
                let response = await ETLJob({ payload, db });

                resolve(response)
                // get all object from that folder and intsert into Database
                // if (response == "successfull") {
                //     response = await toDatabase({ payload, db });
                //     resolve(response);
                // } else {
                //     reject(error);
                // }
            } catch (error) {
                reject(error)
            }
        })
    }


    // Worker Thread will be userd here to CPU intensive work 
    const ETLJob = ({ payload, db }) => {
        return new Promise(async (resolve, reject) => {
            try {
                let xsService = xsenv.getServices(
                    {
                        objectstore: {
                            tag: "objectStore"
                        }
                    });
                let accessKeyId = xsService.objectstore.access_key_id;
                let secretAccessKey = xsService.objectstore.secret_access_key;
                let host = xsService.objectstore.host;
                let region = xsService.objectstore.region;

                //S3 configuration
                const s3 = new AWS.S3({
                    accessKeyId: accessKeyId,
                    secretAccessKey: secretAccessKey,
                    region: region
                });
                params = {
                    Bucket: xsService.objectstore.bucket,
                    Key: payload.payload.key
                };

                let { Body } = await s3.getObject(params).promise();
                console.log(Body);
                fs.writeFile(`./${payload.payload.key}`, Body).then().catch(err => { reject(err); });

                const zip = new StreamZip.async({ file: `./${payload.payload.key}` });

                const entries = await zip.entries();

                for (const entry of Object.values(entries)) {
                    await zip.extract(entry.name, './');
                    try {
                        let base64 = await fs.readFile('./' + entry.name, { encoding: 'base64' });
                        console.log(entry.name)
                        let userid = entry.name.split('_')[0]
                        let document = entry.name.split('_')[1]
                        let payload = {
                            "FILE": "data:application/pdf;base64," + base64,
                            "USERID": userid,
                            "DOCUMENT": document
                        }

                        console.log(payload)
                        // let response = await createdocuments({ payload, db });
                        // if (response == 1) {
                        //     let payload = "success";
                        //     let response = await reportingdocuments({ payload, db });
                        // } else {
                        //     let payload = "failed";
                        //     let response = await reportingdocuments({ payload, db });
                        // }
                        fs.unlinkSync('./extracted' + entry.name);
                        console.log("delete file")
                    } catch (error) {
                        console.log(error);
                        await fs.unlink('./extracted' + entry.name);
                    }

                }
                // Do not forget to close the file once you're done
                await zip.close();
                resolve("Process Completed")
                // await cleanObjectStore();

            } catch (error) {
                reject(error)
            }
        });
    }
    const createdocuments = ({
        payload,
        db
    }) => {
        return new Promise(async (resolve, reject) => {
            try {

                const schema = await utils.currentSchema({
                    db
                })
                const createdat = new Date().toISOString();
                const createdby = "admin";
                const modifiedby = "admin";
                const modifiedat = new Date().toISOString();
                const ID = uuid()
                const file_name = payload.DOCUMENT;
                const stream = payload.FILE;
                const userid = payload.USERID
                const statement = await db.preparePromisified(
                    `INSERT INTO "${schema}"."SCLABS_ALUMNIPORTAL_DOCUMENTS_DOCUMENTS" VALUES(
						'${createdat}',
						'${createdby}',
						'${modifiedat}',
						'${modifiedby}',
						'${ID}',
						'${stream}',
						'${userid}',
						'${file_name}')`)

                const results = await db.statementExecPromisified(statement, [])

                resolve(results);

            } catch (error) {
                reject(error);
            }
        });
    };

    const reportingdocuments = ({
        payload,
        db
    }) => {
        return new Promise(async (resolve, reject) => {
            try {

                const schema = await utils.currentSchema({
                    db
                })
                const createdat = new Date().toISOString();
                const createdby = "admin";
                const modifiedby = "admin";
                const modifiedat = new Date().toISOString();
                const ID = uuid()
                const file_name = payload.DOCUMENT;
                const stream = payload.FILE;
                const userid = payload.USERID
                const statement = await db.preparePromisified(
                    `INSERT INTO "${schema}"."SCLABS_ALUMNIPORTAL_DOCUMENTS_DOCUMENTS" VALUES(
						'${createdat}',
						'${createdby}',
						'${modifiedat}',
						'${modifiedby}',
						'${ID}',
						'${stream}',
						'${userid}',
						'${file_name}')`)

                const results = await db.statementExecPromisified(statement, [])

                resolve(results);

            } catch (error) {
                reject(error);
            }
        });
    };



    const cleanObjectStore = ({ payload, db }) => {
        return new Promise(async (resolve, reject) => {
            try {
                let response = await createdocuments({ payload, db });
            } catch (error) {
                reject(error)
            }
        });
    }

    return {
        createETLJob
    }
}