const uuid = require("uuid");
const utils = require("../../utils/database/index.js")();
const undoEscape = require("../../middleware/unescape/index")
const calendar = require('ical-generator')();
const moment = require('moment')


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
				resolve(undoEscape(results));
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
						'${escape(payload.payload.TITLE)}',
						'${escape(payload.payload.CONTENT)}',
						'${payload.payload.PHOTO}',
						'${payload.payload.DATE}'
						)`
					let statement = await db.preparePromisified(query)
					let results = await db.statementExecPromisified(statement, [])
					if (results == 1) {
						data = payload.payload;
						data.ID = ID;
						console.log(data)
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

				resolve(undoEscape(results));

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
					console.log(ID)
					let query =
						`INSERT INTO "${schema}"."SCLABS_ALUMNIPORTAL_FAQ_FAQ" VALUES('${createdat}', '${createdby}','${modifiedat}','${modifiedby}', '${ID}', '${escape(payload.payload.QUESTION)}', '${escape(payload.payload.ANSWER)}')`
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
				         WHEN '${payload.payload.ANSWER}' != 'undefined' THEN '${escape(payload.payload.ANSWER)}'
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
				resolve(undoEscape(results));

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
	let enrollevent = ({ payload, db }) => {
		return new Promise(async (resolve, reject) => {
			try {
				let schema = await utils.currentSchema({ db })
				let id = uuid()
				let userid = payload.payload.USERID;
				let eventid = payload.payload.EVENTID;
				let createdat = new Date().toISOString();
				let createdby = "User";
				let modifiedat = new Date().toISOString();
				let modifiedby = "admin";
				let userstatus = payload.payload.USERSTATUS;
				let query = `SELECT "USERID" FROM "${schema}"."SCLABS_ALUMNIPORTAL_EVENTS_RSVP" WHERE USERID = '${userid}' AND EVENTID = '${eventid}'`
				let statement = await db.preparePromisified(query)
				let result = await db.statementExecPromisified(statement, [])
	
				if (result.length == 1) {

					resolve("UserAlreadyEnrolled");
				}
				else {
					// calendar.createEvent({
					// 	start: moment(),
					// 	end: moment().add(1, 'hour'),
					// 	summary: 'Example Event',
					// 	description: 'It works ;)',
					// 	location: 'my room',
					// 	url: 'http://sebbo.net/'
					// });
					// var path = __dirname + '/icsfile/'+'akcjmak'+ '.ics';
					//  calendar.saveSync(path);
					// console.log(path)

					let query =
						`INSERT INTO "${schema}"."SCLABS_ALUMNIPORTAL_EVENTS_RSVP" VALUES(
						'${createdat}',
						'${createdby}',
						'${modifiedat}',
						'${modifiedby}',
						'${id}',
						'${eventid}',
						'${userid}',
						'${userstatus}')
						`
					
					let statement = await db.preparePromisified(query)
					let result = await db.statementExecPromisified(statement, [])
					if(result==1){
						
						resolve(result)
					}
					
				}

			} catch (error) {
				reject(error);
			}

		});
	};
	let viewenrollevent = ({
		payload,
		db
	}) => {
		return new Promise(async (resolve, reject) => {
			try {
				let schema = await utils.currentSchema({ db })
				let LIMIT = payload.LIMIT == undefined ? 10 : payload.LIMIT
				let offset = payload.OFFSET == undefined ? 0 : payload.OFFSET

				let query =
					`SELECT "EVENTID",COUNT(*) AS ENROLL FROM "${schema}"."SCLABS_ALUMNIPORTAL_EVENTS_RSVP" GROUP BY EVENTID LIMIT ${LIMIT} offset ${offset}`
				
					let statement = await db.preparePromisified(query)
				let results = await db.statementExecPromisified(statement, [])

				resolve(results);

			} catch (error) {
				reject(error);
			}
		});
	};
	let unenrollevent = ({
		payload,
		db
	}) => {
		return new Promise(async (resolve, reject) => {
			try {
				let schema = await utils.currentSchema({
					db
				})
				let query = `DELETE FROM "${schema}"."SCLABS_ALUMNIPORTAL_EVENTS_RSVP"  WHERE EVENTID = '${payload.payload.EVENTID}' AND USERID = '${payload.payload.USERID}'  `
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
		deleteevent,
		enrollevent,
		viewenrollevent,
		unenrollevent

	};

};