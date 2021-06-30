/**
 * Service layer for Admin
 */


const uuid = require("uuid");
const generator = require('generate-password');
// importing Util functions for database. 
const utils = require("../../utils/database/index.js")();
const authservice = require("../auth/index")();
const emailservice = require("../ses/index")();
module.exports = () => {
	
	/** Function get admin list from the system. 
	 * @params payload | Payload contains the data from the request 
	 * @params logger  | Logger is for logging object for SAP 
	 * @params db 		| db is HANA db credentials for this 
	 */
	const getuser = ({
		payload,
		logger,
		db
	}) => {
		return new Promise(async (resolve, reject) => {
			try {

				`
				Schema is the database name we need for execuing the query. 

				Improvement : We can inject the database(schema) name at controller level by extracting from the db credentials. 
				This change might improve the response time of the API.  
				`
				const schema = await utils.currentSchema({
					db
				})
				// Setting Limit and offeset if present in the request. 
				const LIMIT = payload.LIMIT == undefined ? 10 : payload.LIMIT
				const offset = payload.OFFSET == undefined ? 0 : payload.OFFSET
				//  SAP Hana Query promisified for non blocking code. 
				const query =
					`SELECT "ID","USERID", "FIRSTNAME","LASTNAME","EMAIL" FROM "${schema}"."SCLABS_ALUMNIPORTAL_PERSONALINFORMATION_ADMIN_HR_PERSONALINFORMATION" rows LIMIT ${LIMIT} offset ${offset}`
				// Preparing Query.
				const statement = await db.preparePromisified(query)
				// Executing Query. 
				const results = await db.statementExecPromisified(statement, [])
				// resolve the response from SAP Hana. 
				resolve(results);
			} catch (error) {
				// log the detialed error with error stack.
				logger.error(`Error for ${logger.getTenantId()} at getuser function: ${error.message}`)
				// reject the promise.
				reject(error);
			}
		});
	};

	/**
	 * Function creates a admin in the system. 
	 * @params payload | Payload contains the data from the request 
	 * @params logger  | Logger is for logging object for SAP 
	 * @params db 		| db is HANA db credentials for this 
	 */

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
				
				// Check if the request is for admin or not.
				
				if (usertype == 'admin') {
					// Checking if the admin already exists or not by fetching data from DB.
					const query = `SELECT * FROM "${schema}"."SCLABS_ALUMNIPORTAL_PERSONALINFORMATION_ADMIN_HR_PERSONALINFORMATION"  WHERE EMAIL ='${email}'`
					const statement = await db.preparePromisified(query);
					const results = await db.statementExecPromisified(statement, [])
					//  IF no results then it's not in the db continue the insertion process.
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
							let payloadsignup = {
								"EMAIL": email,
								"PASSWORD": password,
								"USERID": userid,
								"USERTYPE": usertype
							}
							let res = await authservice.signup({ payload: payloadsignup, db });
							if(res == 1) {
								// Sending Email to the admin with its random generated password
								emailresults = await emailservice.sendEmailAdmin({email, firstname, password})
								`
								# Bug 1: This process flow might break in future, even though its wroking fine at this moment. 
								If due to some reason the admin did not get the email, or server crashed after adding admin to database. 
								Admin user have to re-create the admin again otherwise it will not be able to add this user gain. 
								
								# Bug 2: If user gets added in the system but AWS is down, Email will not be sent and system will show that user is created. 
								
								# Solution: 

								1. Create a saperate table that holds user detials and random password.  
								2. When admin reset its password delete the entry the table. 
								3. store the data in SCLABS_ALUMNIPORTAL_PERSONALINFORMATION_ADMIN_HR_PERSONALINFORMATION table. 
								4. Check for different edge cases, I am not going to type it all. 
								`
								console.log(emailresults)
							}
							console.log("Username is: " + email + "password is: " + password);
							// Sending the admin object back to the requestor, so it does't have to call get admin api again for a fresh data.  
							payload.payload.ID = ID;
							resolve(payload.payload);
							
						} else {
							reject(results1)
						}
					// Otherwise send the message to controller that user already exists, controller will take nexessary steps based on the reply 
					// We used the resolve() instead of reject() because it will give me 500 intenal server error if we use reject() which is wrong.  
					} else {
						resolve("user id exists");
					}
				} else {
					resolve("onyadminsallowed")
				}

			} catch (error) {
				//  logging the message
				logger.error(`Error for ${logger.getTenantId()} at createuser function: ${error.message}`)
				//  Reject the request, this will send 500 Internal server error.
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