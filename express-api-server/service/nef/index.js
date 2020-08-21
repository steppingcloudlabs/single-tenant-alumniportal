const uuid = require("uuid");
const currentSchema = require("../../utils/database/index.js")();
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
				const schema = currentSchema(db)
					// TODO: add pagination using [to, from] clauses in statement.
				const limit = payload.limit == undefined ? 10 : payload.limit
				const offset = payload.offset == undefined ? 0 : payload.offset
				const statement = await db.preparePromisified(
					`SELECT "ID","TITLE","CONTENT","AUTHOR","TAGS","DATE","PHOTO","PHOTONAME","CREATEDAT","CREATEDBY","MODIFIEDAT","MODIFIEDBY" FROM "${schema}"."SCLABS_ALUMNIPORTAL_NEWS_NEWS" rows limit ${limit} offset ${offset}`
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
				const schema = currentSchema(db)
				const createdat = new Date().toISOString();
				const createdby = "admin";
				const modifiedby = "admin";
				const modifiedat = new Date().toISOString();
				const date = new Date().toISOString();
				const id = uuid();

				const statement = await db.preparePromisified(
					`INSERT INTO "${schema}"."SCLABS_ALUMNIPORTAL_NEWS_NEWS" VALUES(
						'${id}',
						'${payload.title}',
						'${payload.content}',
						'${payload.author}',
						'${payload.tag}',
						'${date}',
						'${payload.photo}',
						'${createdat}',
						'${createdby}',
						'${modifiedat}',
						'${modifiedby}',
						'${payload.photoname}')`
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
				const schema = currentSchema(db)
				const createdat = new Date().toISOString();
				const createdby = "admin";
				const modifiedby = "admin";
				const modifiedat = new Date().toISOString();
				const date = new Date().toISOString();
				const id = uuid();
				const statement = await db.preparePromisified(
					`UPDATE "${schema}"."SCLABS_ALUMNIPORTAL_NEWS_NEWS"
SET "TITLE" = CASE
			WHEN '${payload.title}' != 'undefined' THEN '${payload.title}'
			ELSE (select "TITLE" FROM "${schema}"."SCLABS_ALUMNIPORTAL_NEWS_NEWS" where "ID"='${payload.id}')
			END,
   "CONTENT" = CASE
			WHEN '${payload.content}' != 'undefined' THEN '${payload.content}'
			ELSE (select "CONTENT" FROM "${schema}"."SCLABS_ALUMNIPORTAL_NEWS_NEWS" where "ID"='${payload.id}')
			END,
	"AUTHOR" = case
			WHEN '${payload.author}' != 'undefined' THEN '${payload.author}'
			ELSE (select "AUTHOR" FROM "${schema}"."SCLABS_ALUMNIPORTAL_NEWS_NEWS" where "ID"='${payload.id}')
			END,
	"TAGS" = case
			WHEN '${payload.tag}' != 'undefined' THEN '${payload.tag}'
			ELSE (select "TAGS" FROM "${schema}"."SCLABS_ALUMNIPORTAL_NEWS_NEWS" where "ID"='${payload.id}')
			END,
	"DATE" = '${date}',
	"PHOTO" = case
			WHEN '${payload.photo}' != 'undefined' THEN '${payload.photo}'
			ELSE (select "PHOTO" FROM "${schema}"."SCLABS_ALUMNIPORTAL_NEWS_NEWS" where "ID"='${payload.id}')
			end,
	"PHOTONAME" = case
			WHEN '${payload.photoname}' != 'undefined' THEN '${payload.photoname}'
			ELSE (select "PHOTONAME" FROM "${schema}"."SCLABS_ALUMNIPORTAL_NEWS_NEWS" where "ID"='${payload.id}')
			end,
	"CREATEDAT" = '${createdat}', 
	"CREATEDBY" = '${createdby}',
	"MODIFIEDBY" = '${modifiedby}',
    "MODIFIEDAT" = '${modifiedat}'
where
"ID" = '${payload.id}'`
				)
				const results = await db.statementExecPromisified(statement, [])
				resolve(results)

			} catch (error) {
				reject(error);
			}
		});
	};

	const deletenews = ({
		payload,
		db
	}) => {
		return new Promise(async(resolve, reject) => {
			try {

				/*console.log(
					`DELETE FROM "${schema}"."SCLABS_ALUMNIPORTAL_NEWS_NEWS"  WHERE ID = '${payload.id}'`
				)*/
				const schema = currentSchema(db)
				const statement = await db.preparePromisified(
					`DELETE FROM "${schema}"."SCLABS_ALUMNIPORTAL_NEWS_NEWS"  WHERE ID = '${payload.id}'`
				)
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
		return new Promise(async(resolve, reject) => {
			try {
				const schema = currentSchema(db)
					// TODO: add pagination using [to, from] clauses in statement.
				const limit = payload.limit == undefined ? 10 : payload.limit
				const offset = payload.offset == undefined ? 0 : payload.offset
				const schema = currentSchema(db)
				console.log(schema)
				const statement = await db.preparePromisified(
					`SELECT "ID","QUESTION","ANSWER" FROM "${schema}"."SCLABS_ALUMNIPORTAL_FAQ_FAQ" rows limit ${limit} offset ${offset}`
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
				const schema = currentSchema(db)
				const createdat = new Date().toISOString().split('T')[0];
				const createdby = "admin";
				const modifiedby = "admin";
				const modifiedat = new Date().toISOString().split('T')[0];
				const id = uuid();
				console.log(schema);
				const statement = await db.preparePromisified(
					`INSERT INTO "${schema}"."SCLABS_ALUMNIPORTAL_FAQ_FAQ" VALUES('${createdat}', '${createdby}','${modifiedat}','${modifiedby}', '${id}', '${payload.question}', '${payload.answer}')`
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
				const schema = currentSchema(db)
				const modifiedby = "admin";
				const modifiedat = new Date().toISOString();
				const statement = await db.preparePromisified(
					`UPDATE "${schema}"."SCLABS_ALUMNIPORTAL_FAQ_FAQ"
					SET "QUESTION" = CASE 
					WHEN '${payload.question}' != 'undefined' THEN '${payload.question}'
					ELSE (select "TITLE" FROM "${schema}"."SCLABS_ALUMNIPORTAL_NEWS_NEWS" where "ID"='${payload.id}')
					END,
					"ANSWER" = CASE
					WHEN '${payload.answer}' != 'undefined' THEN '${payload.answer}'
					ELSE (select "CONTENT" FROM "${schame}"."SCLABS_ALUMNIPORTAL_NEWS_NEWS" where "ID"='${payload.id}')
					end,
					"MODIFIEDBY" = '${modifiedby}',
    				"MODIFIEDAT" = '${modifiedat}'
    				where
    				"ID" = '${payload.id}'`
				)
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
		return new Promise(async(resolve, reject) => {
			try {
				const schema = currentSchema(db)
				const statement = await db.preparePromisified(
					`DELETE FROM "${schema}"."SCLABS_ALUMNIPORTAL_FAQ_FAQ" WHERE ID = '${payload.id}'`
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
	const getevent = ({
		payload,
		db
	}) => {
		return new Promise(async(resolve, reject) => {
			try {
				const schema = currentSchema(db)

				// TODO: add pagination using [to, from] clauses in statement.
				const limit = payload.limit == undefined ? 10 : payload.limit
				const offset = payload.offset == undefined ? 0 : payload.offset
				const statement = await db.preparePromisified(
					`SELECT "ID","TITLE","CONTENT","AUTHOR","TAGS","DATE","PHOTO","PHOTO","CREATEDAT","CREATEDBY","MODIFIEDAT","MODIFIEDBY" FROM "${schema}"."SCLABS_ALUMNIPORTAL_EVENTS_EVENTS" rows limit ${limit} offset ${offset}`
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
		return new Promise(async(resolve, reject) => {
			try {
				const schema = currentSchema(db)
				const createdat = new Date().toISOString();
				const createdby = "admin";
				const modifiedby = "admin";
				const modifiedat = new Date().toISOString();
				const date = new Date().toISOString();
				const id = uuid();

				const statement = await db.preparePromisified(
					`INSERT INTO "${schema}"."SCLABS_ALUMNIPORTAL_EVENTS_EVENTS" VALUES(
						'${id}',
						'${payload.title}',
						'${payload.content}',
						'${payload.author}',
						'${payload.tag}',
						'${date}',
						'${payload.photo}',
						'${createdat}',
						'${createdby}',
						'${modifiedat}',
						'${modifiedby}')`
				)
				const results = await db.statementExecPromisified(statement, [])

				resolve(results);
			} catch (error) {
				reject(error);
			}
		});
	};
	const updateevent = ({
		payload,
		db
	}) => {
		return new Promise(async(resolve, reject) => {
			try {
				const schema = currentSchema(db)
				const createdat = new Date().toISOString();
				const createdby = "admin";
				const modifiedby = "admin";
				const modifiedat = new Date().toISOString();
				const date = new Date().toISOString();
				const id = uuid();
				const statement = await db.preparePromisified(
					`UPDATE "${schema} "."SCLABS_ALUMNIPORTAL_EVENTS_EVENTS"
				SET "TITLE" = CASE
							WHEN '${payload.title}' != 'undefined' THEN '${payload.title}'
							ELSE (select "TITLE" FROM "${schema}"."SCLABS_ALUMNIPORTAL_EVENTS_EVENTS" where "ID"='${payload.id}')
							END,
				   "CONTENT" = CASE
							WHEN '${payload.content}' != 'undefined' THEN '${payload.content}'
							ELSE (select "CONTENT" FROM "${schema}"."SCLABS_ALUMNIPORTAL_EVENTS_EVENTS" where "ID"='${payload.id}')
							END,
					"AUTHOR" = case
							WHEN '${payload.author}' != 'undefined' THEN '${payload.author}'
							ELSE (select "AUTHOR" FROM "${schema}"."SCLABS_ALUMNIPORTAL_EVENTS_EVENTS" where "ID"='${payload.id}')
							END,
					"TAGS" = case
							WHEN '${payload.tag}' != 'undefined' THEN '${payload.tag}'
							ELSE (select "TAGS" FROM "${schema}"."SCLABS_ALUMNIPORTAL_EVENTS_EVENTS" where "ID"='${payload.id}')
							END,
					"DATE" = '${date}',
					"PHOTO" = case
							WHEN '${payload.photo}' != 'undefined' THEN '${payload.photo}'
							ELSE (select "PHOTO" FROM "${schema}"."SCLABS_ALUMNIPORTAL_EVENTS_EVENTS" where "ID"='${payload.id}')
							end,
					
					"CREATEDAT" = '${createdat}', 
					"CREATEDBY" = '${createdby}',
					"MODIFIEDBY" = '${modifiedby}',
				    "MODIFIEDAT" = '${modifiedat}'
				where
				"ID" = '${payload.id}'`
				)

				const results = await db.statementExecPromisified(statement, [])
				resolve(results)

			} catch (error) {
				reject(error);
			}
		});
	};

	const deleteevent = ({
		payload,
		db
	}) => {
		return new Promise(async(resolve, reject) => {
			try {

				/*console.log(
					`DELETE FROM "${schema}"."SCLABS_ALUMNIPORTAL_NEWS_NEWS"  WHERE ID = '${payload.id}'`
				)*/
				const schema = currentSchema(db)
				const statement = await db.preparePromisified(
					`DELETE FROM "${schema}"."SCLABS_ALUMNIPORTAL_EVENTS_EVENTS"  WHERE ID = '${payload.id}'`
				)
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