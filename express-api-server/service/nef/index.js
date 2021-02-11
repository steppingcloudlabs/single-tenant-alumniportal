const uuid = require("uuid");
const utils = require("../../utils/database/index.js")();
function EscapeApostrophe(context) {
	return JSON.parse(JSON.stringify(context).replace("'", "''"));
}
function UnescapeApostrophe(context) {
	return JSON.parse(JSON.stringify(context).replace("''", "'"));
}
module.exports = () => {
	/*
	SERVICE FUNCTIONS FOR NEWS 
	
	REPONSIBILITY: HAMZA
	*/
	let viewnews = ({
		payload,
		db
	}) => {
		return new Promise(async (resolve, reject) => {
			try {
				let schema = await utils.currentSchema({
					db
				})
				// TODO: add pagination using [to, from] clauses in statement.
				let LIMIT = payload.LIMIT == undefined ? 10 : payload.LIMIT
				let offset = payload.OFFSET == undefined ? 0 : payload.OFFSET
				let statement = await db.preparePromisified(
					`SELECT "ID",
					"TITLE",
					"CONTENT",
					"PHOTO",
					"DATE" FROM "${schema}"."SCLABS_ALUMNIPORTAL_NEWS_NEWS" ORDER BY MODIFIEDAT DESC LIMIT ${LIMIT} offset ${offset}`
				)
				let results = await db.statementExecPromisified(statement, [])
				resolve(results);
			} catch (error) {
				console.log(error)
				reject(error);
			}
		});
	};

	let createnews = ({
		payload,
		db
	}) => {
		return new Promise(async (resolve, reject) => {
			try {
				payload = EscapeApostrophe(payload);
				let schema = await utils.currentSchema({
					db
				})
				let createdat = new Date().toISOString();
				let createdby = payload.payload.AUTHOR;
				let modifiedby = "admin";
				let modifiedat = new Date().toISOString();
				let date = new Date().toISOString();
				let ID = uuid();
				if (payload.payload.ID) {
					let result = await updatenews({
						payload,
						db
					});
					resolve(result)
				} else {
					let query =
						`INSERT INTO "${schema}"."SCLABS_ALUMNIPORTAL_NEWS_NEWS" VALUES(
						'${createdat}',
						'${createdby}',
						'${modifiedat}',
						'${modifiedby}',
						'${ID}',
						'${escape(escape(payload.payload.TITLE))}',
						'${escape(escape(payload.payload.CONTENT))}',
						'${payload.payload.PHOTO}',
						'${payload.payload.DATE}'
						)`
					let statement = await db.preparePromisified(query)
					let results = await db.statementExecPromisified(statement, [])
					if (results == 1) {
						data = UnescapeApostrophe(payload.payload);
						data.ID = ID;
						resolve(data);
					} else {
						reject(results);
					}

				}

			} catch (error) {
				reject(error);
			}
		});
	};

	let updatenews = ({
		payload,
		db
	}) => {
		return new Promise(async (resolve, reject) => {
			try {
				let schema = await utils.currentSchema({
					db
				})
				let modifiedby = "admin";
				let modifiedat = new Date().toISOString();
				let date = new Date().toISOString();

				let query =
					`UPDATE "${schema}"."SCLABS_ALUMNIPORTAL_NEWS_NEWS"
					SET "TITLE" = CASE
								WHEN '${escape(payload.payload.TITLE)}' != 'undefined' THEN '${escape(payload.payload.TITLE)}'
								ELSE (select "TITLE" FROM "${schema}"."SCLABS_ALUMNIPORTAL_NEWS_NEWS" where "ID"='${payload.payload.ID}')
								END,
					    "CONTENT" = CASE
								WHEN '${escape(payload.payload.CONTENT)}' != 'undefined' THEN '${escape(payload.payload.CONTENT)}'
								ELSE (select "CONTENT" FROM "${schema}"."SCLABS_ALUMNIPORTAL_NEWS_NEWS" where "ID"='${payload.payload.ID}')
								END,
						"DATE" = CASE
								WHEN '${payload.payload.DATE}' != 'undefined' THEN '${payload.payload.DATE}'
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
				let statement = await db.preparePromisified(query)
				let results = await db.statementExecPromisified(statement, [])
				if (results == 1) {
					let query =
						`SELECT "ID",
					"TITLE",
					"CONTENT",
					"PHOTO",
					"DATE" FROM "${schema}"."SCLABS_ALUMNIPORTAL_NEWS_NEWS" WHERE "ID" = '${payload.payload.ID}'`
					let statement = await db.preparePromisified(query)
					let result = await db.statementExecPromisified(statement, [])
					resolve(result)
				} else {
					reject(results)
				}


			} catch (error) {
				console.log(error)
				reject(error);
			}
		});
	};

	let deletenews = ({
		payload,
		db
	}) => {
		return new Promise(async (resolve, reject) => {
			try {

				/*console.log(
					`DELETE FROM "${schema}"."SCLABS_ALUMNIPORTAL_NEWS_NEWS"  WHERE ID = '${payload.id}'`
				)*/
				let schema = await utils.currentSchema({
					db
				})
				let query = `DELETE FROM "${schema}"."SCLABS_ALUMNIPORTAL_NEWS_NEWS"  WHERE ID = '${payload.payload.ID}'`
				let statement = await db.preparePromisified(query)
				let results = await db.statementExecPromisified(statement, [])
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

	let viewfaq = ({
		payload,
		db,
		schema
	}) => {
		return new Promise(async (resolve, reject) => {
			try {
				// TODO: add pagination using [to, from] clauses in statement.
				let LIMIT = payload.LIMIT == undefined ? 10 : payload.LIMIT
				let offset = payload.OFFSET == undefined ? 0 : payload.OFFSET
				// let schema = await utils.currentSchema({
				// 	db
				// })
				let query =
					`SELECT "ID","QUESTION","ANSWER" FROM "${schema}"."SCLABS_ALUMNIPORTAL_FAQ_FAQ" ORDER BY MODIFIEDAT DESC LIMIT ${LIMIT} offset ${offset}`
				let statement = await db.preparePromisified(query)
				let results = await db.statementExecPromisified(statement, [])

				resolve(results);

			} catch (error) {
				reject(error);
			}
		});
	};

	let createfaq = ({
		payload,
		db
	}) => {
		return new Promise(async (resolve, reject) => {
			try {
				payload = EscapeApostrophe(payload);
				let schema = await utils.currentSchema({
					db
				})
				if (payload.payload.ID) {
					let result = await updatefaq({
						payload,
						db
					});
					resolve(result)
				} else {
					let createdat = new Date().toISOString().split('T')[0];
					let createdby = "admin";
					let modifiedby = "admin";
					let modifiedat = new Date().toISOString().split('T')[0];
					let ID = uuid();
					let query =
						`INSERT INTO "${schema}"."SCLABS_ALUMNIPORTAL_FAQ_FAQ" VALUES('${createdat}', '${createdby}','${modifiedat}','${modifiedby}', '${ID}', '${escape(payload.payload.QUESTION)}', '${escape(payload.payload.ANSWER)}')`
					let statement = await db.preparePromisified(query)
					let results = await db.statementExecPromisified(statement, [])
					if (results == 1) {
						data = UnescapeApostrophe(payload.payload);
						data.ID = ID;
						resolve(data);
					} else {
						reject(results);
					}
				}
			} catch (error) {
				reject(error);
			}
		});
	};

	let updatefaq = ({
		payload,
		db
	}) => {
		return new Promise(async (resolve, reject) => {
			try {
				let schema = await utils.currentSchema({
					db
				})
				let modifiedby = "admin";
				let modifiedat = new Date().toISOString();
				let query =
					`UPDATE "${schema}"."SCLABS_ALUMNIPORTAL_FAQ_FAQ"
					SET "QUESTION" = CASE 
				    	WHEN '${escape(payload.payload.QUESTION)}' != 'undefined' THEN '${escape(payload.payload.QUESTION)}'
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
				let statement = await db.preparePromisified(query)
				let results = await db.statementExecPromisified(statement, [])
				if (results == 1) {
					let query =
						`SELECT "ID","QUESTION","ANSWER" FROM "${schema}"."SCLABS_ALUMNIPORTAL_FAQ_FAQ" WHERE "ID" = '${payload.payload.ID}'`
					let statement = await db.preparePromisified(query)
					let result = await db.statementExecPromisified(statement, [])
					resolve(result)
				} else {
					reject(results)
				}

			} catch (error) {
				reject(error);
			}
		});
	};

	let deletefaq = ({
		payload,
		db
	}) => {
		return new Promise(async (resolve, reject) => {
			try {
				let schema = await utils.currentSchema({
					db
				})
				let query =
					`DELETE FROM "${schema}"."SCLABS_ALUMNIPORTAL_FAQ_FAQ" WHERE ID = '${payload.payload.ID}'`
				let statement = await db.preparePromisified(query)
				let results = await db.statementExecPromisified(statement, [])
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
	let getevent = ({
		payload,
		db
	}) => {
		return new Promise(async (resolve, reject) => {
			try {
				let schema = await utils.currentSchema({
					db
				})
				// TODO: add pagination using [to, from] clauses in statement.
				let LIMIT = payload.LIMIT == undefined ? 10 : payload.LIMIT
				let offset = payload.OFFSET == undefined ? 0 : payload.OFFSET
				let query = `SELECT "ID", "TITLE", "CONTENT", "PHOTO", "DATE" FROM "${schema}"."SCLABS_ALUMNIPORTAL_EVENTS_EVENTS" ORDER BY MODIFIEDAT DESC LIMIT ${LIMIT} offset ${offset}`
				let statement = await db.preparePromisified(query)
				let results = await db.statementExecPromisified(statement, [])
				resolve(results);

			} catch (error) {
				reject(error);
			}
		});
	};
	let createevent = ({
		payload,
		db
	}) => {
		return new Promise(async (resolve, reject) => {
			try {
				let schema = await utils.currentSchema({
					db
				})
				let createdat = new Date().toISOString();
				let createdby = payload.payload.author;
				let modifiedby = "admin";
				let modifiedat = new Date().toISOString();
				let date = new Date().toISOString();
				let ID = uuid();
				if (payload.payload.ID) {
					let result = await updateevent({
						payload,
						db
					});
					resolve(result)
				} else {
					let query =
						`INSERT INTO "${schema}"."SCLABS_ALUMNIPORTAL_EVENTS_EVENTS" VALUES(
						'${createdat}',
						'${createdby}',
						'${modifiedat}',
						'${modifiedby}',
						'${ID}',
						'${escape(payload.payload.TITLE)}',
						'${escape(payload.payload.CONTENT)}',
						'${payload.payload.PHOTO}',
						'${payload.payload.DATE}')
						`

					let statement = await db.preparePromisified(query)
					let results = await db.statementExecPromisified(statement, [])
					if (results == 1) {
						data = payload.payload;
						data.ID = ID;
						resolve(data);
					} else {
						reject(results);
					}
				}
			} catch (error) {
				console.log(error)
				reject(error);
			}
		});
	};
	let updateevent = ({
		payload,
		db
	}) => {
		return new Promise(async (resolve, reject) => {
			try {
				let schema = await utils.currentSchema({
					db
				})
				let createdat = new Date().toISOString();
				let createdby = "admin";
				let modifiedby = "admin";
				let modifiedat = new Date().toISOString();
				let date = new Date().toISOString();
				let ID = uuid();
				let query =
					`UPDATE "${schema}"."SCLABS_ALUMNIPORTAL_EVENTS_EVENTS"
					SET "TITLE" = CASE
								WHEN '${escape(payload.payload.TITLE)}' != 'undefined' THEN '${escape(payload.payload.TITLE)}'
								ELSE (select "TITLE" FROM "${schema}"."SCLABS_ALUMNIPORTAL_EVENTS_EVENTS" where "ID"='${payload.payload.ID}')
								END,
					   "CONTENT" = CASE
								WHEN '${escape(payload.payload.CONTENT)}' != 'undefined' THEN '${escape(payload.payload.CONTENT)}'
								ELSE (select "CONTENT" FROM "${schema}"."SCLABS_ALUMNIPORTAL_EVENTS_EVENTS" where "ID"='${payload.payload.ID}')
								END,
						"DATE" = CASE
								WHEN '${payload.payload.DATE}' != 'undefined' THEN '${payload.payload.DATE}'
								ELSE (select "CONTENT" FROM "${schema}"."SCLABS_ALUMNIPORTAL_NEWS_NEWS" where "ID"='${payload.payload.ID}')
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

				let statement = await db.preparePromisified(query)
				let results = await db.statementExecPromisified(statement, [])
				if (results == 1) {
					let query =
						`SELECT "ID", "TITLE", "CONTENT", "PHOTO", "DATE" FROM "${schema}"."SCLABS_ALUMNIPORTAL_EVENTS_EVENTS" WHERE "ID" = '${payload.payload.ID}'`

					let statement = await db.preparePromisified(query)
					let result = await db.statementExecPromisified(statement, [])
					resolve(result)
				} else {
					reject(results)
				}

			} catch (error) {
				console.log(error)
				reject(error);
			}
		});
	};

	let deleteevent = ({
		payload,
		db
	}) => {
		return new Promise(async (resolve, reject) => {
			try {
				let schema = await utils.currentSchema({
					db
				})
				let query = `DELETE FROM "${schema}"."SCLABS_ALUMNIPORTAL_EVENTS_EVENTS"  WHERE ID = '${payload.payload.ID}'`
				let statement = await db.preparePromisified(query)
				let results = await db.statementExecPromisified(statement, [])
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