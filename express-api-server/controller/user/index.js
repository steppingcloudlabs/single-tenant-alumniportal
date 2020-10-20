const userservice = require("../../service/user/index.js")();
const dbClass = require("sap-hdbext-promisfied");

module.exports = {
	
		getprofile: async(req, res,next) => {
			try{
			const payload = req.query;
			let db = new dbClass(req.db);
			const response = await userservice.getprofile({
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
			}
			catch(error){
				res.type("text/plain").status(500).send({
					status: "500",
					error: error
				});
			}
		},
		updateprofile: async(req, res,next) => {
			try{
			const payload = req.body;
			let db = new dbClass(req.db);
			const response = await userservice.updateprofile({
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
			}
			catch(error){
				res.type("text/plain").status(500).send({
					status: "500",
					error: error
				});
			}
		},
		deleteprofile: async(req, res,next) => {
			try{
			const payload = req.body;
			let db = new dbClass(req.db);
			const response = await userservice.deleteprofile({
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
			}
			catch(error){
				res.type("text/plain").status(500).send({
					status: "500",
					error: error
				});
			}
		},
}