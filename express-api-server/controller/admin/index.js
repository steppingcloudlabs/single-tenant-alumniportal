const adminserivce = require("../../service/admin")();
const dbClass = require("sap-hdbext-promisfied");

module.exports = {
	createuser: async(req, res) => {
		try {
			const payload = req.body;
		    let db = new dbClass(req.db);
			const response = await adminserivce.createuser({
				payload,
				db
			});
		    if (response=="userexists") {
				res.type("application/json").status(200).send({
					status: "200",
					result: "User Id already exists"
				});
			}
			else {
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
	updateuser: async(req, res) => {
		try {
			const payload = req.body;
			let db = new dbClass(req.db);
			const response = await adminserivce.updateuser({
				payload,
				db
			});
			console.log(response)
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
	getuser: async(req, res) => {
		try {
			const payload = req.params;
			let db = new dbClass(req.db);
			const response = await adminserivce.getuser({
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
	deleteuser: async(req, res) => {
		try {
			const payload = req.body;
			let db = new dbClass(req.db);
			const response = await adminserivce.deleteuser({
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