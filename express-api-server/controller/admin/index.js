const dbClass = require("sap-hdbext-promisfied");
const adminserivce = require("../../service/admin/indexadmin.js")();
module.exports = {
	createadmin: async(req, res) => {
		try {
			const payload = req.body;
			let db = new dbClass(req.db);
			const response = await adminserivce.createadmin({
				payload,
				db
			});
			console.log(response)
			if (response == "adminexists") {
				res.type("application/json").status(200).send({
					status: "200",
					result: "admin Id already exists"
				});
			} else {
				res.type("application/json").status(200).send({
					status: "200",
					result: response
				});
			}

		} catch (error) {
			res.type("application/json").status(500).send({
				status: "500",
				error: error
			});
		}

	},
	getadmin: async(req, res) => {
		try {
			const payload = req.query;

			let db = new dbClass(req.db);
			const response = await adminserivce.getadmin({
				payload,

				db
			});

			if (response) {
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
	deleteadmin: async(req, res) => {
		try {
			const payload = req.body;
			let db = new dbClass(req.db);
			const response = await adminserivce.deleteadmin({
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
					status: "404",
					result: response
				});

			}
		} catch (error) {
			res.status(200).send({
				status: "400",
				result: "Element Not Found"
			});
		}
	}

}