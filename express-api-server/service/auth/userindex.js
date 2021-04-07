const uuid = require("uuid");
const bcrypt = require('bcryptjs');
const AWS = require('aws-sdk');
const nodemailer = require('nodemailer')
const {
	JWT_SECRET
} = require('../../config');
const JWT = require('jsonwebtoken');
const config = require('../../config');
const utils = require("../../utils/database/index.js")();
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
					const query2 = `SELECT * FROM "${schema}"."SCLABS_ALUMNIPORTAL_AUTH_LOGIN" where PASSWORD='${PASSWORD}' AND USERNAME = '${EMAIL}'`
					const statement2 = await db.preparePromisified(query2)
					const result2 = await db.statementExecPromisified(statement2, [])
					if (result2.length == 0) {
						resolve("incorrectpassword")
					} else {
						const query3 = `SELECT * FROM "${schema}"."SCLABS_ALUMNIPORTAL_AUTH_LOGIN" where PASSWORD='${PASSWORD}' AND USERNAME='${EMAIL}'`
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
									'${PASSWORD}'
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
							console.log(result6)

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

				if (result1.length != 0) {

					const token = JWT.sign({
						iss: 'steppingcloudforpasswordreset',
						sub: EMAIL,
						jwtKey: 'steppingcloudsecret',
						algorithm: 'HS256',
						iat: new Date().getTime(),
						exp: new Date().setDate(new Date().getDate() + 1),
					},
						JWT_SECRET
					);
					let html = `
					<p>You are receiving this because you (or someone else) have requested the reset of the PASSWORD for your account.</p>
					
                    <p>Please click on the following link, or paste this into your browser to complete the process: https://org-dev-sclabs-space-test-single-tenant-alumniportal-sap.cfapps.eu10.hana.ondemand.com/#/resetpassword/${token}</p>
                    <p>If you did not request this, please ignore this EMAIL and your PASSWORD will remain unchanged. Please note that the token will get expired in 24hrs </p>
                    `
					var transporter = nodemailer.createTransport({
						service: 'gmail',
						auth: {
							user: 'prakritidev@steppingcloud.com',
							pass: 'SteppingCloud'
						}
					});

					let info = await transporter.sendMail({
						from: '"support@alumniportal" <prakritidev@steppingcloud.com>', // sender address
						to: EMAIL, // list of receivers
						subject: "AlumiPortal Password Reset Request", // Subject line
						html: html, // html body
					});
					resolve("tokensent");
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
						const query = `UPDATE "${schema}"."SCLABS_ALUMNIPORTAL_AUTH_LOGIN"
					SET "PASSWORD" = '${NEWPASSWORD}' where USERNAME='${EMAIL}'`
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
						const query = `UPDATE "${schema}"."SCLABS_ALUMNIPORTAL_AUTH_LOGIN"
					SET "PASSWORD" = '${NEWPASSWORD}' where USERNAME='${EMAIL}'`
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