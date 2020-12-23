const uuid = require("uuid");
const bcrypt = require('bcryptjs');
const AWS = require('aws-sdk');
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
					const query2 = `SELECT * FROM "${schema}"."SCLABS_ALUMNIPORTAL_AUTH_LOGIN" where PASSWORD='${PASSWORD}'`
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

					// EMAIL sent and sending the token to reset the token
					const params = {
						Source: config['from_adderess'],
						Destination: {
							ToAddresses: [EMAIL],
						},
						ReplyToAddresses: [config['from_adderess']],
						Message: {
							Body: {
								Text: {
									Charset: 'UTF-8',
									Data: 'You are receiving this because you (or someone else) have requested the reset of the PASSWORD for your account.\n\n' +
										'Please click on the following link, or paste this into your browser to complete the process:\n\n' +
										'https://45chqdynx28slt2nxpress-api-server.cfapps.eu10.hana.ondemand.com/user/auth/reset/' +
										token +
										'\n\n' +
										'If you did not request this, please ignore this EMAIL and your PASSWORD will remain unchanged.\n' +
										'Please note that the token will get expired in 24hrs',
								},
							},
							Subject: {
								Charset: 'UTF-8',
								Data: 'PASSWORD Reset',
							},
						},
					};
					// Create the promise and SES service object
					const sendPromise = new AWS.SES({
							apiVersion: '2010-12-01'
						})
						.sendEMAIL(params)
						.promise();
					// Handle promise's fulfilled/rejected states
					sendPromise
						.then(function (data) {
							resolve("tokensent");
						})
						.catch(function (err) {
							reject(err.stack);
						});
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
					newpassword
				} = payload.payload;

				const resettokenforpass = resettoken.token

				const decoderesettoken = JWT.verify(resettokenforpass, JWT_SECRET);

				if (Date.now() > decoderesettoken.exp) {
					resolve('ResetTokenExpired');
				} else {
					// the payload body contains new PASSWORD to be reset
					const EMAIL = decoderesettoken.sub;

					const query =
						`UPDATE "${schema}"."SCLABS_ALUMNIPORTAL_AUTH_LOGIN"
					SET "PASSWORD" = '${newpassword}' where USERNAME='${EMAIL}'`
					const statement = await db.preparePromisified(query)
					const result = await db.statementExecPromisified(statement, [])

					if (result) {
						// trigger mail to user about successful resetting of PASSWORD
						const params = {
							Source: config['from_adderess'],
							Destination: {
								ToAddresses: [decoderesettoken.sub],
							},
							ReplyToAddresses: [config['from_adderess']],
							Message: {
								Body: {
									Text: {
										Charset: 'UTF-8',
										Data: 'This is a confirmation that the PASSWORD for your account ' +
											decoderesettoken.sub +
											' has just been changed.\n',
									},
								},
								Subject: {
									Charset: 'UTF-8',
									Data: 'PASSWORD Changed Successfully',
								},
							},
						};
						// Create the promise and SES service object
						const sendPromise = new AWS.SES({
								apiVersion: '2010-12-01'
							})
							.sendEmail(params)
							.promise();
						// Handle promise's fulfilled/rejected states
						sendPromise
							.then(function (data) {
								resolve('updated');
							})
							.catch(function (err) {
								reject(err.stack);
							});
					} else {
						resolve('Updation Failed, Please Check');
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