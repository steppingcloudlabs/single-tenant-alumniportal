const AWS = require("aws-sdk");
const dbClass = require("sap-hdbext-promisfied");
const uuid = require("uuid");
const utils = require("../../utils/database/index.js")();
const xsenv = require("@sap/xsenv");
const unzipper = require('unzipper')
const fs = require('fs').promises;
const path = require('path');

process.on("message", (message) => {

    let filename = message.filename;
    let db = message.db
    // save jobID and name to Hana DB
    createETLJob({ filename, db }).then((data) => {
        process.send(data);

    }).catch((error, db) => {
        console.log(error);
    }).finally(() => {
        // cleanObjectStore()
        process.exit();
    });
});

async function createETLJob({ filename, db }) {
    return new Promise(async (resolve, reject) => {
        try {
            console.log("Inside createETLJob function")
            // extract everything back to s3 under a tenantfolder
            let response = await ETLJob({ filename, db });
            console.log(response);
            // get all object from that folder and intsert into Database
            if (response == "successfull") {
                try {
                    response = await toDatabase(payload, db);
                    resolve(response);
                } catch (error) {
                    reject(error);
                }

            } else {
                reject(error);
            }
        } catch (error) {
            reject(error)
        }
    })

}

async function ETLJob({ filename, db }) {
    return new Promise(async (resolve, reject) => {
        try {
            console.log("Inside ETLJOb funtion")
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
                accessKeyId: process.env.AWS_ACCESS_KEY_ID,
                secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
                region: 'us-east-2',
                signatureVersion: 'v4'
            });

            params = {
                Bucket: process.env.AWS_BUCKET_NAME,
                Key: filename
            };

            let stream = s3.getObject(params).createReadStream().pipe(unzipper.Parse({ forceStream: true }));
            // fs.writeFile(`./${filename}`, Body).then().catch(err => { reject(err); });

            // const zip = new StreamZip.async({ file: `./${filename}` });

            // const entries = await zip.entries();

            for await (const entry of stream) {

                try {
                    const fileName = entry.path;

                    const data = await entry.buffer();
                    let base64 = data.toString('base64');
                    console.log(base64);

                    // let userid = fileName.split('_')[0]
                    // let document = fileName.split('_')[1]
                    let userid = "10"
                    let document = "form16"
                    let payload = {
                        "FILE": "data:application/pdf;base64," + base64,
                        "USERID": userid,
                        "DOCUMENT": document
                    }
                    console.log(payload)
                    let response = await createdocuments({ payload, db });
                    console.log(response);
                    break;
                    if (response == 1) {
                        let payload = "success";
                        let response = await reportingdocuments({ payload, db });
                    } else {
                        let payload = "failed";
                        let response = await reportingdocuments({ payload, db });
                    }
                } catch (error) {
                    console.log(error);
                }


            }
            // Do not forget to close the file once you're done

            resolve("Process Completed")
            // await cleanObjectStore();

        } catch (error) {
            reject(error)
        }
    });
}

async function createdocuments({ payload, db }) {
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
}

async function reportingdocuments({ payload, db }) {
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
async function cleanETL() {
    return new Promise(async (resolve, reject) => {
        try {
            let response = await createdocuments({ payload, db });
            resolve(response);
        } catch (error) {
            reject(error)
        }
    });
}