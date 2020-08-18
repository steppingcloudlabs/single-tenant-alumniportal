	/* eslint-disable */
	const nefserivce = require("../../service/nef")();
	const dbClass = require("sap-hdbext-promisfied");
	module.exports = {
		// News Controllers
		getnews: async(req, res) => {
			const payload = req.params;
			let db = new dbClass(req.db);
			const response = await nefserivce.viewnews({
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
		},

		createnews: async(req, res) => {
			try {
				const payload = req.body;
				let db = new dbClass(req.db);
				const response = await nefserivce.createnews({
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

		updatenews: async(req, res) => {
			try {
				const payload = req.body;
				let db = new dbClass(req.db);
				const response = await nefserivce.updatenews({
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
		deletenews: async(req, res) => {
			try {

				const payload = req.body;
				let db = new dbClass(req.db);

				const response = await nefserivce.deletenews({
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
		//  FAQ CONTROLLERS 

		getfaq: async(req, res) => {
			try {
				const payload = req.query;
				let db = new dbClass(req.db);
				const response = await nefserivce.viewfaq({
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
				res.status(500).send({
					status: "500",
					result: error
				});
			}
		},

		createfaq: async(req, res) => {
			try {
				const payload = req.body;
				let db = new dbClass(req.db);
				const response = await nefserivce.createfaq({
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
						result: response
					});
				}
			} catch (error) {
				res.status(200).send({
					status: "400",
					result: error
				});
			}

		},
		updatefaq: async(req, res) => {
			const payload = req.params;
			let db = new dbClass(req.db);
			const response = await nefserivce.updatefaq({
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
		},
		deletefaq: async(req, res) => {
			try {
				const payload = req.body;
				let db = new dbClass(req.db);
				const response = await nefserivce.deletefaq({
					payload,
					db
				});
				if (response) {
					res.status(200).send({
						status: "200",
						result: response,
					});
				}
			} catch (error) {
				res.status(200).send({
					status: "400",
					result: "Element Not Found"
				});
			}
		},
		//Event COntroller
		//Responsibility by Maaz
		getevent: async(req, res) => {
			try {

				const payload = req.params;
				let db = new dbClass(req.db);
				const response = await nefserivce.getevent({
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
			} catch {
				res.status(400).send({
					status: "400",
					result: "Error"
				});
			}
		},

		createevent: async(req, res) => {
			try {
				const payload = req.body;
				let db = new dbClass(req.db);
				const response = await nefserivce.createevent({
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
				res.type("text/plain").status(200).send({
					status: "500",
					result: error
				});
			}

		},

		updateevent: async(req, res) => {
			try {
				const payload = req.body;
				let db = new dbClass(req.db);
				const response = await nefserivce.updateevent({
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
		deleteevent: async(req, res) => {
			try {
				const payload = req.body;
				let db = new dbClass(req.db);
				const response = await nefserivce.deleteevent({
					payload,
					db
				});
				if (response) {
					res.status(200).send({
						status: "200",
						result: response,
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