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
				const statement = await db.preparePromisified(
					`SELECT* FROM "${schema}"."SCLABS_ALUMNIPORTAL_DOCUMENTS_DOCUMENTS" WHERE CONTAINS (*,'${payload.query}', FUZZY(0.4)) limit ${limit} offset ${offset}`
				)
				const results = await db.statementExecPromisified(statement, [])
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
					`SELECT* FROM "${schema}"."SCLABS_ALUMNIPORTAL_DOCUMENTS_DOCUMENTS" WHERE CONTAINS (*, '${payload.query}', FUZZY(0.6)) limit ${limit} offset ${offset}`
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
				const query =
					`SELECT ID, REQUISITION_ID,POSTING_END_DATE,POSTING_START_DATE,TITLE,JOB_ROLE,JOB_DETAILS,COUNTRY_OF_RESIDENCE,CITY FROM "${schema}"."SCLABS_ALUMNIPORTAL_JOB_JOB" WHERE CONTAINS ((REQUISITION_ID,TITLE,JOB_ROLE,JOB_DETAILS,COUNTRY_OF_RESIDENCE,CITY), '${payload.query}', FUZZY(0.6)) ORDER BY "POSTING_START_DATE" desc limit ${limit} offset ${offset}`
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
		searchJob
	}
};