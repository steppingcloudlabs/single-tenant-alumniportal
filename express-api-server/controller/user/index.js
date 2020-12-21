const userservice = require("../../service/user/index.js")();
const dbClass = require("sap-hdbext-promisfied");

module.exports = {

	getprofile: async (req, res, next) => {
		try {
			const payload = req.query;
			let db = new dbClass(req.db);
			let response = await userservice.getprofile({
				payload,
				db
			});
			console.log(response)
			if (response) {
				res.status(200).send({
					status: "200",
					result: response,
				});
			} else {
				res.status(400).send({
					status: "400",
					result: `${e.toString()}`
				});
			}
		} catch (error) {
			res.type("application/json").status(500).send({
				status: "500",
				error: error
			});
		}
	},
	updateprofile: async (req, res, next) => {
		try {
			const payload = req.body;
			const logger = req.logger;
			let db = new dbClass(req.db);
			let response = await userservice.updateprofile({
				payload,
				logger,
				db
			});
			if (response) {
				res.status(200).send({
					status: "200",
					result: response,
				});
			} else {
				res.status(400).send({
					status: "400",
					result: `${e.toString()}`
				});
			}
		} catch (error) {
			req.logger.error(` Error for ${req.logger.getTenantId()} at user/action/index/updateprofile ${error}`);
			res.type("application/json").status(500).send({
				status: "500",
				error: error
			});
		}
	},
	deleteprofile: async (req, res, next) => {
		try {
			const payload = req.body;
			let db = new dbClass(req.db);
			let response = await userservice.deleteprofile({
				payload,
				db
			});
			if (response) {
				res.status(200).send({
					status: "200",
					result: response,
				});
			} else {
				res.status(400).send({
					status: "400",
					result: `${e.toString()}`
				});
			}
		} catch (error) {
			res.type("application/json").status(500).send({
				status: "500",
				error: error
			});
		}
	},
}