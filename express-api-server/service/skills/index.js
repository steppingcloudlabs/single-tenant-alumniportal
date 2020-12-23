const uuid = require("uuid");
const utils = require("../../utils/database/index.js")();
module.exports = () => {

	const getskills = ({
		payload,
		db
	}) => {
		return new Promise(async (resolve, reject) => {
			try {
				const schema = await utils.currentSchema({
					db
				})
				// TODO: add pagination using [to, from] clauses in statement.
				let skill = payload.SKILL;
				let userid = payload.USERID;
				const LIMIT = payload.LIMIT == undefined ? 10 : payload.LIMIT
				const offset = payload.OFFSET == undefined ? 0 : payload.OFFSET
				 
					const query =
						`SELECT "ID", "SKILL", "USERID" FROM "${schema}"."SCLABS_ALUMNIPORTAL_SKILLS_SKILLS" WHERE USERID = '${userid}'`
					const statement = await db.preparePromisified(query)
					const results = await db.statementExecPromisified(statement, [])
					resolve(results);
				
				// } else {
				// 	const query =
				// 		`SELECT "ID", "SKILL","USERID" FROM "${schema}"."SCLABS_ALUMNIPORTAL_SKILLS_SKILLS" rows LIMIT ${LIMIT} offset ${offset}`
				// 	const statement = await db.preparePromisified(query)
				// 	const results = await db.statementExecPromisified(statement, [])
				// 	resolve(results);

				// }
			} catch (error) {
				reject(error);
			}
		});
	};

	const createskills = ({
		payload,
		db
	}) => {
		return new Promise(async (resolve, reject) => {

			try {
				//const {createdat,createdby,modifiedat,modifiedby,id,skill}=payload.payload;
				const schema = await utils.currentSchema({
					db
				});
				const createdat = new Date().toISOString();
				const createdby = "admin";
				const modifiedby = "admin";
				const modifiedat = new Date().toISOString();
				const ID = uuid();
				const skill = payload.payload.SKILL;
				const userid = payload.payload.USERID;
				const query =
					`INSERT INTO "${schema}"."SCLABS_ALUMNIPORTAL_SKILLS_SKILLS" VALUES(	
				        '${createdat}',
						'${createdby}',
						'${modifiedat}',
						'${modifiedby}',
						'${ID}',
						'${userid}',
						'${skill}')`
				const statement = await db.preparePromisified(query)
				const results = await db.statementExecPromisified(statement, [])
				resolve(results);
			} catch (error) {
				reject(error);
			}
		});
	};

	const updateskills = ({
		payload,
		db
	}) => {
		return new Promise(async (resolve, reject) => {
			try {
				console.log("before statement");
				//const {createdat,createdby,modifiedat,modifiedby,id,skill}=payload.payload;
				const schema = await utils.currentSchema({
					db
				});
				const createdat = new Date().toISOString();
				const createdby = "admin";
				const modifiedby = "admin";
				const modifiedat = new Date().toISOString();
				const ID = uuid();
				const skill = payload.payload.SKILL;
				const query =
					`UPDATE "${schema}"."SCLABS_ALUMNIPORTAL_SKILLS_SKILLS"
					SET "SKILL" = CASE 
					WHEN '${payload.payload.SKILL}' != 'undefined' THEN '${payload.payload.SKILL}'
					ELSE (select "SKILL" FROM "${schema}"."SCLABS_ALUMNIPORTAL_SKILLS_SKILLS" where "ID"='${payload.payload.ID}')
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

	const deleteskills = ({
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
				const query = `DELETE FROM "${schema}"."SCLABS_ALUMNIPORTAL_SKILLS_SKILLS"  WHERE ID = '${payload.payload.ID}'`
				const statement = await db.preparePromisified(query);
				const results = await db.statementExecPromisified(statement, [])
				resolve(results);
			} catch (error) {
				reject(error);
			}
		});
	};

	return {
		createskills,
		updateskills,
		getskills,
		deleteskills,
	};

};