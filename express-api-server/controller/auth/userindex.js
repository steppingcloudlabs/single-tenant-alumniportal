const authserivce = require("../../service/auth/userindex.js")();
const dbClass = require("sap-hdbext-promisfied");

    module.exports = {
		login: async(req, res) => {
			try {
				const payload = req.body;
			
				let db = new dbClass(req.db);
				const response = await authserivce.login({
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
		signup: async(req, res) => {
			try {
				const payload = req.body;
				let db = new dbClass(req.db);
				const response = await authserivce.signup({
					payload,
					db
				});
				console.log(response)
				if(response=="foundemail"){
					res.type("application/json").status(200).send({
						status: "200",
						result: "Email already exists"
					});
				}
				else if(response=="founduserid"){
					res.type("application/json").status(200).send({
						status: "200",
						result: "UserId already exists"
					});
				}
				else if(response=="notalumni"){
						res.type("application/json").status(200).send({
						status: "200",
						result: "User is not an Alumni"
					});
				}
				else {
				 
					res.type("application/json").status(200).send({
						status: "200",
						result: response
					});
				}
				// } else {
				// 	res.type("text/plain").status(200).send({
				// 		status: "500",
				// 		result: "Error"
				// 	});

				

			} catch (error) {
				res.type("text/plain").status(500).send({
					status: "500",
					error: error
				});
			}
        },
        
		
    }
   