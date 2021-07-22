const AWS = require("aws-sdk");
const utils = require("../../utils/database/index.js")();
const xsenv = require("@sap/xsenv");
const unzipper = require('unzipper')
const fs = require('fs').promises;
const path = require('path');
const axios = require('axios');
const dbClass = require("sap-hdbext-promisfied")
const hdbext = require("@sap/hdbext");

process.on("message", (message) => {

    // Get the filename from the message.
    let filename = message.filename;
    let uuid = message.uuid;

    (async () => {
        // connect to s3.
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

        // Using Streams that can directly read file from S3 and extract,
        // We can't download the file into the server because server capacity can't exceed more than 3 GB but the zip file can be of 10+ GB. 
        // Pipiong the stream into unzipper for extraction.(This is a v very interesting topic if you wanna get into nodejs and stuff)
        let stream = s3.getObject(params).createReadStream().pipe(unzipper.Parse({ forceStream: true }));

        for await (const entry of stream) {
            try {
                // Building the payload we need to add the document to the SAP HANA DATABASE.
                const fileName = entry.path;

                const data = await entry.buffer();
                let base64 = data.toString('base64');

                let userid = fileName.split('_')[0]
                let document = fileName.split('_')[1]
                // let userid = userid
                // let document = document
                let payload = {
                    "payload": {
                        "FILE": "data:application/pdf;base64," + base64,
                        "USERID": userid,
                        "DOCUMENT": document,
                        "UUID": uuid
                    }
                }
                // return payload, this payload will be used by our createdocument fucntion (This next process is same as we do in postman for create document api).
                process.send(payload);
            } catch (error) {
                console.log(error);
            }
        }

    })().catch((error) => {
        console.log(error);
    }).finally(() => {
        console.log("process exiting")
        process.exit();
        
    });
});


// async function createdocuments({ payload, db }) {
//     return new Promise(async (resolve, reject) => {
//         try {

//             const schema = await utils.currentSchema({
//                 db
//             })
//             const createdat = new Date().toISOString();
//             const createdby = "admin";
//             const modifiedby = "admin";
//             const modifiedat = new Date().toISOString();
//             const ID = uuid()
//             const file_name = payload.payload.DOCUMENT;
//             const stream = payload.payload.FILE;
//             const userid = payload.payload.USERID
//             const statement = await db.preparePromisified(
//                 `INSERT INTO "${schema}"."SCLABS_ALUMNIPORTAL_DOCUMENTS_DOCUMENTS" VALUES(
// 						'${createdat}',
// 						'${createdby}',
// 						'${modifiedat}',
// 						'${modifiedby}',
// 						'${ID}',
// 						'${stream}',
// 						'${userid}',
// 						'${file_name}')`)

//             const results = await db.statementExecPromisified(statement, [])

//             resolve(results);

//         } catch (error) {
//             reject(error);
//         }
//     });
// };
