const uuid = require("uuid");
const xsenv = require("@sap/xsenv");
const util = require("../../utils/index.js");
const bulkService = require("../bulk/index.js")();
const utils = require("../../utils/database/index.js")();
const AWS = require("aws-sdk")
const axios = require("axios")
const { fork } = require("child_process")
let path = require('path')

module.exports = () => {

	const viewdocuments = ({
		payload,
		db
	}) => {
		return new Promise(async (resolve, reject) => {
			try {
				const schema = await utils.currentSchema({
					db
				})

				// TODO: add pagination using [to, from] clauses in statement.
				const LIMIT = payload.LIMIT == undefined ? 10 : payload.LIMIT
				const offset = payload.OFFSET == undefined ? 0 : payload.OFFSET

				const statement = await db.preparePromisified(
					`SELECT * FROM "${schema}"."SCLABS_ALUMNIPORTAL_DOCUMENTS_DOCUMENTS" where "USERID"='${payload.USERID}'
					 AND "FILENAME"='${payload.FILENAME}'`
				)
				const results = await db.statementExecPromisified(statement, [])
				resolve(results);

			} catch (error) {
				reject(error);
			}
		});
	};

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
				const file_name = payload.payload.DOCUMENT;
				const stream = payload.payload.FILE;
				const userid = payload.payload.USERID
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

	const updatedocuments = ({
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
				const date = new Date().toISOString();
				const ID = uuid();
				const statement = await db.preparePromisified(
					`UPDATE "${schema}"."SCLABS_ALUMNIPORTAL_DOCUMENTS_DOCUMENTS"
					SET "STREAM" = CASE 
					WHEN '${payload.payload.file}' != 'undefined' THEN '${payload.payload.file}'
					ELSE (select "STREAM" FROM "${schema}"."SCLABS_ALUMNIPORTAL_DOCUMENTS_DOCUMENTS" where "USERID"='${payload.payload.USERID}')
					END,
					"MODIFIEDBY" = '${modifiedby}',
    				"MODIFIEDAT" = '${modifiedat}'
    				where
    				"USERID" = '${payload.payload.USERID}'`
				)

				const results = await db.statementExecPromisified(statement, [])
				resolve(results)

			} catch (error) {
				reject(error);
			}
		});
	};

	const deletedocuments = ({
		payload,
		db
	}) => {
		return new Promise(async (resolve, reject) => {
			try {

				const schema = await utils.currentSchema({
					db
				})
				const statement = await db.preparePromisified(
					`DELETE FROM "${schema}"."SCLABS_ALUMNIPORTAL_DOCUMENTS_DOCUMENTS"  WHERE ID = '${payload.payload.ID}'`
				)
				const results = await db.statementExecPromisified(statement, [])
				resolve(results);

			} catch (error) {
				reject(error);
			}
		});
	};
	const statusdocuments = ({
		payload,
		db
	}) => {
		return new Promise(async (resolve, reject) => {
			try {

				const schema = await utils.currentSchema({
					db
				})

				// TODO: add pagination using [to, from] clauses in statement.
				const LIMIT = payload.LIMIT == undefined ? 10 : payload.LIMIT
				const offset = payload.OFFSET == undefined ? 0 : payload.OFFSET

				const statement = await db.preparePromisified(
					`SELECT "FILENAME" FROM "${schema}"."SCLABS_ALUMNIPORTAL_DOCUMENTS_DOCUMENTS" where "USERID"='${payload.USERID}'`
				)
				const results = await db.statementExecPromisified(statement, [])

				const result = {}
				result['FORM16'] = 'Not Available'
				result['FIRSTMONTHSALARY'] = 'Not Available'
				result['SECONDMONTHSALARY'] = 'Not Available'
				result['THIRDMONTHSALARY'] = 'Not Available'
				result['EXPERIENCELETTER'] = 'Not Available'
				result['RELIEVINGLETTER'] = 'Not Available'
				for (let i = 0; i < results.length; i++) {
					if (results[i].FILENAME == 'form16') {
						result['FORM16'] = 'Available'
					} else if (results[i].FILENAME == 'firstmonthsalary') {
						result['FIRSTMONTHSALARY'] = 'Available'
					} else if (results[i].FILENAME == 'secondmonthsalary') {
						result['SECONDMONTHSALARY'] = 'Available'
					} else if (results[i].FILENAME == 'thirdmonthsalary') {
						result['THIRDMONTHSALARY'] = 'Available'
					} else if (results[i].FILENAME == 'experienceletter') {
						result['EXPERIENCELETTER'] = 'Available'
					} else if (results[i].FILENAME == 'relievingletter') {
						result['RELIEVINGLETTER'] = 'Available'
					}
				}
				resolve(result);

			} catch (error) {
				reject(error);
			}
		});
	};

	const triggerSFTPDownload = ({ payload, db }) => {
		return new Promise(async (resolve, reject) => {
			try {

				const response = await bulkService.downloadDirSftp({ payload, db });
				resolve(response)
			} catch (error) {
				reject(error);
			}
		})
	}
	const triggerbulkupload = ({ req }) => {
		return new Promise(async (resolve, reject) => {
			try {

				const response = await bulkService.documentBase64ToRabbitMQ({ req });
				resolve(response)
			} catch (error) {
				reject(error);
			}
		})
	}

	const getdocumentsStatus = ({ payload, db }) => {
		return new Promise(async (resolve, reject) => {
			try {

				const response = await bulkService.getdocumentsStatus({ db });
				resolve(response)
			} catch (error) {
				reject(error);
			}
		})
	}
	const getuploadid = ({ payload, bucketname }) => {
		return new Promise(async (resolve, reject) => {
			try {

				// We have two approach to implement this.
				// 1. We can either user objectstore (provided by SAP CLoud Platform) 
				// 2. We can directly user S3(Currently this is implemented, However this is the appropriate implementation in case of multu-tenant env)
				// From Code prespective a very small change is required if anyone trying to user SAP ObjectStore. Just use credentials from xsService rather than from process.env
				// You dont have to do anything. 
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

				// Use above variuable is you want to use the SAP ObjectStore 
				const s3 = new AWS.S3({
					accessKeyId: process.env.AWS_ACCESS_KEY_ID,
					secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
					region: 'us-east-2',
					signatureVersion: 'v4'
				});

				// Change the bucket name as well, this should come from xsService
				let params = {
					Bucket: process.env.AWS_BUCKET_NAME,
					Key: payload.query.filename,
					ContentType: payload.query.filetype
				};

				// This will return the UplaodID to the frontend, we dont have to do anything 
				let response = await s3.createMultipartUpload(params).promise();
				resolve({ KEY: response.Key, UPLOADID: response.UploadId })

			} catch (error) {
				reject(error)
			}
		})
	}

	const getuploadurl = ({ payload, bucketname }) => {
		return new Promise(async (resolve, reject) => {
			try {

				// The documentation is save as able function
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

				const s3 = new AWS.S3({
					accessKeyId: process.env.AWS_ACCESS_KEY_ID,
					secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
					region: 'us-east-2',
					signatureVersion: 'v4'
				});

				let params = {
					Bucket: process.env.AWS_BUCKET_NAME,
					Key: payload.filename,
					PartNumber: payload.partnumber,
					UploadId: payload.uploadid
				};

				// console.log(params)
				let response = await s3.getSignedUrlPromise('uploadPart', params)
				// console.log(response)
				resolve({ URL: response })

			} catch (error) {
				reject(error)
			}
		})
	}
	const complete = ({ payload, db }) => {
		return new Promise(async (resolve, reject) => {
			try {
				// The documentation is save as above function
				let xsService = xsenv.getServices(
					{
						objectstore: {
							tag: "objectStore"
						}
					});
				// Need to change this when migratring this for multitenant.
				let accessKeyId = xsService.objectstore.access_key_id;
				let secretAccessKey = xsService.objectstore.secret_access_key;
				let host = xsService.objectstore.host;
				let region = xsService.objectstore.region;

				

				const s3 = new AWS.S3({
					accessKeyId: process.env.AWS_ACCESS_KEY_ID,
					secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
					region: 'us-east-2',
					signatureVersion: 'v4'
				});
				// Ṭhis code is for completing multipart upload.
				// process.env.AWS_BUCKET_NAME
				let params = {
					Bucket: process.env.AWS_BUCKET_NAME,
					Key: payload.payload.filename,
					MultipartUpload: {
						Parts: payload.payload.parts
					},
					UploadId: payload.payload.uploadid
				};

				let response = await s3.completeMultipartUpload(params).promise();
				resolve(response);

			} catch (error) {
				reject(error)
			}
		})
	}

	/**
	 * We are capturing any error occured while running the job in background.
	 */
	const errorReport = ({ error, payload, db }) => {
		return new Promise(async (resolve, reject) => {
			try {
				const schema = await utils.currentSchema({
					db
				})
				const ID = uuid()
				const file_name = payload.payload.DOCUMENT;
				const jobid = payload.payload.UUID;
				const userid = payload.payload.USERID;
				const statement = await db.preparePromisified(
					`INSERT INTO "${schema}"."JOBSCHEDULDER" VALUES(
						'${ID}',
						'${jobid}',
						'${userid}',
						'${file_name}',
						'${escape(error)}'
						)`)

				const results = await db.statementExecPromisified(statement, [])

				resolve(results);
			} catch (error) {
				reject(error)
			}


		});
	}

	/**
	 * We are capturing the job status which was submitted by the admin, so the they can see the status of the job.
	 */
	const jobtoDatabase = ({ payload, db }) => {
		return new Promise(async (resolve, reject) => {
			try {
				const schema = await utils.currentSchema({
					db
				})
				const isactive = payload.payload.ISACTIVE;
				const jobid = payload.payload.ID;
				const status = payload.payload.STATUS;
				const error = payload.payload.ERROR;
				const createdat = new Date().toISOString();
				const statement = await db.preparePromisified(
					`INSERT INTO "${schema}"."UPLOADDOCUMENTJOBSTATUS" VALUES(
						'${jobid}',
						'${isactive}',
						'${status}',
						'${error}',
						'${createdat}'
						)`)

				const results = await db.statementExecPromisified(statement, [])

				resolve(results);
			} catch (error) {
				reject(error)
			}


		});
	}

	/**
	 * We are also updating the status if a successfull upload
	 */
	const successReport = ({ payload, db }) => {
		return new Promise(async (resolve, reject) => {
			try {
				const schema = await utils.currentSchema({
					db
				})
				const ID = uuid()
				const file_name = payload.payload.DOCUMENT;
				const jobid = payload.payload.UUID;
				const userid = payload.payload.USERID;
				const statement = await db.preparePromisified(
					`INSERT INTO "${schema}"."JOBSCHEDULDER" VALUES(
						'${ID}',
						'${jobid}',
						'${userid}',
						'${file_name}',
						'success'
						)`)

				const results = await db.statementExecPromisified(statement, [])

				resolve(results);

			} catch (error) {
				reject(error);
			}
		});
	}

	// We need to call this function in trigger function defined belo after eveything is done. This is required because we have to pay for storeage in AWS if we dont delete then we have to pay for the storage.

	const cleanS3afterprocessing = ({ payload, query, db }) => {
		return new Promise(async (resolve, reject) => {
			try {

				let response = axios.put(payload.payload.url, payload.payload.chunk, {
					headers: {
						'Content-Type': payload.payload.type
					}
				});

				resolve(response.headers)
			} catch (error) {
				// console.log(error)
				reject(error)
			}


		});
	}

	// This is the core implementation of bulk upload function. 
	const trigger = ({ payload, db }) => {
		return new Promise(async (resolve, reject) => {
			try {
				// launching the child process.
				let id = uuid();
				const childProcess = fork("./service/documents/jobscheduler.js");

				// sendinng the filename that I want to download with its JOBID (whihc is nothing but uuid).
				childProcess.send({
					filename: payload.payload.filename, uuid: id
				})

				// Child Process will return the payload after extraction fopr each user.
				childProcess.on("message", payload => {
					(async (payload) => {
						// we'll try to call or createdocuments function which will add a new entry into the system.
						let response = await createdocuments({ payload, db });
						return response;
					})(payload).then((response) => {
						(async (response) => {
							// Based on the response I'll updae my reporting table.
							if (response == 1) {
								// If success then update its successfull
								let response = await successReport({ payload, db });
								console.log("data in response" + response);
							} else {
								console.log(response);
							}
						})(response).catch(error => {
							console.log(error);
						})

					}).catch((error) => {
						(async (error) => {
							// Else I'll add the error in the reporting so that we can find out why did it broke.
							let response = await errorReport({ error, payload, db });
							console.log(response);
						})(error).catch(error => {
							console.log(error);
						})

					});
				})

				childProcess.on('error', (err) => {
					(async (message) => {
						let payload = {
							"payload": {
								"ID": id,
								"ISACTIVE": "false",
								"STATUS": "error",
								"ERROR": err,
							}
						}
						let response = await jobtoDatabase({ payload, db })

					})(message).catch((err) => {
						console.log(err);
					})
				});

				childProcess.on('close', (message) => {

					(async (message,) => {
						let payload = {
							"payload": {
								"ID": id,
								"ISACTIVE": "false",
								"STATUS": "submitted",
								"ERROR": "",
							}
						}
						// payload.payload.uuid = id
						// payload.payload.status = "completed"
						let response = await jobtoDatabase({ payload, db })


					})(message).catch((err) => {
						console.log(err);
					})
				})
				// Notice that we dont resolve this request(Promose function). This is because if we resolve this, the db connection will be closed by the middleware we used in server.js
				// In order to keep this running in background, we will not resolve this, as we are closing our child process we will not hit the thread limition for nodejs. 
				// In Frontend, they don't wait for this to get resolved. THat's how the bulk upload is working. 
		
				// resolve("triggered")
			} catch (error) {
				// console.log(error)
				reject(error)
			}


		});
	}




	return {
		viewdocuments,
		createdocuments,
		updatedocuments,
		deletedocuments,
		statusdocuments,
		triggerSFTPDownload,
		triggerbulkupload,
		getdocumentsStatus,
		getuploadid,
		getuploadurl,
		complete,
		trigger
	};

};