const uuid = require("uuid");
const utils = require("../../utils/database/index.js")();
module.exports = () => {
	/*
	SERVICE FUNCTIONS FOR NEWS 
	
	REPONSIBILITY: HAMZA
	*/
	const viewnews = ({
		payload,
		db
	}) => {
		return new Promise(async (resolve, reject) => {
			try {
				const schema = await utils.currentSchema({
					db
				})
				// TODO: add pagination using [to, from] clauses in statement.
				const LIMIT = payload.LIMIT == undefined ? 10 : payload.LIMIT
				const offset = payload.OFFSET == undefined ? 0 : payload.OFFSET
				const statement = await db.preparePromisified(
					`SELECT * FROM "${schema}"."SCLABS_ALUMNIPORTAL_NEWS_NEWS" rows LIMIT ${LIMIT} offset ${offset}`
				)
				const results = await db.statementExecPromisified(statement, [])
				resolve(results);
			} catch (error) {
				console.log(error)
				reject(error);
			}
		});
	};

	const createnews = ({
		payload,
		db
	}) => {
		return new Promise(async (resolve, reject) => {
			try {
				const schema = await utils.currentSchema({
					db
				})
				const createdat = new Date().toISOString();
				const createdby = "payload.payload.AUTHOR";
				const modifiedby = "admin";
				const modifiedat = new Date().toISOString();
				const date = new Date().toISOString();
				const ID = uuid();
				const query =
					`INSERT INTO "${schema}"."SCLABS_ALUMNIPORTAL_NEWS_NEWS" VALUES(
						'${createdat}',
						'${createdby}',
						'${modifiedat}',
						'${modifiedby}',
						'${ID}',
						'${payload.payload.TITLE}',
						'${payload.payload.CONTENT}',
						'${payload.payload.PHOTO}'
						)`
				const statement = await db.preparePromisified(query)
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
		return new Promise(async (resolve, reject) => {
			try {
				const schema = await utils.currentSchema({
					db
				})
				const modifiedby = "admin";
				const modifiedat = new Date().toISOString();
				const date = new Date().toISOString();
				const query =
					`UPDATE "${schema}"."SCLABS_ALUMNIPORTAL_NEWS_NEWS"
					SET "TITLE" = CASE
								WHEN '${payload.payload.TITLE}' != 'undefined' THEN '${payload.payload.TITLE}'
								ELSE (select "TITLE" FROM "${schema}"."SCLABS_ALUMNIPORTAL_NEWS_NEWS" where "ID"='${payload.payload.ID}')
								END,
					   "CONTENT" = CASE
								WHEN '${payload.payload.CONTENT}' != 'undefined' THEN '${payloadpayload.CONTENT}'
								ELSE (select "CONTENT" FROM "${schema}"."SCLABS_ALUMNIPORTAL_NEWS_NEWS" where "ID"='${payload.payload.ID}')
								END,
						"PHOTO" = case
								WHEN '${payload.payload.PHOTO}' != 'undefined'
								THEN '${payload.payload.PHOTO}'
								ELSE (select "PHOTO" FROM "${schema}"."SCLABS_ALUMNIPORTAL_NEWS_NEWS" where "ID"='${payload.payload.ID}')
								end,
						"MODIFIEDBY" = '${modifiedby}',
					    "MODIFIEDAT" = '${modifiedat}'
					where
					"ID" = '${payload.payload.ID}'`
				const statement = await db.preparePromisified(query)
				const results = await db.statementExecPromisified(statement, [])
				resolve(results)

			} catch (error) {
				console.log(error)
				reject(error);
			}
		});
	};

	const deletenews = ({
		payload,
		db
	}) => {
		return new Promise(async (resolve, reject) => {
			try {

				/*console.log(
					`DELETE FROM "${schema}"."SCLABS_ALUMNIPORTAL_NEWS_NEWS"  WHERE ID = '${payload.id}'`
				)*/
				const schema = await utils.currentSchema({
					db
				})
				const query = `DELETE FROM "${schema}"."SCLABS_ALUMNIPORTAL_NEWS_NEWS"  WHERE ID = '${payload.payload.ID}'`
				const statement = await db.preparePromisified(query)
				const results = await db.statementExecPromisified(statement, [])
				resolve(results);

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
		return new Promise(async (resolve, reject) => {
			try {
				// TODO: add pagination using [to, from] clauses in statement.
				const LIMIT = payload.LIMIT == undefined ? 10 : payload.LIMIT
				const offset = payload.OFFSET == undefined ? 0 : payload.OFFSET
				const schema = await utils.currentSchema({
					db
				})
				const query =
					`SELECT "ID","QUESTION","ANSWER" FROM "${schema}"."SCLABS_ALUMNIPORTAL_FAQ_FAQ" rows LIMIT ${LIMIT} offset ${offset}`
				const statement = await db.preparePromisified(query)
				const results = await db.statementExecPromisified(statement, [])
				console.log(results)
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
		return new Promise(async (resolve, reject) => {
			try {
				const schema = await utils.currentSchema({
					db
				})
				const createdat = new Date().toISOString().split('T')[0];
				const createdby = "admin";
				const modifiedby = "admin";
				const modifiedat = new Date().toISOString().split('T')[0];
				const ID = uuid();
				const query =
					`INSERT INTO "${schema}"."SCLABS_ALUMNIPORTAL_FAQ_FAQ" VALUES('${createdat}', '${createdby}','${modifiedat}','${modifiedby}', '${ID}', '${payload.payload.QUESTION}', '${payload.payload.ANSWER}')`
				const statement = await db.preparePromisified(query)
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
		return new Promise(async (resolve, reject) => {
			try {
				const schema = await utils.currentSchema({
					db
				})
				const modifiedby = "admin";
				const modifiedat = new Date().toISOString();
				const query =
					`UPDATE "${schema}"."SCLABS_ALUMNIPORTAL_FAQ_FAQ"
					SET "QUESTION" = CASE 
				    	WHEN '${payload.payload.QUESTION}' != 'undefined' THEN '${payload.payload.QUESTION}'
					    ELSE (select "QUESTION" FROM "${schema}"."SCLABS_ALUMNIPORTAL_FAQ_FAQ" where "ID"='${payload.payload.ID}')
					    END,
					"ANSWER" = CASE
				         WHEN '${payload.payload.ANSWER}' != 'undefined' THEN '${payload.payload.ANSWER}'
					     ELSE (select "ANSWER" FROM "${schema}"."SCLABS_ALUMNIPORTAL_FAQ_FAQ" where "ID"='${payload.payload.ID}')
					     end,
					"MODIFIEDBY" = '${modifiedby}',
    				"MODIFIEDAT" = '${modifiedat}'
    				where
    				"ID" = '${payload.payload.ID}'`
				const statement = await db.preparePromisified(query)
				const results = await db.statementExecPromisified(statement, [])
				resolve(results)

			} catch (error) {
				reject(error);
			}
		});
	};

	const deletefaq = ({
		payload,
		db
	}) => {
		return new Promise(async (resolve, reject) => {
			try {
				const schema = await utils.currentSchema({
					db
				})
				const query =
					`DELETE FROM "${schema}"."SCLABS_ALUMNIPORTAL_FAQ_FAQ" WHERE ID = '${payload.payload.ID}'`
				const statement = await db.preparePromisified(query)
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
	const getevent = ({
		payload,
		db
	}) => {
		return new Promise(async (resolve, reject) => {
			try {
				const schema = await utils.currentSchema({
					db
				})
				// TODO: add pagination using [to, from] clauses in statement.
				const LIMIT = payload.LIMIT == undefined ? 10 : payload.LIMIT
				const offset = payload.OFFSET == undefined ? 0 : payload.OFFSET
				const statement = await db.preparePromisified(
					`SELECT * FROM "${schema}"."SCLABS_ALUMNIPORTAL_EVENTS_EVENTS" rows LIMIT ${LIMIT} offset ${offset}`
				)
				const results = await db.statementExecPromisified(statement, [])
				resolve(results);

			} catch (error) {
				reject(error);
			}
		});
	};
	const createevent = ({
		payload,
		db
	}) => {
		return new Promise(async (resolve, reject) => {
			try {
				const schema = await utils.currentSchema({
					db
				})
				const createdat = new Date().toISOString();
				const createdby = payload.payload.author;
				const modifiedby = "admin";
				const modifiedat = new Date().toISOString();
				const date = new Date().toISOString();
				const ID = uuid();
				const query =
					`INSERT INTO "${schema}"."SCLABS_ALUMNIPORTAL_EVENTS_EVENTS" VALUES(
						'${createdat}',
						'${createdby}',
						'${modifiedat}',
						'${modifiedby}',
						'${ID}',
						'${payload.payload.TITLE}',
						'${payload.payload.CONTENT}',
						'${payload.payload.PHOTO}')`
				console.log(query)
				const statement = await db.preparePromisified(query)
				const results = await db.statementExecPromisified(statement, [])
				resolve(results);
			} catch (error) {
				console.log(error)
				reject(error);
			}
		});
	};
	const updateevent = ({
		payload,
		db
	}) => {
		return new Promise(async (resolve, reject) => {
			try {
				const schema = await utils.currentSchema({
					db
				})
				const createdat = new Date().toISOString();
				const createdby = "admin";
				const modifiedby = "admin";
				const modifiedat = new Date().toISOString();
				const date = new Date().toISOString();
				const ID = uuid();
				const query =
					`UPDATE "${schema}"."SCLABS_ALUMNIPORTAL_EVENTS_EVENTS"
					SET "TITLE" = CASE
								WHEN '${payload.payload.TITLE}' != 'undefined' THEN '${payload.payload.TITLE}'
								ELSE (select "TITLE" FROM "${schema}"."SCLABS_ALUMNIPORTAL_EVENTS_EVENTS" where "ID"='${payload.payload.ID}')
								END,
					   "CONTENT" = CASE
								WHEN '${payload.payload.CONTENT}' != 'undefined' THEN '${payload.payload.CONTENT}'
								ELSE (select "CONTENT" FROM "${schema}"."SCLABS_ALUMNIPORTAL_EVENTS_EVENTS" where "ID"='${payload.payload.ID}')
								END,
						"PHOTO" = case
								WHEN '${payload.payload.PHOTO}' != 'undefined' THEN '${payload.payload.PHOTO}'
								ELSE (select "PHOTO" FROM "${schema}"."SCLABS_ALUMNIPORTAL_EVENTS_EVENTS" where "ID"='${payload.payload.ID}')
								end,
						"CREATEDAT" = '${createdat}', 
						"CREATEDBY" = '${createdby}',
						"MODIFIEDBY" = '${modifiedby}',
					    "MODIFIEDAT" = '${modifiedat}'
					where
					"ID" = '${payload.payload.ID}'`
				console.log(query)

				const statement = await db.preparePromisified(query)
				const results = await db.statementExecPromisified(statement, [])
				resolve(results)

			} catch (error) {
				console.log(error)
				reject(error);
			}
		});
	};

	const deleteevent = ({
		payload,
		db
	}) => {
		return new Promise(async (resolve, reject) => {
			try {
				const schema = await utils.currentSchema({
					db
				})
				const query = `DELETE FROM "${schema}"."SCLABS_ALUMNIPORTAL_EVENTS_EVENTS"  WHERE ID = '${payload.id}'`
				const statement = await db.preparePromisified(query)
				const results = await db.statementExecPromisified(statement, [])
				resolve(results);

			} catch (error) {
				reject(error);
			}
		});
	};

	return {
		viewnews,
		createnews,
		updatenews,
		deletenews,
		viewfaq,
		createfaq,
		updatefaq,
		deletefaq,
		getevent,
		createevent,
		updateevent,
		deleteevent

	};

};