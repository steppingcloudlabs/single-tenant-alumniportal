const uuid = require("uuid");
const xsenv = require("@sap/xsenv");
const util = require("../../utils/index.js");
const bulkService = require("../bulk/index.js")();
const utils = require("../../utils/database/index.js")();
const AWS = require("aws-sdk")

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

	//Zip file to SAP Object Store (S3)

	const getuploadid = ({ payload, bucketname }) => {
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


				let params = {
					Bucket: xsService.objectstore.bucket,
					Key: payload.query.filename,
					ContentType: payload.query.filetype
				};

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


				let params = {
					Bucket: xsService.objectstore.bucket,
					Key: payload.filename,
					PartNumber: payload.partnumber,
					UploadId: payload.uploadid
				};

				console.log(params)
				let response = await s3.getSignedUrlPromise('uploadPart', params)
				console.log(response)
				resolve({ URL: response })

			} catch (error) {
				reject(error)
			}
		})
	}
	const complete = ({ payload }) => {
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


				let params = {
					Bucket: xsService.objectstore.bucket,
					Key: payload.payload.filename,
					MultipartPartUpload: {
						Parts: payload.payload.parts
					},
					UploadId: payload.payload.uploadid
				};

				let response = await s3.completeMultipartUpload(params).promise()
				resolve(response)

			} catch (error) {
				reject(error)
			}
		})
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
		complete
	};

};