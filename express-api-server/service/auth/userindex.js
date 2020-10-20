const uuid = require("uuid");
const AWS = require('aws-sdk');
const {JWT_SECRET} = require('../../config');
const JWT = require('jsonwebtoken');
const config = require('../../config');
const utils = require("../../utils/database/index.js")();
module.exports = () => {
	const login = ({
		payload,
		db
	}) => {
		return new Promise(async(resolve, reject) => {
			try {
				const schema = await utils.currentSchema({db});
				const {
					email,
					password
				} = payload;
				const query = `SELECT * FROM "${schema}"."SCLABS_ALUMNIPORTAL_AUTH_LOGIN" where USERNAME='${email}'`
             	const statement = await db.preparePromisified(query)
				const result = await db.statementExecPromisified(statement, [])
				if (result.length == 0) {
					resolve("incorrectuser")
				} else {
					const query2 = `SELECT * FROM "${schema}"."SCLABS_ALUMNIPORTAL_AUTH_LOGIN" where PASSWORD='${password}'`
					const statement2 = await db.preparePromisified(query2)
					const result2 = await db.statementExecPromisified(statement2, [])
					if (result2.length == 0) {
						resolve("incorrectpassword")
					} else {
						const query3 = `SELECT * FROM "${schema}"."SCLABS_ALUMNIPORTAL_AUTH_LOGIN" where PASSWORD='${password}' AND USERNAME='${email}'`
						const statement3 = await db.preparePromisified(query3)
						const result3 = await db.statementExecPromisified(statement3, [])
						const userid = result3[0].USERID;
						const query4 = 	`SELECT 
						                 A1."ID",
						                 A1."USER_ID",
										 A1."GENDER",
										 A1."DATE_OF_BIRTH",
										 A1."DATE_OF_RESIGNATION",
										 A1."LAST_WORKING_DAY_AS_PER_NOTICE_PERIOD",
										 A1."PERSONAL_EMAIL_ID",
										 A1."FIRST_NAME_PERSONAL_INFORMATION",
										 A1."LAST_NAME_PERSONAL_INFORMATION",
										 A1."MIDDLE_NAME_PERSONAL_INFORMATION",
										 A1."NATIONALITY_PERSONAL_INFORMATION",
										 A1."SALUTATION_PERSONAL_INFORMATION",
										 A1."CITY_ADDRESSES",
										 A1."PHONE_NUMBER_PHONE_INFORMATION",
										 A1."MANAGER_JOB_INFORMATION",
										 A1."DESIGNATION_JOB_INFORMATION",
										 A1."LINKEDIN",
										 A2."SKILL" as skill
										 FROM "${schema}"."SCLABS_ALUMNIPORTAL_USERS_USERS" as A1 
										 LEFT JOIN  "${schema}"."SCLABS_ALUMNIPORTAL_SKILLS_SKILLS" as A2 
										 ON A1.SKILL_ID = A2.ID where A1.USER_ID = '${userid}';`
					    console.log(query4)
						const statement4 = await db.preparePromisified(query4)
						const result4 = await db.statementExecPromisified(statement4, [])
						resolve(result4)
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
		return new Promise(async(resolve, reject) => {
			try {

				const schema = await utils.currentSchema({
					db
				});
				const {
					email,
					password,
					companyname,
					userType,
					userid
				} = payload;

				const query = `SELECT * FROM "${schema}"."SCLABS_ALUMNIPORTAL_AUTH_LOGIN" where USERNAME='${email}'`

				const statement = await db.preparePromisified(query)

				const result = await db.statementExecPromisified(statement, [])

				if (result.length == 0) {
					const query2 = `SELECT * FROM "${schema}"."SCLABS_ALUMNIPORTAL_AUTH_LOGIN" where USERID='${userid}'`
					const statement2 = await db.preparePromisified(query2)
					const result2 = await db.statementExecPromisified(statement2, [])
					if (result2.length == 0) {
						const query3 = `SELECT * FROM "${schema}"."SCLABS_ALUMNIPORTAL_MASTERDATA_MASTERDATA" where USER_ID='${userid}'`
						const statement3 = await db.preparePromisified(query3)
						const result3 = await db.statementExecPromisified(statement3, [])
						if (result3.length == 0) {
							resolve("notalumni")
						} else {
							console.log(result3)
							console.log(result3[0].USER_ID)
							const createdat = new Date().toISOString();
							const createdby = "admin";
							const modifiedby = "admin";
							const modifiedat = new Date().toISOString();
							const id = uuid()
							const query4 =
								`INSERT INTO "${schema}"."SCLABS_ALUMNIPORTAL_AUTH_LOGIN" VALUES(
									'${createdat}',
									'${createdby}',
									'${modifiedat}',
									'${modifiedby}',
									'${id}',
									'${userid}',
									'${email}',
									'${password}'
									)`
							const statement4 = await db.preparePromisified(query4)
							const result4 = await db.statementExecPromisified(statement4, [])
							const query5 = `INSERT INTO "${schema}"."SCLABS_ALUMNIPORTAL_USERS_USERS" VALUES(
                                	'${createdat}',
									'${createdby}',
									'${modifiedat}',
									'${modifiedby}',
									'${id}',
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
									'ddbc2bb1-51a7-43e3-a656-55931a863f55',
									'ddbc2bb1-51a7-43e3-a656-55931a863f55'
                                    ) `
                            console.log(query5)
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
		return new Promise(async(resolve, reject) => {
			try {
				const schema = await utils.currentSchema({
					db
				});
				const {email} = payload.payload;
				 
					const query1 = `SELECT * FROM "${schema}"."SCLABS_ALUMNIPORTAL_AUTH_LOGIN" where USERNAME='${email}'`
					const statement1 = await db.preparePromisified(query1)
					const result1 = await db.statementExecPromisified(statement1, [])
        
        if (result1.length!=0) {
        	
          const token = JWT.sign(
              {
                iss: 'steppingcloudforpasswordreset',
                sub: email,
                jwtKey: 'steppingcloudsecret',
                algorithm: 'HS256',
                iat: new Date().getTime(),
                exp: new Date().setDate(new Date().getDate() + 1),
              },
              JWT_SECRET
          );
          
          // email sent and sending the token to reset the token
          const params = {
            Source: config['from_adderess'],
            Destination: {
              ToAddresses: [email],
            },
            ReplyToAddresses: [config['from_adderess']],
            Message: {
              Body: {
                Text: {
                  Charset: 'UTF-8',
                  Data:
                    'You are receiving this because you (or someone else) have requested the reset of the password for your account.\n\n' +
                    'Please click on the following link, or paste this into your browser to complete the process:\n\n' +
                    'https://45chqdynx28slt2nxpress-api-server.cfapps.eu10.hana.ondemand.com/user/auth/reset/' +
                    token +
                    '\n\n' +
                    'If you did not request this, please ignore this email and your password will remain unchanged.\n' +
                    'Please note that the token will get expired in 24hrs',
                },
              },
              Subject: {
                Charset: 'UTF-8',
                Data: 'Password Reset',
              },
            },
          };
          // Create the promise and SES service object
          const sendPromise = new AWS.SES({apiVersion: '2010-12-01'})
              .sendEmail(params)
              .promise();
          // Handle promise's fulfilled/rejected states
          sendPromise
              .then(function(data) {
                resolve("tokensent");
              })
              .catch(function(err) {
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
		return new Promise(async(resolve, reject) => {
			try {
				const schema = await utils.currentSchema({
					db
				});
				const {newpassword} = payload.payload;
				const decoderesettoken = JWT.verify(resettoken, JWT_SECRET);
				 
					const query1 = `SELECT * FROM "${schema}"."SCLABS_ALUMNIPORTAL_AUTH_LOGIN" where USERNAME='${email}'`
					const statement1 = await db.preparePromisified(query1)
					const result1 = await db.statementExecPromisified(statement1, [])
        
        if (result1.length!=0) {
        	
          const token = JWT.sign(
              {
                iss: 'steppingcloudforpasswordreset',
                sub: email,
                jwtKey: 'steppingcloudsecret',
                algorithm: 'HS256',
                iat: new Date().getTime(),
                exp: new Date().setDate(new Date().getDate() + 1),
              },
              JWT_SECRET
          );
          
          // email sent and sending the token to reset the token
          const params = {
            Source: config['from_adderess'],
            Destination: {
              ToAddresses: [email],
            },
            ReplyToAddresses: [config['from_adderess']],
            Message: {
              Body: {
                Text: {
                  Charset: 'UTF-8',
                  Data:
                    'You are receiving this because you (or someone else) have requested the reset of the password for your account.\n\n' +
                    'Please click on the following link, or paste this into your browser to complete the process:\n\n' +
                    'https://45chqdynx28slt2nxpress-api-server.cfapps.eu10.hana.ondemand.com/user/auth/reset/' +
                    token +
                    '\n\n' +
                    'If you did not request this, please ignore this email and your password will remain unchanged.\n' +
                    'Please note that the token will get expired in 24hrs',
                },
              },
              Subject: {
                Charset: 'UTF-8',
                Data: 'Password Reset',
              },
            },
          };
          // Create the promise and SES service object
          const sendPromise = new AWS.SES({apiVersion: '2010-12-01'})
              .sendEmail(params)
              .promise();
          // Handle promise's fulfilled/rejected states
          sendPromise
              .then(function(data) {
                resolve("tokensent");
              })
              .catch(function(err) {
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
	
	
	
	
	

	const updateuser = ({
		payload,
		db
	}) => {
		return new Promise(async(resolve, reject) => {
			try {
				const schema = currentSchema(db)
				const createdat = new Date().toISOString();
				const createdby = "admin";
				const modifiedby = "admin";
				const modifiedat = new Date().toISOString();
				const date = new Date().toISOString();
				const id = uuid();
				const user_id = payload.user_id;
				const _gender = payload._gender;
				//	const _date_of_birth = payload.date_of_birth
				//	const _date_of_resignation = payload.date_of_resignation
				//	const _last_working_day_as_per_notice_period =payload.last_working_day_as_per_notice_period
				const _personal_email_id = payload.personal_email_id
				const _first_name_personal_information = payload.first_name_personal_information
				const _last_name_personal_information = payload.last_name_personal_information
				const _middle_name_personal_information = payload.middle_name_personal_information
				const _nationality_personal_information = payload.nationality_personal_information
				const _salutation_personal_information = payload.salutation_personal_information
				const _city_addresses = payload.city_addresses
				const _phone_number_phone_information = payload.phone_number_phone_information
				const _manager_job_information = payload.manager_job_informatio
				const _designation_job_information = payload.designation_job_information
				const statement = await db.preparePromisified(
					`UPDATE "${schema}"."SCLABS_ALUMNIPORTAL_MASTER_MASTER"
					SET "USER_ID" = CASE 
					WHEN '${payload.document}' != 'undefined' THEN '${payload.document}'
					ELSE (select "USER_ID" FROM "${schema}"."SCLABS_ALUMNIPORTAL_MASTER_MASTER" where "ID"='${payload.id}')
					END,
					"MODIFIEDBY" = '${modifiedby}',
    				"MODIFIEDAT" = '${modifiedat}'
    				where
    				"ID" = '${payload.id}'`
				)
				const results = await db.statementExecPromisified(statement, [])
				resolve(results)

			} catch (error) {
				reject(error);
			}
		});
	};

	const deleteuser = ({
		payload,
		db
	}) => {
		return new Promise(async(resolve, reject) => {
			try {
				/*console.log(
					`DELETE FROM "${schema}"."SCLABS_ALUMNIPORTAL_NEWS_NEWS"  WHERE ID = '${payload.id}'`
				)*/
				const schema = await utils.currentSchema({
					db
				})
				const query = `DELETE FROM "${schema}"."SCLABS_ALUMNIPORTAL_MASTERDATA_MASTERDATA"  WHERE ID = '${payload.payload.id}'`
				const statement = await db.preparePromisified(query);
				const results = await db.statementExecPromisified(statement, [])
				resolve(results);
			} catch (error) {
				reject(error);
			}
		});
	};

	return {
		login,
		signup,
		forgetpassword

	};

};