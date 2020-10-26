const ticketserivce = require("../../service/askhr")();
const dbClass = require("sap-hdbext-promisfied");

module.exports = {
	createticket: async(req, res) => {
		try {
			const payload = req.body;
			let db = new dbClass(req.db);
			const response = await ticketserivce.createticket({
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
	updateticket: async(req, res) => {
		try {
			const payload = req.body;
			let db = new dbClass(req.db);
			const response = await ticketserivce.updateticket({
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
	getticket: async(req, res) => {

		try {

			const payload = req.params;
			let db = new dbClass(req.db);
			const response = await ticketserivce.getticket({
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
	deleteticket: async(req, res) => {
		try {
			const payload = req.body;
			let db = new dbClass(req.db);
			const response = await ticketserivce.deleteticket({
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

	// MESSAGE CONTROLLERS
	createmessage: async(req, res) => {
		try {
			const payload = req.body;
			let db = new dbClass(req.db);
			const response = await ticketserivce.createmessage({
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
	updatemessage: async(req, res) => {
		try {
			const payload = req.body;
			let db = new dbClass(req.db);
			const response = await ticketserivce.updatemessage({
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
	getmessage: async(req, res) => {

		try {

			const payload = req.query;
			let db = new dbClass(req.db);
			const response = await ticketserivce.getmessage({
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
	deletemessage: async(req, res) => {
		try {
			const payload = req.body;
			let db = new dbClass(req.db);
			const response = await ticketserivce.deletemessage({
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