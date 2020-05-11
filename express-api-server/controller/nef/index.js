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

 	}

 }