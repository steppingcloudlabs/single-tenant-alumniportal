const skillsserivce = require("../../service/skills")();
const dbClass = require("sap-hdbext-promisfied");

module.exports = {
	createskills: async (req, res) => {
		try {
			const payload = req.body;
			let db = new dbClass(req.db);
			let response = await skillsserivce.createskills({
				payload,
				db
			});
			console.log(response);
			if (response) {
				res.type("application/json").status(200).send({
					status: "200",
					result: response
				});
			} else {
				res.type("text/plain").status(200).send({
					status: "500",
					result: "Error"

				});
			}
		} catch (error) {
			res.type("text/plain").status(500).send({
				status: "500",
				error: error
			});
		}

	},
	updateskills: async (req, res) => {
		try {
			const payload = req.body;
			let db = new dbClass(req.db);
			let response = await skillsserivce.updateskills({
				payload,
				db
			});
			if (response) {
				res.type("application/json").status(200).send({
					status: "200",
					result: response
				});
			} else {
				res.type("text/plain").status(200).send({
					status: "500",
					result: "Error"
				});

			}

		} catch (error) {
			res.type("text/plain").status(500).send({
				status: "500",
				error: error
			});
		}
	},
	getskills: async (req, res) => {

		try {

			const payload = req.query;
			let db = new dbClass(req.db);
			let response = await skillsserivce.getskills({
				payload,
				db
			});
			if (response) {
				if (response.length == 0) response = response;
					else response = response.length > 1 ? response : response[0];
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
			res.status(400).send({
				status: "400",
				result: error
			});
		}

	},
	deleteskills: async (req, res) => {
		try {
			const payload = req.body;
			let db = new dbClass(req.db);
			let response = await skillsserivce.deleteskills({
				payload,
				db
			});
			if (response) {
				res.type("application/json").status(200).send({
					status: "200",
					result: response
				});
			} else {
				res.type("text/plain").status(200).send({
					status: "500",
					result: "Error"
				});

			}
		} catch (error) {
			res.status(200).send({
				status: "400",
				result: "Element Not Found"
			});
		}
	},

}