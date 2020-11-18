const uuid = require("uuid");
const utils = require("../../utils/database/index.js")();
module.exports = () => {

	const getjob = ({
		payload,
		db
	}) => {
		return new Promise(async(resolve, reject) => {
			try {
				const schema = await utils.currentSchema({
					db
				});
				// TODO: add pagination using [to, from] clauses in statement.
				const limit = payload.limit == undefined ? 10 : payload.limit
				const offset = payload.offset == undefined ? 0 : payload.offset
				const query =
					`SELECT * FROM "${schema}"."SCLABS_ALUMNIPORTAL_JOB_JOB"  limit ${limit} offset ${offset}`
				console.log(query);
				const statement = await db.preparePromisified(query)
				const results = await db.statementExecPromisified(statement, [])
				resolve(results);

			} catch (error) {
				reject(error);
			}
		});
	};

	const createjob = ({
		payload,
		db
	}) => {
		return new Promise(async(resolve, reject) => {
			try {
				const schema = await utils.currentSchema({
					db
				});
				const createdat = new Date().toISOString();
				const createdby = "admin";
				const modifiedby = "admin";
				const modifiedat = new Date().toISOString();
				const date = new Date().toISOString();
				const id = uuid();
				const requisition_id = payload.payload.requisitionid;
				const posting_end_date = payload.payload.postingenddate;
				const posting_start_date = payload.payload.postingstartdate;
				const job_posting_status = payload.payload.jobpostingstatus;
				const department = payload.payload.department;
				const title = payload.payload.title;
				const jobdescription = payload.payload.jobdescription;
				const jobpostingid = payload.payload.jobpostingid;
				const boardid = payload.payload.boardid;
				const country = payload.payload.country;
				const city = payload.payload.city;
				const query =
					`INSERT INTO "${schema}"."SCLABS_ALUMNIPORTAL_JOB_JOB" VALUES(
					'${createdat}'/*CREATEDAT <TIMESTAMP>*/,
					'${createdby}'/*CREATEDBY <NVARCHAR(255)>*/,
					'${modifiedat}'/*MODIFIEDAT <TIMESTAMP>*/,
					'${modifiedby}'/*MODIFIEDBY <NVARCHAR(255)>*/,
					'${id}'/*ID <NVARCHAR(36)>*/,
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
					'${posting_end_date}'/*POSTINGENDDATE <DATE>*/
					)`
				console.log(query);
				const statement = await db.preparePromisified(query);
				const results = await db.statementExecPromisified(statement, [])
				resolve(results);
			} catch (error) {
				console.log(error);
				reject(error);
			}
		});
	};

	const updatejob = ({
		payload,
		db
	}) => {
		return new Promise(async(resolve, reject) => {
			try {

				const schema = await utils.currentSchema({
					db
				});
				const createdat = new Date().toISOString();
				const createdby = "admin";
				const modifiedby = "admin";
				const modifiedat = new Date().toISOString();
				const date = new Date().toISOString();
				const id = uuid();
				const job_details = payload.payload.job_details;
				const query =
					`UPDATE "${schema}"."SCLABS_ALUMNIPORTAL_JOB_JOB"
					SET "JOB_DETAILS" = CASE 
					WHEN '${payload.payload.job_details}' != 'undefined' THEN '${payload.payload.job_details}'
					ELSE (select "JOB_DETAILS" FROM "${schema}"."SCLABS_ALUMNIPORTAL_JOB_JOB" where "ID"='${payload.payload.id}')
					END,
					"MODIFIEDBY" = '${modifiedby}',
    				"MODIFIEDAT" = '${modifiedat}'
    				where
    				"ID" = '${payload.payload.id}'`
				console.log(query);
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
		return new Promise(async(resolve, reject) => {
			try {
				/*console.log(
					`DELETE FROM "${schema}"."SCLABS_ALUMNIPORTAL_NEWS_NEWS"  WHERE ID = '${payload.id}'`
				)*/
				const schema = await utils.currentSchema({
					db
				})
				const query = `DELETE FROM "${schema}"."SCLABS_ALUMNIPORTAL_JOB_JOB"  WHERE ID = '${payload.payload.id}'`
				console.log(query);
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
		return new Promise(async(resolve, reject) => {
			try {
				res = [];

				// console.log(payload.payload)
				for (var i = 0; i < payload.payload.length; i++) {
					// var obj = new Object();
					// obj.payload = payload.payload[i];
					// var jsonString = JSON.stringify(obj);
					// console.log(jsonString);
					const schema = await utils.currentSchema({
						db
					});
					const createdat = new Date().toISOString();
					const createdby = "admin";
					const modifiedby = "admin";
					const modifiedat = new Date().toISOString();
					const date = new Date().toISOString();
					const id = uuid();
					console.log(payload);
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
						             '${id}',
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
					console.log(result);
					res.push(result);
				}
				resolve(res);
			} catch (error) {
				console.log(error);
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