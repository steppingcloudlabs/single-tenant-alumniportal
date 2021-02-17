/* eslint-disable */
const documentserivce = require("../../service/documents")();
const bulkService = require("../../service/bulk/index")();
const utils = require("../../utils/database/index")();
const sftpservice = require("../../service/sftp")();
const dbClass = require("sap-hdbext-promisfied");

module.exports = {
	// News Controllers
	getdocuments: async (req, res) => {
		try {
			const payload = req.query;
			let db = new dbClass(req.db);
			let response = await documentserivce.viewdocuments({
				payload,
				db
			});
			if (response) {
				if (response.length == 0) response = response

				const LIMIT = payload.LIMIT == undefined ? 10 : payload.LIMIT
				const OFFSET = payload.OFFSET == undefined ? 0 : payload.OFFSET
				tablename = "SCLABS_ALUMNIPORTAL_DOCUMENTS_DOCUMENTS"
				const schema = await utils.currentSchema({
					db
				})

				let pagecount = await utils.getPageCount({
					schema,
					tablename,
					db
				})
				paginationobject = {
					'TOTALPAGES': Math.ceil(pagecount[0].TOTALROWS / LIMIT),
					'LIMIT': parseInt(LIMIT),
					'OFFSET': parseInt(OFFSET)
				}
				res.type("application/json").status(200).send({
					status: "200",
					result: response,
					pagination: paginationobject
				});
			} else {
				res.type("application/json").status(400).send({
					status: "400",
					result: response
				});
			}

		} catch (error) {
			req.logger.error(` Error for ${req.logger.getTenantId()} at admin/action/index/getdocuments ${error}`);
			res.type("application/json").status(500).send({
				status: "500",
				error: error
			});
		}

	},

	createdocuments: async (req, res) => {
		try {
			const payload = req.body;
			let db = new dbClass(req.db);
			let response = await documentserivce.createdocuments({
				payload,
				db
			});
			if (response) {
				res.type("application/json").status(200).send({
					status: "200",
					result: response
				});
			} else {
				res.type("application/json").status(200).send({
					status: "500",
					result: "Error"
				});

			}
		} catch (error) {
			req.logger.error(` Error for ${req.logger.getTenantId()} at admin/action/index/getdocuments ${error}`);
			res.type("application/json").status(500).send({
				status: "500",
				error: error
			});
		}

	},

	updatedocuments: async (req, res) => {
		try {
			const payload = req.body;
			let db = new dbClass(req.db);
			let response = await documentserivce.updatedocuments({
				payload,
				db
			});
			if (response) {
				res.type("application/json").status(200).send({
					status: "200",
					result: response
				});
			} else {
				res.type("application/json").status(200).send({
					status: "500",
					result: "Error"
				});

			}

		} catch (error) {
			req.logger.error(` Error for ${req.logger.getTenantId()} at admin/action/index/getdocuments ${error}`);
			res.type("application/json").status(500).send({
				status: "500",
				error: error
			});
		}

	},

	deletedocuments: async (req, res) => {
		try {

			const payload = req.body;
			let db = new dbClass(req.db);

			let response = await documentserivce.deletedocuments({
				payload,
				db
			});

			if (response) {
				res.type("application/json").status(200).send({
					status: "200",
					result: response
				});
			} else {
				res.type("application/json").status(200).send({
					status: "500",
					result: "Error"
				});

			}
		} catch (error) {
			req.logger.error(` Error for ${req.logger.getTenantId()} at admin/action/index/getdocuments ${error}`);
			res.type("application/json").status(200).send({
				status: "400",
				result: "Element Not Found"
			});
		}
	},
	statusdocuments: async (req, res) => {
		try {
			const payload = req.query;
			let db = new dbClass(req.db);
			let response = await documentserivce.statusdocuments({
				payload,
				db
			});
			if (response) {
				res.type("application/json").status(200).send({
					status: "200",
					result: response,
				});
			} else {
				res.type("application/json").status(400).send({
					status: "400",
					result: response
				});
			}

		} catch (error) {
			req.logger.error(` Error for ${req.logger.getTenantId()} at admin/action/index/getdocuments ${error}`);
			res.type("application/json").status(500).send({
				status: "500",
				error: error.message
			});
		}

	},

	triggersftpdownload: async (req, res, next) => {
		try {
			let db = new dbClass(req.db);
			console.log(req.db)
			// call sftp credential api 
			let payload = {};
			let sftp = await sftpservice.getCredentials({ db }).catch((error) => console.log(error));

			let config = {}
			config.host = sftp[0].URL
			config.port = sftp[0].PORT
			config.username = sftp[0].USERNAME
			config.password = sftp[0].PASSWORD
			payload.config = config;
			payload.source = sftp[0].PATH
			payload.destination = "./tmp"

			let response = await documentserivce.triggerSFTPDownload({
				payload,
				db
			});

			if (response) {
				res.type("application/json").status(200).send({
					status: "200",
					result: response,
				});
			} else {
				res.type("application/json").status(400).send({
					status: "400",
					result: response
				});
			}

		} catch (error) {
			req.logger.error(` Error for ${req.logger.getTenantId()} at admin/action/index/documents/triggerBulkUpload ${error}`);
			res.type("application/json").status(500).send({
				status: "500",
				error: error.message
			});
		}
	},

	triggerbulkupload: async (req, res, next) => {
		try {
			// let db = new dbClass(req.db);

			let response = await documentserivce.triggerbulkupload({
				req
			});

			if (response) {
				res.type("application/json").status(200).send({
					status: "200",
					result: response,
				});
			} else {
				res.type("application/json").status(400).send({
					status: "400",
					result: response
				});
			}

		} catch (error) {
			req.logger.error(` Error for ${req.logger.getTenantId()} at admin/action/index/documents/triggerBulkUpload ${error}`);
			res.type("application/json").status(500).send({
				status: "500",
				error: error.message
			});
		}
	},

	bulkuploadstatus: async (req, res, next) => {
		try {
			let db = new dbClass(req.db);

			let response = await documentserivce.getdocumentsStatus({
				db
			});

			if (response) {
				res.type("application/json").status(200).send({
					status: "200",
					result: response,
				});
			} else {
				res.type("application/json").status(400).send({
					status: "400",
					result: response
				});
			}

		} catch (error) {
			req.logger.error(` Error for ${req.logger.getTenantId()} at admin/action/index/documents/triggerBulkUpload ${error}`);
			res.type("application/json").status(500).send({
				status: "500",
				error: error.message
			});
		}
	}
}