const adminserivce = require("../../service/admin/userindex.js")();
const dbClass = require("sap-hdbext-promisfied");

module.exports = {
	createuser: async (req, res) => {
		try {
			const payload = req.body;
			const logger = req.logger;
			let db = new dbClass(req.db);
			let response = await adminserivce.createuser({
				payload,
				logger,

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
			req.loggger.error(` Error for ${req.logger.getTenantId()} at user/action/index/createuser ${error}`);
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
			req.loggger.error(` Error for ${req.logger.getTenantId()} at user/action/index/updateuser ${error}`);
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

			if (response) {
				response = response.length > 1 ? response : response[0];
				res.type("application/json").status(200).send({
					status: "200",
					result: response,
				});
			} else {
				res.status(400).send({
					status: "400",
					result: response
				});
			}
		} catch (error) {
			req.loggger.error(` Error for ${req.logger.getTenantId()} at user/action/index/getuser ${error}`);
			res.status(400).send({
				status: "400",
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
			req.loggger.error(` Error for ${req.logger.getTenantId()} at user/action/index/updateuser ${error}`);
			res.status(500).send({
				status: "500",
				result: error
			});
		}
	},

}