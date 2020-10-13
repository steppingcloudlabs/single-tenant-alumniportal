const uuid = require("uuid");
const utils = require("../../utils/database/index.js")();
module.exports = () => {
	const searchUser = ({
		payload,
		db
	}) => {
		return new Promise(async(resolve, reject) => {
			try {
				const schema = await utils.currentSchema({
					db
				})
				const limit = payload.limit == undefined ? 10 : payload.limit
				const offset = payload.offset == undefined ? 0 : payload.offset
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
					A2."SKILL" as skill FROM "${schema}"."SCLABS_ALUMNIPORTAL_USERS_USERS" as A1 LEFT JOIN  "${schema}"."SCLABS_ALUMNIPORTAL_SKILLS_SKILLS" as A2 
					ON A1.SKILL_ID = A2.ID
					WHERE CONTAINS ((A1."USER_ID", A1."FIRST_NAME_PERSONAL_INFORMATION", A1."MIDDLE_NAME_PERSONAL_INFORMATION", A1."LAST_NAME_PERSONAL_INFORMATION"),'${payload.query}', FUZZY(0.4)) limit ${limit} offset ${offset}`
				const statement = await db.preparePromisified(query)
				const obj = await db.statementExecPromisified(statement, [])
				var results = {};
				results = obj[0];
				const a = [];
					if (1 < obj.length) {
						for (var i = 0; i < obj.length; i++) {
							a[i]= obj[i].SKILL;
						}
						results.SKILL = a;
						} 
					else {
                        a[0]=obj[0].SKILL;
						results.SKILL = a;
						}
				resolve(results);
			} catch (error) {
				reject(error);
			}
		});
	};

	const searchSkill = ({
		payload,
		db
	}) => {
		return new Promise(async(resolve, reject) => {
			try {
				const schema = await utils.currentSchema({
					db
				})
				const limit = payload.limit == undefined ? 10 : payload.limit
				const offset = payload.offset == undefined ? 0 : payload.offset
				const query =
					`SELECT ID, SKILL FROM "${schema}"."SCLABS_ALUMNIPORTAL_SKILLS_SKILLS" WHERE CONTAINS ((SKILL),'${payload.query}', FUZZY(0.4)) limit ${limit} offset ${offset}`
				console.log(query)
				const statement = await db.preparePromisified(query)
				const results = await db.statementExecPromisified(statement, [])
				console.log(results);
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
		return new Promise(async(resolve, reject) => {
			try {
				const schema = await utils.currentSchema({
					db
				})
				const limit = payload.limit == undefined ? 10 : payload.limit
				const offset = payload.offset == undefined ? 0 : payload.offset
				const statement = await db.preparePromisified(
					`SELECT* FROM "${schema}"."SCLABS_ALUMNIPORTAL_DOCUMENTS_DOCUMENTS" WHERE CONTAINS (*, '${payload.query}', FUZZY(0.4)) limit ${limit} offset ${offset}`
				)
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
		return new Promise(async(resolve, reject) => {
			try {
				const schema = await utils.currentSchema({
					db
				})
				const limit = payload.limit == undefined ? 10 : payload.limit
				const offset = payload.offset == undefined ? 0 : payload.offset
				const query = 	`SELECT* FROM "${schema}"."SCLABS_ALUMNIPORTAL_JOB_JOB" WHERE CONTAINS ((REQUISITION_ID,TITLE,JOB_ROLE,JOB_DETAILS,COUNTRY_OF_RESIDENCE,CITY),'${payload.query}', FUZZY(0.4)) limit ${limit} offset ${offset}`
				console.log(query)
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
		searchJob
	}
};