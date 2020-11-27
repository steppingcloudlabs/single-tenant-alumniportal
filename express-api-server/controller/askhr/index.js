const ticketserivce = require("../../service/askhr")();
const dbClass = require("sap-hdbext-promisfied");

module.exports = {
	createticket: async (req, res) => {
		try {
			let payload = req.body;
			// if (req.authInfo.checkScope('$XSAPPNAME.Adminstrator')) {
			// 	payload.USERTYE = 'Administroator'
			// }
			// if (req.authInfo.checkScope('$XSAPPNAME.HR')) {
			// 	payload.USERTYE = 'HR'
			// }
			payload.payload.USERTYE = 'HR'
			let db = new dbClass(req.db);
			let response = await ticketserivce.createticket({
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
			req.logger.error(` Error for ${req.logger.getTenantId()} at user/action/askhr/index/createticket ${error}`);
			res.type("application/json").status(500).send({
				status: "500",
				error: error
			});
		}

	},
	updateticket: async (req, res) => {
		try {
			const payload = req.body;
			let db = new dbClass(req.db);
			let response = await ticketserivce.updateticket({
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
			req.logger.error(` Error for ${req.logger.getTenantId()} at admin/action/askhr/index/updateuser ${error}`);
			res.type("application/json").status(500).send({
				status: "500",
				error: error
			});
		}
	},
	getticket: async (req, res) => {

		try {
			const payload = req.query;
			let db = new dbClass(req.db);
			let response = await ticketserivce.getticket({
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
			req.logger.error(` Error for ${req.logger.getTenantId()} at admin/action/askhr/index/getticket ${error}`);
			res.status(400).send({
				status: "400",
				result: error
			});
		}

	},
	deleteticket: async (req, res) => {
		try {

			const payload = req.body;
			let db = new dbClass(req.db);

			let response = await ticketserivce.deleteticket({
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
			req.logger.error(` Error for ${req.logger.getTenantId()} at admin/action/askhr/index/deleteticket ${error}`);

			res.status(200).send({
				status: "400",
				result: "Element Not Found"
			});
		}
	},

	// MESSAGE CONTROLLERS
	createmessage: async (req, res) => {
		try {
			const payload = req.body;
			let db = new dbClass(req.db);
			console.log(payload)
			let response = await ticketserivce.createmessage({
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
					status: "400",
					result: response

				});
			}
		} catch (error) {
			req.logger.error(` Error for ${req.logger.getTenantId()} at admin/action/askhr/index/createmessage ${error}`);

			res.type("application/json").status(500).send({
				status: "500",
				error: error
			});
		}

	},
	updatemessage: async (req, res) => {
		try {
			const payload = req.body;
			let db = new dbClass(req.db);
			let response = await ticketserivce.updatemessage({
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
					status: "400",
					result: response
				});

			}

		} catch (error) {
			req.logger.error(` Error for ${req.logger.getTenantId()} at admin/action/askhr/index/updatemessage ${error}`);

			res.type("application/json").status(500).send({
				status: "500",
				error: error
			});
		}
	},
	getmessage: async (req, res) => {

		try {

			const payload = req.query;
			let db = new dbClass(req.db);
			console.log(payload)
			let response = await ticketserivce.getmessage({
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
				req.logger.info(`400 response for ${req.logger.getTenantId()} at admin/action/askhr/index/updatemessage ${response}`);

				res.status(400).send({
					status: "400",
					result: response
				});
			}

		} catch (error) {
			req.logger.error(` Error for ${req.logger.getTenantId()} at admin/action/askhr/index/updatemessage ${error}`);

			res.type("application/json").status(500).send({
				status: "500",
				result: error
			});
		}

	},
	deletemessage: async (req, res) => {
		try {
			const payload = req.body;
			let db = new dbClass(req.db);
			let response = await ticketserivce.deletemessage({
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
			req.logger.error(` Error for ${req.logger.getTenantId()} at admin/action/askhr/index/deletemessage ${error}`);

			res.status(200).send({
				status: "400",
				result: "Element Not Found"
			});
		}
	},

	// MANAGER CONTROLLERS

	createmanager: async (req, res) => {
		try {
			const payload = req.body;
			let db = new dbClass(req.db);
			let response = await ticketserivce.createmanager({
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
			req.logger.error(` Error for ${req.logger.getTenantId()} at admin/action/askhr/index/createmanager ${error}`);

			res.type("application/json").status(500).send({
				status: "500",
				error: error
			});
		}

	},
	updatemanager: async (req, res) => {
		try {
			const payload = req.body;
			let db = new dbClass(req.db);
			let response = await ticketserivce.updatemanager({
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
					status: "400",
					result: response
				});

			}

		} catch (error) {
			req.logger.error(` Error for ${req.logger.getTenantId()} at admin/action/askhr/index/updatemanager ${error}`);

			res.type("application/json").status(500).send({
				status: "500",
				error: error
			});
		}
	},
	getmanager: async (req, res) => {

		try {

			const payload = req.query;
			let db = new dbClass(req.db);
			let response = await ticketserivce.getmanager({
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
			req.logger.error(` Error for ${req.logger.getTenantId()} at admin/action/askhr/index/getmessage ${error}`);

			res.status(500).send({
				status: "500",
				result: error
			});
		}

	},
	getmanagerprofile: async (req, res) => {

		try {

			const payload = req.query;
			let db = new dbClass(req.db);
			let response = await ticketserivce.getmanagerprofile({
				payload,
				db
			});
			console.log(response)
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
			req.logger.error(` Error for ${req.logger.getTenantId()} at admin/action/askhr/index/getmanagerprofile ${error}`);
			res.status(500).send({
				status: "500",
				result: error
			});
		}

	},
	deletemanager: async (req, res) => {
		try {
			const payload = req.body;
			let db = new dbClass(req.db);
			let response = await ticketserivce.deletemanager({
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
			req.logger.error(` Error for ${req.logger.getTenantId()} at admin/action/askhr/index/deletemanager ${error}`);
			res.status(200).send({
				status: "400",
				result: "Element Not Found"
			});
		}
	},

}