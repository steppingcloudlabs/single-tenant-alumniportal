const userserivce = require("../../service/user/index.js")();
const dbClass = require("sap-hdbext-promisfied");
module.exports = {
	
		getprofile: async(req, res,next) => {
			try{
			const payload = req.body;
			let db = new dbClass(req.db);
			// console.log(db)
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
			}
			catch(error){
				next(error)
			}
		},
}