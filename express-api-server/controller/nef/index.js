 /* eslint-disable */
 const nefserivce = require("../../service/nef")();
 module.exports = {
 	// News Controllers
 	viewnews: async(req, res) => {
 		const {
 			payload
 		} = req.param;
 		const response = await nefserivce.viewNews({
 			payload,
 			token
 		});
 		if (!response) {
 			res.status(200).send({
 				status: "200",
 				result: "TEST REJECT"
 			});
 		} else {
 			res.status(400).send({
 				status: "400",
 				result: "TEST REJECT"
 			});
 		}
 	}

 }