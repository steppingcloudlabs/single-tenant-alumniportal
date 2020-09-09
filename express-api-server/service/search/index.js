const uuid = require("uuid");
const currentSchema = require("../../utils/database/index.js")();
module.exports = () => {
	const searchUser = ({
		payload,
		db
	}) => {
		return new Promise(async(resolve, reject) => {
			try {
				const schema = currentSchema(db)
				const limit = payload.limit == undefined ? 10 : payload.limit
				const offset = payload.offset == undefined ? 0 : payload.offset
				const statement = await db.preparePromisified(
					`SELECT* FROM "${schema}"."SCLABS_ALUMNIPORTAL_DOCUMENTS_DOCUMENTS" WHERE CONTAINS (*, ${payload.query}, FUZZY (0.8))rows limit ${limit} offset ${offset}`
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
				const schema = currentSchema(db)
				const limit = payload.limit == undefined ? 10 : payload.limit
				const offset = payload.offset == undefined ? 0 : payload.offset
				const statement = await db.preparePromisified(
					`SELECT* FROM "${schema}"."SCLABS_ALUMNIPORTAL_SKILLS_SKILLS" WHERE CONTAINS (*, ${payload.query}, FUZZY (0.7 ))rows limit ${limit} offset ${offset}`
				)
				console.log(statement)
				const results = await db.statementExecPromisified(statement, [])

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
				const schema = currentSchema(db)
				const limit = payload.limit == undefined ? 10 : payload.limit
				const offset = payload.offset == undefined ? 0 : payload.offset
				const statement = await db.preparePromisified(
					`SELECT* FROM "${schema}"."SCLABS_ALUMNIPORTAL_DOCUMENTS_DOCUMENTS" WHERE CONTAINS (*, ${payload.query}, FUZZY (0.8))rows limit ${limit} offset ${offset}`
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
				const schema = currentSchema(db)
				const limit = payload.limit == undefined ? 10 : payload.limit
				const offset = payload.offset == undefined ? 0 : payload.offset
				const statement = await db.preparePromisified(
					`SELECT* FROM "${schema}"."SCLABS_ALUMNIPORTAL_JOB_JOB" WHERE CONTAINS (*, ${payload.query}, FUZZY (0.8))rows limit ${limit} offset ${offset}`
				)
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