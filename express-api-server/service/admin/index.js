const uuid = require("uuid");
const generator = require('generate-password');
const utils = require("../../utils/database/index.js")();
const authservice = require("../auth/index")();
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
					`SELECT "ID","USERID", "FIRSTNAME","LASTNAME","EMAIL" FROM "${schema}"."SCLABS_ALUMNIPORTAL_PERSONALINFORMATION_ADMIN_HR_PERSONALINFORMATION" rows LIMIT ${LIMIT} offset ${offset}`
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
				const userid = payload.payload.USERID

				if (usertype == 'admin') {
					const query =
						`SELECT * FROM "${schema}"."SCLABS_ALUMNIPORTAL_PERSONALINFORMATION_ADMIN_HR_PERSONALINFORMATION"  WHERE EMAIL ='${email}'`
					const statement = await db.preparePromisified(query);
					const results = await db.statementExecPromisified(statement, [])
					if (results.length == 0) {

						// admin user added in SCLABS_ALUMNIPORTAL_PERSONALINFORMATION_ADMIN_HR_PERSONALINFORMATION table 
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
							'${usertype}',
							'${userid}'
							)`
						const statement1 = await db.preparePromisified(query1)
						const results1 = await db.statementExecPromisified(statement1, [])

						if (results1 == 1) {
							// mocking signup step by create a random password for admin user which he will reset on his end. 
							let password = generator.generate({
								length: 10,
								numbers: true
							});
							let payload = {
								"EMAIL": email,
								"PASSWORD": password,
								"USERID": userid,
								"USERTYPE": usertype
							}
							let res = await authservice.signup({ payload, db });
							console.log("Username is: " + email + "password is: " + password);
							resolve(res);
							// resolve(results1)
						} else {
							reject(results1)
						}
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

				// get Email
				let query = `SELECT EMAIL FROM "${schema}"."SCLABS_ALUMNIPORTAL_PERSONALINFORMATION_ADMIN_HR_PERSONALINFORMATION" WHERE ID = '${payload.payload.ID}'`
				let statement = await db.preparePromisified(query);
				let EMAIL = await db.statementExecPromisified(statement, [])
				if(EMAIL.length == 0) {resolve("Admin does't exists")}
				//lete its login credentials as well.

				query = `DELETE FROM "${schema}"."SCLABS_ALUMNIPORTAL_ADMINAUTH_ADMINLOGIN" WHERE USERNAME = '${EMAIL[0].EMAIL}'`
				statement = await db.preparePromisified(query);
				result = await db.statementExecPromisified(statement, [])
				console.log(result)
				
				// delete from askhr 
				query = `DELETE FROM "${schema}"."SCLABS_ALUMNIPORTAL_MANAGER_MANAGER"  WHERE EMAIL = '${EMAIL[0].EMAIL}'`
				statement = await db.preparePromisified(query);
				results = await db.statementExecPromisified(statement, [])

				// delete admin profile
				query =
					`DELETE FROM "${schema}"."SCLABS_ALUMNIPORTAL_PERSONALINFORMATION_ADMIN_HR_PERSONALINFORMATION" WHERE ID = '${payload.payload.ID}'`
				statement = await db.preparePromisified(query);
				results = await db.statementExecPromisified(statement, [])

				resolve(results)
				
			} catch (error) {
				// req.logger.error(` Error for ${req.logger.getTenantId()} at admin/action/index/deleteuser ${error}`);
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
				const query = `SELECT * FROM "${schema}"."SCLABS_ALUMNIPORTAL_MASTERDATA_MASTERDATA"`
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