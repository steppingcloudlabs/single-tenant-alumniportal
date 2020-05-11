const uuid = require("uuid");
module.exports = () => {
	/*
	SERVICE FUNCTIONS FOR NEWS 
	
	REPONSIBILITY: HAMZA
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
	
	REPONSIBILITY: PD
	*/

	const viewfaq = ({
		payload,
		db
	}) => {
		return new Promise(async(resolve, reject) => {
			try {
				// TODO: add pagination using [to, from] clauses in statement.
				const limit = payload.limit == null ? 10 : payload.limit
				const offset = payload.offset == null ? 0 : payload.offset
				const statement = await db.preparePromisified(
					`SELECT "ID","QUESTION","ANSWER" FROM "MULTITENANT_ALUMNIPORTAL_SAP_MULTITENANT_ALUMNIPORTAL_SAP_DB_1"."SCLABS_ALUMNIPORTAL_FAQ_FAQ" rows limit ${limit} offset ${offset}`
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
				const createdat = new Date().toISOString();
				const createdby = "admin";
				const modifiedby = "admin";
				const modifiedat = new Date().toISOString();
				const id = uuid();
				const statement = await db.preparePromisified(
					`INSERT INTO "MULTITENANT_ALUMNIPORTAL_SAP_MULTITENANT_ALUMNIPORTAL_SAP_DB_1"."SCLABS_ALUMNIPORTAL_FAQ_FAQ" VALUES('${id}', '${payload.question}', '${payload.answer}', '${createdat}', '${createdby}', '${modifiedat}','${modifiedby}')`
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

	const deletefaq = ({
		payload,
		db
	}) => {
		return new Promise(async(resolve, reject) => {
			try {
				const statement = await db.preparePromisified(
					`DELETE FROM "MULTITENANT_ALUMNIPORTAL_SAP_MULTITENANT_ALUMNIPORTAL_SAP_DB_1"."SCLABS_ALUMNIPORTAL_FAQ_FAQ" WHERE ID = ${payload.id}`
				)
				const results = await db.statementExecPromisified(statement, [])
				resolve(results)
			} catch (error) {
				reject(error);
			}
		});
	};

	/*
	SERVICE FUNCTIONS FOR EVENT 
		
		
	REPONSIBILITY: MAAZ
	*/

	return {
		viewnews,
		createnews,
		updatenews,
		viewfaq,
		createfaq,
		updatefaq,
		deletefaq
	};

};