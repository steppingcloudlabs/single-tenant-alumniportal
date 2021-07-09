`
Functionlaity is same as of admin(index.js)
`
const userservice = require("../../service/theme/userindex.js")();
const dbClass = require("sap-hdbext-promisfied");
const utils = require("../../utils/database/index")();


module.exports = {
	
    getcolor: async (req, res) => {
		try {
			const payload = req.query;
			const logger = req.logger;
			// getting db connection of this request
			let db = new dbClass(req.db);
			let response = await userservice.getcolor({
				payload,
				logger,
				db
			});

			if (response) {
              
				let result = Object.keys(response['0']).reduce((prev, current) => 
                   ({ ...prev, [current.toLowerCase()]: response['0'][current]}), {})
                  
				res.type("application/json").status(200).send({
					status: "200",
					result: result,
					
				});
			} else {
				res.status(400).send({
					status: "400",
					result: response
				});
			}
		} catch (error) {
			req.logger.error(` Error for ${req.logger.getTenantId()} at user/theme/getcolor ${error}`);
			res.status(500).send({
				status: "500",
				result: error
			});
		}

	},
	
}