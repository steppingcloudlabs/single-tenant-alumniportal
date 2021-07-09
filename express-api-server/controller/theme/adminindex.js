`
# Documentation

Ths file is a json objext exported to module. 
Adding documentation on first function all other function wroks the same way throughtout the application.

## Improvement 

1. By refactoring the service layer, we can reduce the if else statement in controller layer. The code will me more maintainable. 

`
const adminservice = require("../../service/theme/adminindex.js")() // service function call;
const dbClass = require("sap-hdbext-promisfied"); // creates db connection 
const utils = require("../../utils/database/index")();
module.exports = {

	/*
	Controller for updating/inserting color theme.
	*/ 
	updatecolor: async (req, res) => {
		try {
			// extracting the body from request
			const payload = req.body;
			// extracting the logger object from the request. 
			const logger = req.logger; 
			// getting db connection of this request.
			let db = new dbClass(req.db);

			// calling our service layer for admin creation
			let response = await adminservice.updatecolor({
				payload,
				logger,
				db 
			});

			// Handling different cases of the response we get from out service layer and setting appropriate response and status codes. 
			if (response == 1) {
				res.type("application/json").status(200).send({
					status: "200",
					result: "Color theme updated successfully"
				});
			} else {
				res.type("application/json").status(200).send({
					status: "200",
					result: response
				});
			}

		} catch (error) {
			req.logger.error(` Error for ${req.logger.getTenantId()}at admin/action/theme/updatecolor ${error}`);
			res.type("application/json").status(500).send({
				status: "500",
				error: error
			});
		}

	},

	
	/*
	Controller to get  color theme 
	*/ 
	getcolor: async (req, res) => {
		try {
			const payload = req.query;
			const logger = req.logger;
			// getting db connection of this request
			let db = new dbClass(req.db);
			let response = await adminservice.getcolor({
				payload,
				logger,
				db
			});

			if (response) {

                let result = Object.keys(response['0']).reduce((prev, current) => 
                ({ ...prev, [current.toLowerCase()]: response['0'][current]}), {})
				res.type("application/json").status(200).send({
					status: "200",
					result: result,
					
				});
			} else {
				res.status(400).send({
					status: "400",
					result: response
				});
			}
		} catch (error) {
			req.logger.error(` Error for ${req.logger.getTenantId()} at admin/theme/getcolor ${error}`);
			res.status(500).send({
				status: "500",
				result: error
			});
		}

	},
	


}