const jobservice = require("../../service/job/index.js")();
const dbClass = require("sap-hdbext-promisfied");

    module.exports = {
		createjob: async(req, res) => {
			try {
				const payload = req.body;
				let db = new dbClass(req.db);
				const response = await jobservice.createjob({
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
		updatejob: async(req, res) => {
			try {
				const payload = req.body;
				let db = new dbClass(req.db);
				const response = await jobservice.updatejob({
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
        getjob: async(req, res) => {
    	
			try {
			
				const payload = req.params;
				let db = new dbClass(req.db);
				const response = await jobservice.getjob({
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
		deletejob: async(req, res) => {
			try {
				const payload = req.body;
				let db = new dbClass(req.db);
				const response = await jobservice.deletejob({
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
   