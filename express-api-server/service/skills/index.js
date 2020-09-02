const uuid = require("uuid");
const utils = require("../../utils/database/index.js")();
module.exports = () => {

	const getskills = ({
		payload,
		db
	}) => {
		return new Promise(async(resolve, reject) => {
			try {
				const schema = await utils.currentSchema({db})
					// TODO: add pagination using [to, from] clauses in statement.
				const limit = payload.limit == undefined ? 10 : payload.limit
				const offset = payload.offset == undefined ? 0 : payload.offset
				console.log("here")
				const statement = await db.preparePromisified(
					`SELECT "CREATEDAT", "CREATEDBY", "MODIFIEDAT", "MODIFIEDBY", "ID", "SKILL" FROM "${schema}"."SCLABS_ALUMNIPORTAL_SKILLS_SKILLS" rows limit ${limit} offset ${offset}`
				)
				const results = await db.statementExecPromisified(statement, [])
				resolve(results);

			} catch (error) {
				reject(error);
			}
		});
	};

	const createskills = ({
		payload,
		db
	}) => {
		return new Promise(async(resolve, reject) => {
		
			try {
				//const {createdat,createdby,modifiedat,modifiedby,id,skill}=payload.payload;
				const schema = await utils.currentSchema({db});
				console.log(schema)
				const createdat = new Date().toISOString();
				const createdby = "admin";
				const modifiedby = "admin";
				const modifiedat = new Date().toISOString();
				const id = uuid();
				const skill = payload.payload.skill;
				const query = `INSERT INTO "${schema}"."SCLABS_ALUMNIPORTAL_SKILLS_SKILLS" VALUES(	
				        '${createdat}',
						'${createdby}',
						'${modifiedat}',
						'${modifiedby}',
						'${id}',
						'${skill}')`
			    const statement = await db.preparePromisified(query)
			    const results = await db.statementExecPromisified(statement, [])
                resolve(results);
			} catch (error) {
				reject(error);
			}
		});
	};

	const updateskills= ({
		payload,
		db
	}) => {
		return new Promise(async(resolve, reject) => {
		    try {
		    	console.log("before statement");
		    	//const {createdat,createdby,modifiedat,modifiedby,id,skill}=payload.payload;
				const schema = await utils.currentSchema({db});
				const createdat = new Date().toISOString();
				const createdby = "admin";
				const modifiedby = "admin";
				const modifiedat = new Date().toISOString();
				const id = uuid();
				const skill = payload.payload.skill;
				const statement = await db.preparePromisified(
					`UPDATE "${schema}"."SCLABS_ALUMNIPORTAL_SKILLS_SKILLS"
					SET "SKILL" = CASE 
					WHEN '${payload.payload.skill}' != 'undefined' THEN '${payload.payload.skill}'
					ELSE (select "SKILL" FROM "${schema}"."SCLABS_ALUMNIPORTAL_SKILLS_SKILLS" where "ID"='${payload.payload.id}')
					END,
					"MODIFIEDBY" = '${modifiedby}',
    				"MODIFIEDAT" = '${modifiedat}'
    				where
    				"ID" = '${payload.payload.id}'`
				)
				console.log(`UPDATE "${schema}"."SCLABS_ALUMNIPORTAL_SKILLS_SKILLS"
					SET "SKILL" = CASE 
					WHEN '${payload.payload.skill}' != 'undefined' THEN '${payload.payload.skill}'
					ELSE (select "SKILL" FROM "${schema}"."SCLABS_ALUMNIPORTAL_SKILLS_SKILLS" where "ID"='${payload.payload.id}')
					END,
					"MODIFIEDBY" = '${modifiedby}',
    				"MODIFIEDAT" = '${modifiedat}'
    				where
    				"ID" = '${payload.payload.id}'`)
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
		return new Promise(async(resolve, reject) => {
			try {
				/*console.log(
					`DELETE FROM "${schema}"."SCLABS_ALUMNIPORTAL_NEWS_NEWS"  WHERE ID = '${payload.id}'`
				)*/
				const schema = await utils.currentSchema({db})
				const query = `DELETE FROM "${schema}"."SCLABS_ALUMNIPORTAL_SKILLS_SKILLS"  WHERE ID = '${payload.payload.id}'`
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