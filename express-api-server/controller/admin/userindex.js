`
Functionlaity is same as of admin(index.js)
`
const adminserivce = require("../../service/admin/userindex.js")();
const dbClass = require("sap-hdbext-promisfied");
const utils = require("../../utils/database/index")();


module.exports = {
	createuser: async (req, res) => {
		try {
			const payload = req.body;
			const logger = req.logger;
			let db = new dbClass(req.db);
			let response = await adminserivce.createuser({
				payload,
				logger,
				db
			});

			if (response == "userexists") {
				res.type("application/json").status(200).send({
					status: "200",
					result: "User Id already exists"
				});
			} else {

				res.type("application/json").status(200).send({
					status: "200",
					result: response
				});
			}

		} catch (error) {
			req.logger.error(` Error for ${req.logger.getTenantId()} at admin/action/userindex/createuser ${error}`);
			res.type("application/json").status(500).send({
				status: "500",
				error: error
			});
		}

	},
	updateuser: async (req, res) => {
		try {
			const payload = req.body;
			const logger = req.logger;
			let db = new dbClass(req.db);
			let response = await adminserivce.updateuser({
				payload,
				logger,
				db
			});
			if (response) {
				if (response.length == 0) response = response

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
			req.logger.error(` Error for ${req.logger.getTenantId()} at admin/action/userindex/updateuser ${error}`);
			res.type("application/json").status(500).send({
				status: "500",
				error: error
			});
		}
	},
	getuser: async (req, res) => {
		try {
			const payload = req.query;
			const logger = req.logger;
			let db = new dbClass(req.db);
			let response = await adminserivce.getuser({
				payload,
				logger,
				db
			});

			// An Ugly attempt to get the page number and total pages. You can try to improve this, you'll be able to improve response time bt 2 or 15ms.
			if (response) {
				
				// If there is not data then there are no pages.
				if (response.length == 0) response = response

				// Manually setting the limit and offsets, the configuration is same as the service layer (You are in controller layer BTW).
				const LIMIT = payload.LIMIT == undefined ? 10 : payload.LIMIT
				const OFFSET = payload.OFFSET == undefined ? 0 : payload.OFFSET

				// Important to set the table name, good chance that you might duck this up and waste 2-3 hours figuring out why pagination is wrong. 
				
				tablename = "SCLABS_ALUMNIPORTAL_MASTERDATA_MASTERDATA"
				const schema = await utils.currentSchema({
					db
				})
				// This uril function will give you the page count of the table you set above. 
				let pagecount = await utils.getPageCount({
					schema,
					tablename,
					db
				})
				
				// Setting the paginationObject that we'll send in response to frontend.
				paginationobject = {
					'TOTALPAGES': Math.ceil(pagecount[0].TOTALROWS / LIMIT),
					'LIMIT': parseInt(LIMIT),
					'OFFSET': parseInt(OFFSET)
				}
				// Setting the status and pagination object in the response.
				res.type("application/json").status(200).send({
					status: "200",
					result: response,
					pagination: paginationobject
				});
			} else {
				// If there is some error then send 400
				res.status(400).send({
					status: "400",
					result: response
				});
			}
		} catch (error) {
			// logging 
			req.logger.error(` Error for ${req.logger.getTenantId()} at admin/action/userindex/getuser ${error.message}`);
			res.status(400).send({
				status: "500",
				result: error
			});
		}

	},
	deleteuser: async (req, res) => {
		try {
			const payload = req.body;
			const logger = req.logger;
			let db = new dbClass(req.db);
			let response = await adminserivce.deleteuser({
				payload,
				logger,
				db
			});
			if (response) {

				res.type("application/json").status(200).send({
					status: "200",
					result: response
				});
			} else {
				res.type("application/json").status(200).send({
					status: "400",
					result: response
				});

			}
		} catch (error) {
			req.logger.error(` Error for ${req.logger.getTenantId()} at admin/action/userindex/deleteuser ${error}`);
			res.status(500).send({
				status: "500",
				result: error
			});
		}
	},

	// --------------------------------Below function is not useable, you can use the boilerplate code for your use --------------------------------------
	createuserbulk: async (req, res) => {
		try {
			const payload = req;
			let db = new dbClass(req.db);
			let response = await adminserivce.createuserbulk({
				payload,
				db
			});

			if (response == "userexists") {
				res.type("application/json").status(200).send({
					status: "200",
					result: "User Id already exists"
				});
			} else {

				res.type("application/json").status(200).send({
					status: "200",
					result: response
				});
			}

		} catch (error) {
			req.logger.error(` Error for ${req.logger.getTenantId()} at admin/action/userindex/create/_bulk ${error}`);
			res.status(500).send({
				status: "500",
				result: error.message
			});
		}
	}
}