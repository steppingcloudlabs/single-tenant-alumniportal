const path = require('path');
// const SftpClient = require('ssh2-sftp-client');
const fs = require('fs');
const uuid = require('uuid');
const utils = require("../../utils/database/index.js")();

const dbClass = require("sap-hdbext-promisfied");

module.exports = () => {
    const downloadDirSftp = ({ payload, db }) => {
        return new Promise(async (resolve, reject) => {

            const client = new SftpClient();
            const dst = "./tmp";
            const src = payload.source;
            const config = payload.config;

            try {
                await client.connect(config);
                const rslt = await client.downloadDir(src, dst);
                const dirContents = fs.readdirSync(("./tmp"));
                let totalfiles = dirContents.length;
                resolve("Total files needs to be uploaded: " + totalfiles);
            } catch (error) {
                reject(error);
            }
            finally {
                client.end();
            }
        })
    }

    // USING worker thread for uploading documents in Hana database. 

    const documentBase64ToRabbitMQ = ({ req }) => {
        return new Promise(async (resolve, reject) => {
            try {
                const dirContents = fs.readdirSync(("./tmp"));
                for (let i = 0; i < dirContents.length; i++) {
                    try {
                        let db = new dbClass(req.db);
                        let payload = {}
                        let nameComposite = dirContents[i].split("_");
                        let userid = nameComposite[0]
                        let documentType = path.parse(nameComposite[1]).name;
                        let base64String = fs.readFileSync("./tmp" + "/" + dirContents[i], { encoding: 'base64' });
                        let stream = "data:application/pdf;base64," + base64String;
                        payload["USERID"] = userid
                        payload["DOCUMENT"] = documentType
                        payload["FILE"] = stream

                        let response = await helper({
                            payload,
                            db
                        });
                        console.log("Resuults: for ", userid, documentType, response)
                        if (response != 1) {
                            payload.STATUS = "failed"
                            result = await updatedocumentsStatus({ payload, db });
                            console.log("updating the status", result);
                        } else {
                            payload.STATUS = "success"
                            result = await updatedocumentsStatus({ payload, db });
                            console.log("updating the status", result);
                        }

                    } catch (err) {
                        console.error(err)
                    }

                }
                resolve("Uploading Complete");
            } catch (error) {
                reject(error)
            }
        });
    }
    const helper = ({
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
                console.log("Running shit")
                const results = await db.statementExecPromisified(statement, [])

                resolve(results);

            } catch (error) {
                reject(error);
            }
        });
    };


    const updatedocumentsStatus = ({
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
                const status = payload.STATUS
                const userid = payload.USERID

                const statement = await db.preparePromisified(
                    `INSERT INTO "${schema}"."DOCUMENTUPLOADSTATUS" VALUES(
						'${ID}',
						'${userid}',
						'${file_name}', 
                        '${status}')`)

                const results = await db.statementExecPromisified(statement, [])

                resolve(results);

            } catch (error) {
                reject(error);
            }
        });
    };

    const getdocumentsStatus = ({
        payload,
        db
    }) => {
        return new Promise(async (resolve, reject) => {
            try {

                const schema = await utils.currentSchema({
                    db
                })
                const statement = await db.preparePromisified(`SELECT * FROM "${schema}"."DOCUMENTUPLOADSTATUS"`)
                const results = await db.statementExecPromisified(statement, [])
                resolve(results);

            } catch (error) {
                reject(error);
            }
        });
    };

    return {
        downloadDirSftp,
        documentBase64ToRabbitMQ,
        updatedocumentsStatus,
        getdocumentsStatus
    };
}