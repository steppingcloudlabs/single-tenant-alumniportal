const uuid = require("uuid");
const utils = require("../../utils/database/index.js")();
const undoEscape = require("../../middleware/unescape/index")
module.exports = () => {

	const getjob = ({
		payload,
		db
	}) => {
		return new Promise(async (resolve, reject) => {
			try {
				const schema = await utils.currentSchema({
					db
				});
				// TODO: add pagination using [to, from] clauses in statement.
				const LIMIT = payload.LIMIT == undefined ? 10 : payload.LIMIT
				const offset = payload.OFFSET == undefined ? 0 : payload.OFFSET
				const query =
					`SELECT * FROM "${schema}"."SCLABS_ALUMNIPORTAL_JOB_JOB" WHERE BOARDID = '_external'  LIMIT ${LIMIT} offset ${offset}`

				const statement = await db.preparePromisified(query)
				let results = await db.statementExecPromisified(statement, [])
				for (var i = 0; i < results.length; i++) {
					try {
						// results[i].CONTENT = unescape(results[i].CONTENT).replace("\n", "\n")
						// results[i].TITLE = unescape(results[i].TITLE).replace("\n", "\n")
						results[i] = JSON.parse(unescape(JSON.stringify(results[i])))
					} catch (error) {
						console.log(error);
					}

				}
				resolve(results);

			} catch (error) {
				reject(error);
			}
		});
	};

	let createjob = ({
		payload,
		db
	}) => {
		return new Promise(async (resolve, reject) => {
			try {
				const schema = await utils.currentSchema({
					db
				});
				const createdat = new Date().toISOString();
				const createdby = "admin";
				const modifiedby = "admin";
				const modifiedat = new Date().toISOString();
				const date = new Date().toISOString();
				const ID = uuid();
				// payload = escape(payload);
				const requisition_id = payload.payload.REQUISITIONID;
				const posting_end_date = new Date(payload.payload.POSTINGENDDATE).getTime().toString() == "NaN" ? payload.payload.POSTINGENDDATE : new Date(payload.payload.POSTINGENDDATE).getTime();
				const posting_start_date = new Date(payload.payload.POSTINGSTARTDATE).getTime().toString() == "NaN" ? payload.payload.POSTINGSTARTDATE : new Date(payload.payload.POSTINGSTARTDATE).getTime();
				const job_posting_status = new Date(payload.payload.JOBPOSTINGSTATUS).getTime().toString() == "NaN" ? payload.payload.JOBPOSTINGSTATUS : new Date(payload.payload.JOBPOSTINGSTATUS).getTime();
				const department = payload.payload.DEPARTMENT;
				const title = escape(payload.payload.TITLE);
				const jobdescription = escape(payload.payload.JOBDESCRIPTION);
				const jobpostingid = payload.payload.JOBPOSTINGID;
				const boardid = payload.payload.BOARDID;
				const country = payload.payload.COUNTRY;
				const city = payload.payload.CITY;
				const link = payload.payload.LINK;
				const query =
					`INSERT INTO "${schema}"."SCLABS_ALUMNIPORTAL_JOB_JOB" VALUES(
					'${createdat}'/*CREATEDAT <TIMESTAMP>*/,
					'${createdby}'/*CREATEDBY <NVARCHAR(255)>*/,
					'${modifiedat}'/*MODIFIEDAT <TIMESTAMP>*/,
					'${modifiedby}'/*MODIFIEDBY <NVARCHAR(255)>*/,
					'${ID}'/*ID <NVARCHAR(36)>*/,
					'${boardid}'/*BOARDID <NVARCHAR(5000)>*/,
					'${country}'/*COUNTRY <NVARCHAR(5000)>*/,
					'${department}'/*DEPARTMENT <NVARCHAR(5000)>*/,
					'${jobdescription}'/*JOBDESCRIPTION <NVARCHAR(5000)>*/,
					'${jobpostingid}'/*JOBPOSTINGID <NVARCHAR(5000)>*/,
					'${requisition_id}'/*JOBREQID <NVARCHAR(5000)>*/,
					'${title}'/*JOBTITLE <NVARCHAR(5000)>*/,
					'${city}'/*LOCATION <NVARCHAR(5000)>*/,
					'${job_posting_status}'/*POSTINGSTATUS <NVARCHAR(5000)>*/,
					'${posting_start_date}'/*POSTINGSTARTDATE <DATE>*/,
					'${posting_end_date}'/*POSTINGENDDATE <DATE>*/,
					'${link}'
					)`

				const statement = await db.preparePromisified(query);
				const results = await db.statementExecPromisified(statement, [])
				resolve(results);
			} catch (error) {
				reject(error);
			}
		});
	};

	const updatejob = ({
		payload,
		db
	}) => {
		return new Promise(async (resolve, reject) => {
			try {

				const schema = await utils.currentSchema({
					db
				});
				const createdat = new Date().toISOString();
				const createdby = "admin";
				const modifiedby = "admin";
				const modifiedat = new Date().toISOString();
				const date = new Date().toISOString();
				const ID = uuid();
				const job_details = payload.payload.JOB_DETAILS;
				const query =
					`UPDATE "${schema}"."SCLABS_ALUMNIPORTAL_JOB_JOB"
					SET "JOB_DETAILS" = CASE 
					WHEN '${payload.payload.JOB_DETAILS}' != 'undefined'
					THEN '${payload.payload.JOB_DETAILS}'
					ELSE (select "JOB_DETAILS" FROM "${schema}"."SCLABS_ALUMNIPORTAL_JOB_JOB" where "ID"='${payload.payload.ID}')
					END,
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

	const deletejob = ({
		payload,
		db
	}) => {
		return new Promise(async (resolve, reject) => {
			try {
				const schema = await utils.currentSchema({
					db
				})
				const query = `DELETE FROM "${schema}"."SCLABS_ALUMNIPORTAL_JOB_JOB"  WHERE ID = '${payload.payload.ID}'`

				const statement = await db.preparePromisified(query);
				const results = await db.statementExecPromisified(statement, [])
				resolve(results);
			} catch (error) {
				reject(error);
			}
		});
	};

	const createbulkjob = ({
		payload,
		db
	}) => {
		return new Promise(async (resolve, reject) => {
			try {
				res = [];
				for (var i = 0; i < payload.payload.length; i++) {

					const schema = await utils.currentSchema({
						db
					});
					const createdat = new Date().toISOString();
					const createdby = "admin";
					const modifiedby = "admin";
					const modifiedat = new Date().toISOString();
					const date = new Date().toISOString();
					const ID = uuid();

					const requisition_id = payload.payload[i].requisition_id;
					const posting_end_date = payload.payload[i].posting_end_date;
					const posting_start_date = payload.payload[i].posting_start_date;
					const job_posting_status = payload.payload[i].job_posting_status;
					const title = payload.payload[i].title;
					const job_role = payload.payload[i].job_role;
					const job_details = payload.payload[i].job_details;
					const country_of_residence = payload.payload[i].country_of_residence;
					const city = payload.payload[i].city;
					const query =
						`INSERT INTO "${schema}"."SCLABS_ALUMNIPORTAL_JOB_JOB" VALUES(
						             '${createdat}',
						             '${createdby}',
						             '${modifiedat}',
						             '${modifiedby}',
						             '${ID}',
						             '${requisition_id}',
						             '${posting_end_date}',
						             '${posting_start_date}',
						             '${job_posting_status}',
						             '${title}',
						             '${job_role}',
						             '${job_details}',
						             '${country_of_residence}',
						             '${city}')`
					const statement = await db.preparePromisified(query);
					const result = await db.statementExecPromisified(statement, [])

					res.push(result);
				}
				resolve(res);
			} catch (error) {
				reject(error);

			}
		});
	};

	return {
		createjob,
		updatejob,
		getjob,
		deletejob,
		createbulkjob
	};

};