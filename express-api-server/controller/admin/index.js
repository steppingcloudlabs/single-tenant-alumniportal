const adminserivce = require("../../service/admin")();
const dbClass = require("sap-hdbext-promisfied");

    module.exports = {
    	getuser: async(req, res) => {
			try {
				const payload = req.params;
				let db = new dbClass(req.db);
				const response = await adminserivce.viewuser({
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
		createuser: async(req, res) => {
			try {
				const payload = req.body;
			
				let db = new dbClass(req.db);
				const response = await adminserivce.createuser({
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
		updateuser: async(req, res) => {
			try {
				const payload = req.body;
				let db = new dbClass(req.db);
				const response = await adminserivce.updateuser({
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
		
    }
   