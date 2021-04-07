const uuid = require("uuid");
const utils = require("../../utils/database/index.js")();
module.exports = () => {
	const getuser = ({
		payload,
		logger,
		db
	}) => {
		return new Promise(async (resolve, reject) => {
			try {
				const schema = await utils.currentSchema({
					db
				})
				const LIMIT = payload.LIMIT == undefined ? 10 : payload.LIMIT
				const offset = payload.OFFSET == undefined ? 0 : payload.OFFSET
				const query =
					`SELECT "CREATEDAT", "CREATEDBY","MODIFIEDAT","MODIFIEDBY","ID","FIRSTNAME","LASTNAME","EMAIL" FROM "${schema}"."SCLABS_ALUMNIPORTAL_PERSONALINFORMATION_ADMIN_HR_PERSONALINFORMATION" rows LIMIT ${LIMIT} offset ${offset}`
				const statement = await db.preparePromisified(query)
				const results = await db.statementExecPromisified(statement, [])
				resolve(results);
			} catch (error) {
				logger.error(`Error for ${logger.getTenantId()} at getuser function: ${error}`)
				reject(error);
			}
		});
	};

	const createuser = ({
		payload,
		logger,
		db
	}) => {
		return new Promise(async (resolve, reject) => {
			try {
				const schema = await utils.currentSchema({
					db
				});
				const createdat = new Date().toISOString();
				const createdby = "admin";
				const modifiedby = "admin";
				const modifiedat = new Date().toISOString();;
				const ID = uuid();
				const firstname = payload.payload.FIRSTNAME;
				const lastname = payload.payload.LASTNAME;
				const email = payload.payload.EMAIL;
				const usertype = payload.payload.USERTYPE;
				if (usertype == 'admin') {
					const query =
						`SELECT * FROM "${schema}"."SCLABS_ALUMNIPORTAL_PERSONALINFORMATION_ADMIN_HR_PERSONALINFORMATION"  WHERE EMAIL ='${email}'`
					const statement = await db.preparePromisified(query);
					const results = await db.statementExecPromisified(statement, [])
					if (results.length == 0) {
						const query1 =
							`INSERT INTO "${schema}"."SCLABS_ALUMNIPORTAL_PERSONALINFORMATION_ADMIN_HR_PERSONALINFORMATION" VALUES(
					'${createdat}',
					'${createdby}',
					'${modifiedat}',
					'${modifiedby}',
					'${ID}',	
					'${firstname}',
					'${lastname}',
					'${email}',
					'${usertype}'
				)`
						const statement1 = await db.preparePromisified(query1)
						const results1 = await db.statementExecPromisified(statement1, [])
						resolve(results1);
					} else {
						resolve("user id exists");
					}
				} else {
					resolve("onyadminsallowed")
				}

			} catch (error) {
				logger.error(`Error for ${logger.getTenantId()} at createuser function: ${error}`)
				reject(error);
			}
		});
	};

	const deleteuser = ({
		payload,
		db
	}) => {
		return new Promise(async (resolve, reject) => {
			try {
				const schema = await utils.currentSchema({
					db
				})
				const query =
					`DELETE FROM "${schema}"."SCLABS_ALUMNIPORTAL_PERSONALINFORMATION_ADMIN_HR_PERSONALINFORMATION"  WHERE EMAIL = '${payload.payload.EMAIL}'`
				const statement = await db.preparePromisified(query);
				const results = await db.statementExecPromisified(statement, [])
				resolve(results);
			} catch (error) {
				req.logger.error(` Error for ${req.logger.getTenantId()} at admin/action/index/deleteuser ${error}`);
				reject(error);
			}
		});
	};

	const getActiveUserStats = ({ payload, db }) => {
		return new Promise(async (resolve, reject) => {
			try {
				const schema = await utils.currentSchema({
					db
				})
				const query =
					`SELECT * FROM "${schema}"."SCLABS_ALUMNIPORTAL_MASTERDATA_MASTERDATA"'`
				const statement = await db.preparePromisified(query);
				const results = await db.statementExecPromisified(statement, [])
				resolve(results);
			} catch (error) {
				reject(error);
			}


		})
	};

	return {
		createuser,
		getuser,
		deleteuser,
		getActiveUserStats
	};

};