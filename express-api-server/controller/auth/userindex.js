const authserivce = require("../../service/auth/userindex.js")();
const dbClass = require("sap-hdbext-promisfied");
const JWT = require("jsonwebtoken");
const {JWT_SECRET}=require("../../config")

    module.exports = {
		login: async(req, res) => {
			try {
				const payload = req.body;
				let db = new dbClass(req.db);
				const response = await authserivce.login({
					payload,
					db
				});
				if(response=="incorrectuser"){
					res.type("application/json").status(200).send({
						status: "200",
						result: "Incorrect Username"
					});
				}
				if(response=="incorrectpassword"){
					res.type("application/json").status(200).send({
						status: "200",
						result: "Incorrect password"
					});
				}
				
				 if(response){
					const token = JWT.sign(
				        {
				          iss: "steppingcloudforuser",
				          sub: response[0].USER_ID,
				          jwtKey: "steppingcloudsecret",
				          algorithm: "HS256",
				          iat: new Date().getTime(),
				          exp: new Date().setTime(new Date().getTime() + 900000),
				        },
				        JWT_SECRET
				      );
					res.type("application/json").status(200).send({
						status: "200",
						result: response,
						token:token
						});
				 }
				 else{
				 	
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
        forgetpassword: async(req, res) => {
			try {
				
				const payload = req.body;
				let db = new dbClass(req.db);
				const response = await authserivce.forgetpassword({
					payload,
					db
				});
				
			
				if (response == "tokensent") {
		        res.status(200).send({
		          status: 200,
		          result: "Reset Token sent to your email",
		        });
		      }
			     else if (response == "notfounduser") {
			        res.status(200).send({
			          status: 400,
			          result: "user not found",
			        });
			      }
				 else {
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
         resetpassword: async(req, res) => {
			try {
				console.log("hello")
				const payload = req.body;
				const resettoken=req.params;
				console.log(payload)
				console.log(resettoken)
				let db = new dbClass(req.db);
				const response = await authserivce.resetpassword({
					payload,
					resettoken,
					db
				});
				
			
				if (response == "tokensent") {
		        res.status(200).send({
		          status: 200,
		          result: "Reset Token sent to your email",
		        });
		      }
			     else if (response == "notfounduser") {
			        res.status(200).send({
			          status: 400,
			          result: "user not found",
			        });
			      }
				 else {
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
   