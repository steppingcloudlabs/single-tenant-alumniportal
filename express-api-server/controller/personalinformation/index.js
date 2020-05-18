	/* eslint-disable */
	const documentserivce = require("../../service/personalinformation")();
	const dbClass = require("sap-hdbext-promisfied");
	module.exports = {
		// News Controllers
		getpersonalinformation: async(req, res) => {
			try {
				const payload = req.params;
				let db = new dbClass(req.db);
				const response = await documentserivce.viewpersonalinformation({
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

		createpersonalinformation: async(req, res) => {
			try {
				const payload = req.body;
				let db = new dbClass(req.db);
				const response = await documentserivce.createpersonalinformation({
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

		updatepersonalinformation: async(req, res) => {
			try {
				const payload = req.body;
				let db = new dbClass(req.db);
				const response = await documentserivce.updatepersonalinformation({
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

		deletepersonalinformation: async(req, res) => {
			try {

				const payload = req.body;
				let db = new dbClass(req.db);

				const response = await documentserivce.deletepersonalinformation({
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
		}
	}