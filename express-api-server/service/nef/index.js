const uuid = require("uuid");
module.exports = () => {
	/*
	SERVICE FUNCTIONS FOR NEWS 
	*/
	const viewnews = ({
		payload,
		db
	}) => {
		return new Promise(async(resolve, reject) => {
			try {
				// TODO: add pagination using [to, from] clauses in statement.

				const statement = await db.preparePromisified(
					`SELECT TOP 1000 "ID","QUESTION","ANSWER","CREATEDAT","CREATEDBY","MODIFIEDAT","MODIFIEDBY" FROM "MULTITENANT_ALUMNIPORTAL_SAP_MULTITENANT_ALUMNIPORTAL_SAP_DB_1"."SCLABS_ALUMNIPORTAL_FAQ_FAQ"`
				)
				const results = await db.statementExecPromisified(statement, [])
				resolve(results);

			} catch (error) {
				reject(error);
			}
		});
	};

	const createnews = ({
		payload,
		db
	}) => {
		return new Promise(async(resolve, reject) => {
			try {
				const statement = await db.preparePromisified(
					`INSERT INTO "MULTITENANT_ALUMNIPORTAL_SAP_MULTITENANT_ALUMNIPORTAL_SAP_DB_1"."SCLABS_ALUMNIPORTAL_FAQ_FAQ" VALUES('${payload.ID}', '${payload.QUESTION}', '${payload.ANSWER}', '${payload.CREATEDAT}', '${payload.CREATEDBY}', '${payload.MODIFIEDAT}','${payload.MODIFIEDBY}')`
				)
				const results = await db.statementExecPromisified(statement, [])
				resolve(results);
			} catch (error) {
				reject(error);
			}
		});
	};

	const updatenews = ({
		payload,
		db
	}) => {
		return new Promise(async(resolve, reject) => {
			try {
				console.log(
					`INSERT INTO "MULTITENANT_ALUMNIPORTAL_SAP_MULTITENANT_ALUMNIPORTAL_SAP_DB_1"."SCLABS_ALUMNIPORTAL_FAQ_FAQ" VALUES('${payload.ID}', '${payload.QUESTION}', '${payload.ANSWER}', '${payload.CREATEDAT}', '${payload.CREATEDBY}', '${payload.MODIFIEDAT}','${payload.MODIFIEDBY}')`
				)
				resolve(payload)
			} catch (error) {
				reject(error);
			}
		});
	};

	/*
	
	SERVICE FUNCTIONS FOR FAQ
	
	*/

	const viewfaq = ({
		payload,
		db
	}) => {
		return new Promise(async(resolve, reject) => {
			try {
				// TODO: add pagination using [to, from] clauses in statement.

				const statement = await db.preparePromisified(
					`SELECT TOP 1000 "ID","QUESTION","ANSWER","CREATEDAT","CREATEDBY","MODIFIEDAT","MODIFIEDBY" FROM "MULTITENANT_ALUMNIPORTAL_SAP_MULTITENANT_ALUMNIPORTAL_SAP_DB_1"."SCLABS_ALUMNIPORTAL_FAQ_FAQ"`
				)
				const results = await db.statementExecPromisified(statement, [])
				resolve(results);

			} catch (error) {
				reject(error);
			}
		});
	};

	const createfaq = ({
		payload,
		db
	}) => {
		return new Promise(async(resolve, reject) => {
			try {
				const statement = await db.preparePromisified(
					`INSERT INTO "MULTITENANT_ALUMNIPORTAL_SAP_MULTITENANT_ALUMNIPORTAL_SAP_DB_1"."SCLABS_ALUMNIPORTAL_FAQ_FAQ" VALUES('${payload.ID}', '${payload.QUESTION}', '${payload.ANSWER}', '${payload.CREATEDAT}', '${payload.CREATEDBY}', '${payload.MODIFIEDAT}','${payload.MODIFIEDBY}')`
				)
				const results = await db.statementExecPromisified(statement, [])
				resolve(results);
			} catch (error) {
				reject(error);
			}
		});
	};

	const updatefaq = ({
		payload,
		db
	}) => {
		return new Promise(async(resolve, reject) => {
			try {
				console.log(
					`INSERT INTO "MULTITENANT_ALUMNIPORTAL_SAP_MULTITENANT_ALUMNIPORTAL_SAP_DB_1"."SCLABS_ALUMNIPORTAL_FAQ_FAQ" VALUES('${payload.ID}', '${payload.QUESTION}', '${payload.ANSWER}', '${payload.CREATEDAT}', '${payload.CREATEDBY}', '${payload.MODIFIEDAT}','${payload.MODIFIEDBY}')`
				)
				resolve(payload)
			} catch (error) {
				reject(error);
			}
		});
	};

	/*
	SERVICE FUNCTIONS FOR EVENT 
	*/

	return {
		viewNews,
		createnews,
		updatenews
	};

};