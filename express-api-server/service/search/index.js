const uuid = require("uuid");
const utils = require("../../utils/database/index.js")();
module.exports = () => {
	const searchUser = ({
		payload,
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
					`SELECT 
						"ID",
						"USER_ID",
						"GENDER",
						"LAST_WORKING_DAY_AS_PER_NOTICE_PERIOD",
						"DESIGNATION_JOB_INFORMATION",
						"PERSONAL_EMAIL_ID",
						"FIRST_NAME_PERSONAL_INFORMATION",
						"LAST_NAME_PERSONAL_INFORMATION",
						"MIDDLE_NAME_PERSONAL_INFORMATION",
						"SALUTATION_PERSONAL_INFORMATION",
						"CITY_ADDRESSES",
						IFNULL(LINKEDIN, '') "LINKEDIN" FROM "${schema}"."SCLABS_ALUMNIPORTAL_USERS_USERS" WHERE CONTAINS (("USER_ID", "FIRST_NAME_PERSONAL_INFORMATION", "MIDDLE_NAME_PERSONAL_INFORMATION", "LAST_NAME_PERSONAL_INFORMATION"),'${payload.QUERY}', FUZZY(0.4)) LIMIT ${LIMIT} offset ${offset}`
				const statement = await db.preparePromisified(query)
				const obj = await db.statementExecPromisified(statement, [])
				resolve(obj)
				// if (obj.length == 0) {
				// 	resolve(obj)
				// } else {
				// 	var results = [];
				// 	var l = obj.length;
				// 	var a = [];
				// 	var g = 0;
				// 	if (1 < l) {
				// 		for (var i = 0; i < l; i++) {
				// 			results[i] = obj[i];
				// 			a[g] = obj[i].SKILL;
				// 			for (var j = (i + 1); j < l; j++) {
				// 				if (results[i].USER_ID == obj[j].USER_ID) {
				// 					a[++g] = obj[j].SKILL;
				// 					for (var k = j; k < (l - 1); k++) {
				// 						obj[k] = obj[k + 1];
				// 					}
				// 					l = l - 1;
				// 					obj.length = l;
				// 				}
				// 			}
				// 			results[i].SKILL = a;
				// 			g = 0;
				// 			a = [];
				// 		}
				// 	} else {
				// 		results = obj[0];
				// 		a[0] = obj[0].SKILL;
				// 		results.SKILL = a
				// 	}
				// 	resolve(results);
				// }

			} catch (error) {
				reject(error);
			}
		});
	};

	const searchSkill = ({
		payload,
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
					`SELECT ID, SKILL FROM "${schema}"."SCLABS_ALUMNIPORTAL_SKILLS_SKILLS" WHERE CONTAINS ((SKILL),'${payload.QUERY}', FUZZY(0.2)) LIMIT ${LIMIT} offset ${offset}`
				const statement = await db.preparePromisified(query)
				const results = await db.statementExecPromisified(statement, [])
				console.log(results)
				resolve(results);
			} catch (error) {
				console.log(error);
				reject(error);
			}
		});
	};
	const searchAdmin = ({
		payload,
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
					`SELECT 
						A1."ID",
						A1."USER_ID",
						A1."PERSONAL_EMAIL_ID",
						A1."FIRST_NAME_PERSONAL_INFORMATION",
						A1."LAST_NAME_PERSONAL_INFORMATION",
						A1."MIDDLE_NAME_PERSONAL_INFORMATION",
						A1."SALUTATION_PERSONAL_INFORMATION",
						A1."CITY_ADDRESSES"
						A1."LINKEDIN",
						FROM "${schema}".
						"SCLABS_ALUMNIPORTAL_USERS_USERS"
						as A1
						WHERE CONTAINS ((A1."USER_ID", A1."FIRST_NAME_PERSONAL_INFORMATION", A1."MIDDLE_NAME_PERSONAL_INFORMATION", A1."LAST_NAME_PERSONAL_INFORMATION"),'${payload.QUERY}', FUZZY(0.4)) LIMIT ${LIMIT} offset ${offset}`
				console.log(query)
				const statement = await db.preparePromisified(query)
				const results = await db.statementExecPromisified(statement, [])
				resolve(results);
			} catch (error) {
				reject(error);
			}
		});
	};

	const searchJob = ({
		payload,
		db
	}) => {
		return new Promise(async (resolve, reject) => {
			try {
				const schema = await utils.currentSchema({
					db
				})
				const LIMIT = payload.LIMIT == undefined ? 10 : payload.LIMIT
				const offset = payload.OFFSET == undefined ? 0 : payload.OFFSET
				let country = payload.COUNTRY == undefined ? "" : payload.COUNTRY
				const query =
					`SELECT "ID", "COUNTRY", "DEPARTMENT", "JOBDESCRIPTION", "JOBPOSTINGID", "JOBREQID", "JOBTITLE", "LOCATION", "POSTINGSTATUS", "POSTINGSTARTDATE", "POSTINGENDDATE" FROM "${schema}". "SCLABS_ALUMNIPORTAL_JOB_JOB" WHERE CONTAINS((jobTitle, location, country, jobDescription), '${payload.QUERY + " "+country}', FUZZY(0.4))  ORDER BY POSTINGSTARTDATE DESC LIMIT ${LIMIT} offset ${offset}`
				console.log(query)
				const statement = await db.preparePromisified(query)
				const results = await db.statementExecPromisified(statement, [])
				resolve(results);
			} catch (error) {
				reject(error);
			}
		});
	};

	const searchUserids = ({
		payload,
		db
	}) => {
		return new Promise(async (resolve, reject) => {
			try {
				const schema = await utils.currentSchema({
					db
				})
				const LIMIT = payload.LIMIT == undefined ? 10 : payload.LIMIT
				const offset = payload.OFFSET == undefined ? 0 : payload.OFFSET
				let country = payload.COUNTRY == undefined ? "" : payload.COUNTRY
				const query =
					`SELECT 
					"ID",
					"USER_ID",
					"FIRST_NAME_PERSONAL_INFORMATION",
					"LAST_NAME_PERSONAL_INFORMATION",
					"MIDDLE_NAME_PERSONAL_INFORMATION",
					"SALUTATION_PERSONAL_INFORMATION",
					"CITY_ADDRESSES",
					IFNULL(STATE, '') "STATE",
					IFNULL(COUNTRY, '') "COUNTRY"
					FROM "${schema}"."SCLABS_ALUMNIPORTAL_USERS_USERS" rows LIMIT ${LIMIT} offset ${offset}`
				console.log(query)
				const statement = await db.preparePromisified(query)
				const results = await db.statementExecPromisified(statement, [])
				resolve(results);
			} catch (error) {
				reject(error);
			}
		});
	};
	return {
		searchUser,
		searchSkill,
		searchAdmin,
		searchJob,
		searchUserids
	}
};