const uuid = require("uuid");
const utils = require("../../utils/database/index.js")();
const skillservice = require("../skills/index.js")();
// const currentSchema = require("../../utils/database/index.js")();
module.exports = () => {

	/**
	 * Gets user profile created at the time of signup.
	 * @param {payload, db} 
	 * 
	 */
	const getprofile = ({
		payload,
		db
	}) => {
		return new Promise(async (resolve, reject) => {
			try {
				const userid = payload.USERID
				const schema = await utils.currentSchema({
					db
				})
				const query =
					`SELECT 
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
				    where A1."USER_ID" = '${userid}';`
				const statement = await db.preparePromisified(query)
				let obj = await db.statementExecPromisified(statement, [])
				// add skill in the response as well.
				let response = await skillservice.getskills({ payload, db })
				obj[0].SKILL = response
				resolve(obj);
			} catch (error) {

				reject(error);
			}
		});
	};

	// update profile. 
	const updateprofile = ({
		payload,
		logger,
		db
	}) => {
		return new Promise(async (resolve, reject) => {
			try {
				const schema = await utils.currentSchema({
					db
				})
				const modifiedby = "admin";
				const modifiedat = new Date().toISOString();
				const date = new Date().toISOString();
				let query =
					`UPDATE "${schema}"."SCLABS_ALUMNIPORTAL_USERS_USERS"

                    SET "PHONE_NUMBER_PHONE_INFORMATION" = CASE
								WHEN '${payload.payload.PHONE_NUMBER_PHONE_INFORMATION}' != 'undefined' THEN '${payload.payload.PHONE_NUMBER_PHONE_INFORMATION}'
								ELSE (select "PHONE_NUMBER_PHONE_INFORMATION" FROM "${schema}"."SCLABS_ALUMNIPORTAL_USERS_USERS" where "USER_ID"='${payload.payload.USERID}')
								END,
						"CITY_ADDRESSES" = CASE
								WHEN '${payload.payload.CITY_ADDRESSES}' != 'undefined' THEN '${payload.payload.CITY_ADDRESSES}'
								ELSE (select "CITY_ADDRESSES" FROM "${schema}"."SCLABS_ALUMNIPORTAL_USERS_USERS" where "USER_ID"='${payload.payload.USERID}')
								END,
						"PERSONAL_EMAIL_ID" = CASE
								WHEN '${payload.payload.PERSONAL_EMAIL_ID}' != 'undefined' THEN '${payload.payload.PERSONAL_EMAIL_ID}'
								ELSE (select "PERSONAL_EMAIL_ID" FROM "${schema}"."SCLABS_ALUMNIPORTAL_USERS_USERS" where "USER_ID"='${payload.payload.USERID}')
								END,
						"PROFILEIMAGE" = CASE
								WHEN '${payload.payload.PROFILEIMAGE}' != 'undefined' THEN '${payload.payload.PROFILEIMAGE}'
								ELSE (select "PROFILEIMAGE" FROM "${schema}"."SCLABS_ALUMNIPORTAL_USERS_USERS" where "USER_ID"='${payload.payload.USERID}')
								END,
						"STATE" = CASE
								WHEN '${payload.payload.STATE}' != 'undefined' THEN '${payload.payload.STATE}'
								ELSE (select "STATE" FROM "${schema}"."SCLABS_ALUMNIPORTAL_USERS_USERS" where "USER_ID"='${payload.payload.USERID}')
								END,
						"COUNTRY" = CASE
								WHEN '${payload.payload.COUNTRY}' != 'undefined' THEN '${payload.payload.COUNTRY}'
								ELSE (select "COUNTRY" FROM "${schema}"."SCLABS_ALUMNIPORTAL_USERS_USERS" where "USER_ID"='${payload.payload.USERID}')
								END,
						"SKILL_ID" = CASE
								WHEN '${payload.payload.SKILL}' != 'undefined' THEN '${payload.payload.SKILL}'
								ELSE (select "SKILL_ID" FROM "${schema}"."SCLABS_ALUMNIPORTAL_USERS_USERS" where "USER_ID"='${payload.payload.USERID}')
								END,
						"LINKEDIN" = CASE
								WHEN '${payload.payload.LINKEDIN}' != 'undefined' THEN '${payload.payload.LINKEDIN}'
								ELSE(select "LINKEDIN" FROM "${schema}"."SCLABS_ALUMNIPORTAL_USERS_USERS" where "USER_ID" = '${payload.payload.USERID}')
								END,
					    "MODIFIEDBY" = '${modifiedby}',
					    "MODIFIEDAT" = '${modifiedat}'
					where
					"USER_ID" = '${payload.payload.USERID}'`

				let statement = await db.preparePromisified(query)
				let results = await db.statementExecPromisified(statement, [])
				if (results >= 1) {
					resolve(1);
				}
			} catch (error) {
				reject(error);
			}
		});
	};

	// deleting user profile 
	const deleteprofile = ({
		payload,
		db
	}) => {
		return new Promise(async (resolve, reject) => {
			try {
				const userid = payload.payload.USERID
				const schema = await utils.currentSchema({
					db
				})
				const query = `DELETE FROM "${schema}"."SCLABS_ALUMNIPORTAL_AUTH_LOGIN"  WHERE USERID ='${userid}'`
				const statement = await db.preparePromisified(query);
				const results = await db.statementExecPromisified(statement, [])
				if (results.length == 0) {
					resolve("error deleting userprofile ", error);
				} else {
					const query1 = `DELETE FROM "${schema}"."SCLABS_ALUMNIPORTAL_USERS_USERS"  WHERE USER_ID = '${userid}'`
					const statement1 = await db.preparePromisified(query1);
					const results1 = await db.statementExecPromisified(statement1, [])
					if (results1 >= 1) {
						resolve(1);
					}
				}
			} catch (error) {
				reject(error);
			}
		});
	};

	return {
		getprofile,
		updateprofile,
		deleteprofile

	};

};