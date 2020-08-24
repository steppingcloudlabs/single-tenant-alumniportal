const userserivce = require("../../service/user/index.js")();
const dbClass = require("sap-hdbext-promisfied");
module.exports = {
		// News Controllers
		getprofile: async(req, res) => {
			const payload = req.params;
			let db = new dbClass(req.db);
			const response = await userserivce.getprofile({
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
}