const uuid = require("uuid");
const utils = require("../../utils/database/index.js")();
// const currentSchema = require("../../utils/database/index.js")();
module.exports = () => {
	const getprofile = ({
		payload,
		db
	}) => {
		return new Promise(async(resolve, reject) => {
			try {
				const schema = await utils.currentSchema({db})
				const statement = await db.preparePromisified(
					`SELECT * FROM "${schema}"."SCLABS_ALUMNIPORTAL_MASTERDATA_MASTERDATA"  WHERE ID = '${payload.id}'`
				)
				const results = await db.statementExecPromisified(statement, [])
				resolve(results);

			} catch (error) {
				reject(error);
			}
		});
	};

	return {
		getprofile

	};

};