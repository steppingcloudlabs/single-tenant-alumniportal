const uuid = require("uuid");
const utils = require("../../utils/database/index.js")();
module.exports = () => {
	const login = ({
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
						const query4 = `SELECT * FROM "${schema}"."SCLABS_ALUMNIPORTAL_MASTERDATA_MASTERDATA" where USER_ID='${userid}' `

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
							const query5 = `INSERT INTO "MULTITENANT_ALUMNIPORTAL_SAP_MULTITENANT_ALUMNIPORTAL_SAP_DB_1"."SCLABS_ALUMNIPORTAL_USERS_USERS" VALUES(
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
									'',
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

	};

};