const adminserivce = require("../../service/admin")();
const dbClass = require("sap-hdbext-promisfied");
const adminadminserivce = require("../../service/admin/indexadmin.js")();
module.exports = {
	createadmin: async(req, res) => {
		try {
			const payload = req.body;

			let db = new dbClass(req.db);
			const response = await adminserivce.createadmin({
				payload,
				db
			});

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
	updateadmin: async(req, res) => {
		try {
			const payload = req.body;
			let db = new dbClass(req.db);
			const response = await adminserivce.updateadmin({
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
			res.type("application/json").status(500).send({
				status: "500",
				error: error
			});
		}
	},
	getadmin: async(req, res) => {
		try {
			const payload = req.params;

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
	},
	createadmin: async(req, res) => {
		try {
			const payload = req.body;

			let db = new dbClass(req.db);
			const response = await adminadminserivce.createadmin({
				payload,
				db
			});

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
	updateadmin: async(req, res) => {
		try {
			const payload = req.body;
			let db = new dbClass(req.db);
			const response = await adminadminserivce.updateadmin({
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
			res.type("application/json").status(500).send({
				status: "500",
				error: error
			});
		}
	},
	getadmin: async(req, res) => {
		try {
			const payload = req.params;

			let db = new dbClass(req.db);
			const response = await adminadminserivce.getadmin({
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
			const response = await adminadminserivce.deleteadmin({
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
	},

}