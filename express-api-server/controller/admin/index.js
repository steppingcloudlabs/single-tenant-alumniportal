`
# Documentation

Ths file is a json objext exported to module. 
Adding documentation on first function all other function wroks the same way throughtout the application.

## Improvement 

1. By refactoring the service layer, we can reduce the if else statement in controller layer. The code will me more maintainable. 

`
const adminserivce = require("../../service/admin/index.js")() // service function call;
const dbClass = require("sap-hdbext-promisfied"); // creates db connection 
const utils = require("../../utils/database/index")();
module.exports = {

	/*
	Controller for creating admin.
	*/ 
	createuser: async (req, res) => {
		try {
			// extracting the body from request
			const payload = req.body;
			// extracting the logger object from the request. 
			const logger = req.logger; 
			// getting db connection of this request.
			let db = new dbClass(req.db);

			// calling our service layer for admin creation
			let response = await adminserivce.createuser({
				payload,
				logger,
				db 
			});

			// Handling different cases of the response we get from out service layer and setting appropriate response and status codes. 
			if (response == "userexists") {
				res.type("application/json").status(200).send({
					status: "201",
					result: "User Id already exists"
				});
			} else if (response == "onyadminsallowed") {
				res.type("application/json").status(200).send({
					status: "201",
					result: "Only admin usertype allowed. Use add manager api for adding hr usertype."
				});
			} else {
				res.type("application/json").status(200).send({
					status: "200",
					result: response
				});
			}

		} catch (error) {
			req.logger.error(` Error for ${req.logger.getTenantId()}at admin/action/index/createuser ${error}`);
			res.type("application/json").status(500).send({
				status: "500",
				error: error
			});
		}

	},

	/*
	Controller for updating admin 
	*/ 
	updateuser: async (req, res) => {
		try {
			const payload = req.body;
			const logger = req.logger;
			// getting db connection of this request
			let db = new dbClass(req.db);
			let response = await adminserivce.updateuser({
				payload,
				logger,
				db
			});

			if (response) {
				res.type("application/json").status(200).send({
					status: "400",
					result: response
				});
			} else {
				res.type("application/json").status(200).send({
					status: "500",
					result: "Error"
				});

			}

		} catch (error) {
			req.logger.error(` Error for ${req.logger.getTenantId()}at admin/action/index/updateuser ${error}`);
			res.type("application/json").status(500).send({
				status: "500",
				error: error
			});
		}
	},
	/*
	Controller to get  admin 
	*/ 
	getuser: async (req, res) => {
		try {
			const payload = req.query;
			const logger = req.logger;
			// getting db connection of this request
			let db = new dbClass(req.db);
			let response = await adminserivce.getuser({
				payload,
				logger,
				db
			});

			if (response) {

				if (response.length == 0) response = response

				const LIMIT = payload.LIMIT == undefined ? 10 : payload.LIMIT
				const OFFSET = payload.OFFSET == undefined ? 0 : payload.OFFSET
				tablename = "SCLABS_ALUMNIPORTAL_PERSONALINFORMATION_ADMIN_HR_PERSONALINFORMATION"
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
				res.status(400).send({
					status: "400",
					result: response
				});
			}
		} catch (error) {
			req.logger.error(` Error for ${req.logger.getTenantId()} at admin/action/index/updateuser ${error}`);
			res.status(500).send({
				status: "500",
				result: error
			});
		}

	},
	/*
	Controller for deleting admin 
	*/ 
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
			req.logger.error(` Error for ${req.logger.getTenantId()} at admin/action/index/deleteuser ${error}`);
			res.status(500).send({
				status: "500",
				result: error
			});
		}
	},

}