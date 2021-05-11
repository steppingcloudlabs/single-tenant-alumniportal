const uuid = require("uuid");
const { JWT_SECRET } = require('../../config');
const JWT = require('jsonwebtoken');
const utils = require("../../utils/database/index.js")();
const emailservice = require("../ses/index")();
// hashing algo.
const bcrypt = require('bcryptjs');
const saltRounds = 10;

module.exports = () => {
	const login = ({
		payload,
		db
	}) => {
		return new Promise(async (resolve, reject) => {
			try {
				const schema = await utils.currentSchema({
					db
				});
				const {
					EMAIL,
					PASSWORD
				} = payload;
				const query = `SELECT * FROM "${schema}"."SCLABS_ALUMNIPORTAL_AUTH_LOGIN" where USERNAME='${EMAIL}'`
				const statement = await db.preparePromisified(query)
				const result = await db.statementExecPromisified(statement, [])
				if (result.length == 0) {
					resolve("incorrectuser")
				} else {
					const query2 = `SELECT PASSWORD FROM "${schema}"."SCLABS_ALUMNIPORTAL_AUTH_LOGIN" where USERNAME='${EMAIL}'`
					const statement2 = await db.preparePromisified(query2)
					const userSavedHashedPassword = await db.statementExecPromisified(statement2, [])

					const match = await bcrypt.compare(PASSWORD, userSavedHashedPassword[0].PASSWORD);
					if (!match) {
						resolve("incorrectpassword")
					} else {
						const query3 = `SELECT USERID FROM "${schema}"."SCLABS_ALUMNIPORTAL_AUTH_LOGIN" WHERE USERNAME='${EMAIL}'`
						const statement3 = await db.preparePromisified(query3)
						const result3 = await db.statementExecPromisified(statement3, [])
						const USERID = result3[0].USERID;
						const query4 =
							`SELECT 
							A1."ID",
							A1."USER_ID",
							A1."USERTYPE",
							A1."GENDER",
							A1."DATE_OF_BIRTH",
							A1."DATE_OF_RESIGNATION",
							A1."LAST_WORKING_DAY_AS_PER_NOTICE_PERIOD",
							A1."PERSONAL_EMAIL_ID",
							A1."FIRST_NAME_PERSONAL_INFORMATION",
							A1."LAST_NAME_PERSONAL_INFORMATION",
							A1."MIDDLE_NAME_PERSONAL_INFORMATION",
							A1."NATIONALITY_PERSONAL_INFORMATION",
							IFNULL(A1.CITY_ADDRESSES,'') "CITY_ADDRESSES",
							IFNULL(A1.PHONE_NUMBER_PHONE_INFORMATION, '') "PHONE_NUMBER_PHONE_INFORMATION",
							IFNULL(A1.MANAGER_JOB_INFORMATION, '') "MANAGER_JOB_INFORMATION",
							IFNULL(A1.DESIGNATION_JOB_INFORMATION, '') "DESIGNATION_JOB_INFORMATION",
							IFNULL(A1.SKILL_ID, '') "SKILL_ID", 
							IFNULL(A1.LINKEDIN, '') "LINKEDIN",
							IFNULL(A1.USERTYPE, '') "USERTYPE", 
							IFNULL(A1.PROFILEIMAGE, '') "PROFILEIMAGE",
							IFNULL(A1.STATE, '') "STATE", 
							IFNULL(A1.COUNTRY, '') "COUNTRY"
						    FROM "${schema}"."SCLABS_ALUMNIPORTAL_USERS_USERS" as A1  
							where A1."USER_ID" = '${USERID}'`
						const statement4 = await db.preparePromisified(query4)
						let obj = await db.statementExecPromisified(statement4, [])

						resolve(obj);

					}
				}
			} catch (error) {
				reject(error);
			}
		});
	};

	const signup = ({
		payload,
		db
	}) => {
		return new Promise(async (resolve, reject) => {
			try {

				const schema = await utils.currentSchema({
					db
				});
				const userType = 'user';
				const {
					EMAIL,
					PASSWORD,
					USERID
				} = payload;

				const query = `SELECT * FROM "${schema}"."SCLABS_ALUMNIPORTAL_AUTH_LOGIN" where USERNAME='${EMAIL}'`

				const statement = await db.preparePromisified(query)

				const result = await db.statementExecPromisified(statement, [])

				if (result.length == 0) {
					const query2 = `SELECT * FROM "${schema}"."SCLABS_ALUMNIPORTAL_AUTH_LOGIN" where USERID='${USERID}'`
					const statement2 = await db.preparePromisified(query2)
					const result2 = await db.statementExecPromisified(statement2, [])
					if (result2.length == 0) {
						const query3 = `SELECT * FROM "${schema}"."SCLABS_ALUMNIPORTAL_MASTERDATA_MASTERDATA" where USER_ID='${USERID}'`
						const statement3 = await db.preparePromisified(query3)
						const result3 = await db.statementExecPromisified(statement3, [])
						if (result3.length == 0) {
							resolve("notalumni")
						} else {

							// computing hash of the password.
							const HASHPASSWORD = await bcrypt.hash(PASSWORD, saltRounds);
							const createdat = new Date().toISOString();
							const createdby = "admin";
							const modifiedby = "admin";
							const modifiedat = new Date().toISOString();
							const ID = uuid()
							const query4 =
								`INSERT INTO "${schema}"."SCLABS_ALUMNIPORTAL_AUTH_LOGIN" VALUES(
									'${createdat}',
									'${createdby}',
									'${modifiedat}',
									'${modifiedby}',
									'${ID}',
									'${USERID}',
									'${EMAIL}',
									'${HASHPASSWORD}'
									)`
							const statement4 = await db.preparePromisified(query4)
							const result4 = await db.statementExecPromisified(statement4, [])
							const query5 = `INSERT INTO "${schema}"."SCLABS_ALUMNIPORTAL_USERS_USERS" VALUES(
                                	'${createdat}',
									'${createdby}',
									'${modifiedat}',
									'${modifiedby}',
									'${ID}',
									'${result3[0].USER_ID}',
									'${result3[0].GENDER}',
									'${result3[0].DATE_OF_BIRTH}',
									'${result3[0].DATE_OF_RESIGNATION}',
									'${result3[0].LAST_WORKING_DAY_AS_PER_NOTICE_PERIOD}',
									'${result3[0].PERSONAL_EMAIL_ID}',
									'${result3[0].FIRST_NAME_PERSONAL_INFORMATION}',
									'${result3[0].LAST_NAME_PERSONAL_INFORMATION}',
							     	'${result3[0].MIDDLE_NAME_PERSONAL_INFORMATION}',
									'${result3[0].NATIONALITY_PERSONAL_INFORMATION}',
									'${result3[0].SALUTATION_PERSONAL_INFORMATION}',
									'${result3[0].CITY_ADDRESSES}',
									'${result3[0].PHONE_NUMBER_PHONE_INFORMATION}',
									'${result3[0].MANAGER_JOB_INFORMATION}',
									'${result3[0].DESIGNATION_JOB_INFORMATION}',
									'',
									'',
									'${userType}',
									'',
									'${result3[0].STATE}',
									'${result3[0].COUNTRY}'
                                    ) `

							const statement5 = await db.preparePromisified(query5)
							const result5 = await db.statementExecPromisified(statement5, [])

							let query6 = `UPDATE "${schema}"."SCLABS_ALUMNIPORTAL_MASTERDATA_MASTERDATA" SET "ISACTIVE" = 'registered' WHERE "USER_ID" = '${USERID}'`

							const statement6 = await db.preparePromisified(query6)
							const result6 = await db.statementExecPromisified(statement6, [])
							resolve(result5)
						}
					} else {
						resolve("founduserid")
					}
				} else {
					resolve("foundemail");
				}
			} catch (error) {
				reject(error);
			}
		});
	};

	const forgetpassword = ({
		payload,
		db
	}) => {
		return new Promise(async (resolve, reject) => {
			try {
				const schema = await utils.currentSchema({
					db
				});
				const {
					EMAIL
				} = payload.payload;

				const query1 = `SELECT * FROM "${schema}"."SCLABS_ALUMNIPORTAL_AUTH_LOGIN" where USERNAME='${EMAIL}'`
				const statement1 = await db.preparePromisified(query1)
				const result1 = await db.statementExecPromisified(statement1, [])
				let FIRST_NAME_PERSONAL_INFORMATION = result1[0].USERNAME
				if (result1.length != 0) {

					const token = JWT.sign({
						iss: 'steppingcloudforpasswordreset',
						sub: EMAIL,
						jwtKey: 'steppingcloudsecret',
						algorithm: 'HS256',
						iat: new Date().getTime(),
						exp: new Date().setDate(new Date().getDate() + 1)
					},
						JWT_SECRET
					);


					let res = await emailservice.sendForgetPasswordEmail({ EMAIL, FIRST_NAME_PERSONAL_INFORMATION, token });
					if (res) {
						resolve("tokensent");
					} else {
						reject(res);
					}
				} else {
					resolve("notfounduser");
				}
			} catch (error) {
				reject(error);
			}
		});
	};

	const resetpassword = ({
		payload,
		resettoken,
		db
	}) => {
		return new Promise(async (resolve, reject) => {
			try {
				const schema = await utils.currentSchema({
					db
				});
				const {
					NEWPASSWORD,
					OLDPASSWORD,
					EMAIL
				} = payload.payload;


				if (EMAIL) {
					const query1 = `SELECT PASSWORD FROM "${schema}"."SCLABS_ALUMNIPORTAL_AUTH_LOGIN" where USERNAME='${EMAIL}'`
					const statement1 = await db.preparePromisified(query1)
					const result1 = await db.statementExecPromisified(statement1, [])

					if (result1[0].PASSWORD == OLDPASSWORD) {
						// computing hash of the password.
						const HASHPASSWORD = await bcrypt.hash(NEWPASSWORD, saltRounds);
						const query = `UPDATE "${schema}"."SCLABS_ALUMNIPORTAL_AUTH_LOGIN"
					SET "PASSWORD" = '${HASHPASSWORD}' where USERNAME='${EMAIL}'`
						const statement = await db.preparePromisified(query)
						const result = await db.statementExecPromisified(statement, [])
						if (result) {
							resolve('updated');
						} else {
							resolve('Updation Failed, Current Password Not matched');
						}
					}
					else {
						resolve('Updation Failed');
					}
				} else {
					const resettokenforpass = resettoken.TOKEN
					const decoderesettoken = JWT.verify(resettokenforpass, JWT_SECRET);
					if (Date.now() > decoderesettoken.exp) {
						resolve('ResetTokenExpired');
					} else {
						// the payload body contains new PASSWORD to be reset
						const EMAIL = decoderesettoken.sub;
						// computing hash of the password.
						const HASHPASSWORD = await bcrypt.hash(NEWPASSWORD, saltRounds);
						const query = `UPDATE "${schema}"."SCLABS_ALUMNIPORTAL_AUTH_LOGIN"
					SET "PASSWORD" = '${HASHPASSWORD}' where USERNAME='${EMAIL}'`
						const statement = await db.preparePromisified(query)
						const result = await db.statementExecPromisified(statement, [])
						if (result) {
							resolve('updated');
						} else {
							resolve('Updation Failed, Please Check');
						}
					}
				}


			} catch (error) {
				reject(error);
			}
		});
	};


	return {
		login,
		signup,
		forgetpassword,
		resetpassword

	};

};