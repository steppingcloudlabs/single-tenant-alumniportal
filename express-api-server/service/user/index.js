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
				const userid = payload.userid
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
					A1."CITY_ADDRESSES",
					A1."PHONE_NUMBER_PHONE_INFORMATION",
					A1."MANAGER_JOB_INFORMATION",
					A1."DESIGNATION_JOB_INFORMATION",
					A1."LINKEDIN",
					A2."SKILL" as skill
					FROM "${schema}"."SCLABS_ALUMNIPORTAL_USERS_USERS" as A1 
					LEFT JOIN  "${schema}"."SCLABS_ALUMNIPORTAL_SKILLS_SKILLS" as A2 
					ON A1."SKILL_ID" = A2."ID" where A1."USER_ID" = '${userid}';`
				const statement = await db.preparePromisified(query)
				const obj = await db.statementExecPromisified(statement, [])
				var results = [];
				var a = [];
				results = obj[0];
				if (1 < obj.length) {
					for (var i = 0; i < obj.length; i++) {
						a[i] = obj[i].SKILL;
					}
				} else {
					a[0] = obj[0].SKILL;
				}
				results.SKILL = a;
				resolve(results);
			} catch (error) {
				reject(error);
			}
		});
	};
	const updateprofile = ({
		payload,
		db
	}) => {
		return new Promise(async(resolve, reject) => {
			try {
				const schema = await utils.currentSchema({
					db
				})
				const modifiedby = "admin";
				const modifiedat = new Date().toISOString();
				const date = new Date().toISOString();
				const query =
					`UPDATE "${schema}"."SCLABS_ALUMNIPORTAL_USERS_USERS"
                    SET "PHONE_NUMBER_PHONE_INFORMATION" = CASE
								WHEN '${payload.phone_number_phone_information}' != 'undefined' THEN '${payload.payload.phone_number_phone_information}'
								ELSE (select "PHONE_NUMBER_PHONE_INFORMATION" FROM "${schema}"."SCLABS_ALUMNIPORTAL_USERS_USERS" where "ID"='${payload.payload.userid}')
								END,
						"CITY_ADDRESSES" = case
								WHEN '${payload.city_addresses}' != 'undefined' THEN '${payload.payload.city_addresses}'
								ELSE (select "CITY_ADDRESSES" FROM "${schema}"."SCLABS_ALUMNIPORTAL_USERS_USERS" where "ID"='${payload.payload.userid}')
								END,
						"LINKEDIN" = case
								WHEN '${payload.linkedin}' != 'undefined' THEN '${payload.payload.linkedin}'
								ELSE (select "LINKEDIN" FROM "${schema}"."SCLABS_ALUMNIPORTAL_USERS_USERS" where "ID"='${payload.payload.userid}')
								END,
					    "MODIFIEDBY" = '${modifiedby}',
					    "MODIFIEDAT" = '${modifiedat}'
					where
					"USER_ID" = '${payload.payload.userid}'`
				console.log(query);
				const statement = await db.preparePromisified(query)
				const results = await db.statementExecPromisified(statement, [])
				if (results >= 1) {
					resolve(1);
				}
			} catch (error) {
				reject(error);
			}
		});
	};
	const deleteprofile = ({
		payload,
		db
	}) => {
		return new Promise(async(resolve, reject) => {
			try {
				const userid = payload.userid
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