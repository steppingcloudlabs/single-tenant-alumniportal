const successfactorsservice = require("../../service/successfactors/index.js")();
const dbClass = require("sap-hdbext-promisfied");

module.exports = {
	getuser: async (req, res) => {
		try{
         if (response) {
			if (response.length == 0) response = response;
			else response = response.length > 1 ? response : response[0];
			const LIMIT = payload.LIMIT == undefined ? 1 : payload.LIMIT
			const OFFSET = payload.OFFSET == undefined ? 0 : payload.OFFSET
			tablename = "SCLABS_ALUMNIPORTAL_SKILLS_SKILLS"
			const schema = await utils.currentSchema({
				db
			})

			let pagecount = await utils.getPageCount({
				schema,
				tablename,
				db
			})
			paginationobject = {
				'TOTALPAGES': Math.ceil(pagecount[0].TOTALROWS / LIMIT),
				'LIMIT': LIMIT,
				'OFFSET': OFFSET
			}
			res.type("application/json").status(200).send({
				status: "200",
				result: response,
				pagination: paginationobject
			});
		} else {
			res.type("application/json").status(400).send({
				status: "400",
				result: response
			})}

		} catch (error) {
			req.logger.error(` Error for ${req.logger.getTenantId()} at admin/action/successfactors/getuser ${error}`);
			res.type("applcation/json").status(500).send({
				status: "500",
				error: error
			});
		}
	}
}