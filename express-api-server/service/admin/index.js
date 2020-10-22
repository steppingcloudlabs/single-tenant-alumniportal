const uuid = require("uuid");
const utils = require("../../utils/database/index.js")();
module.exports = () => {
	const getuser = ({
		payload,
		db
	}) => {
		return new Promise(async(resolve, reject) => {
			try {
			
				const schema = await utils.currentSchema({db})
				// TODO: add pagination using [to, from] clauses in statement.
				const limit = payload.limit == undefined ? 10 : payload.limit
				const offset = payload.offset == undefined ? 0 : payload.offset
				const query =
					`SELECT "ID","USERTYPE", "SALUTATION","FIRSTNAME","MIDDLENAME","LAST_NAME","EMAIL" FROM "${schema}"."SCLABS_ALUMNIPORTAL_PERSONALINFORMATION_ADMIN_HR_PERSONALINFORMATION" rows limit ${limit} offset ${offset}`
				const statement = await db.preparePromisified(query)
				const results = await db.statementExecPromisified(statement, [])
				resolve(results);
			}
			 catch (error) {
				reject(error);
			}
		});
	};

	const createuser = ({
		payload,
		db
	}) => {
		return new Promise(async(resolve, reject) => {
			try {
				const schema = await utils.currentSchema({db});
				const createdat = new Date().toISOString();
				const createdby = "admin";
				const modifiedby = "admin";
				const modifiedat = new Date().toISOString();
				const date = new Date().toISOString();
				const id = uuid();
				const usertype = payload.usertype;
				const salutation = payload.salutation;
				const firstname = payload.firstname;
				const middlename = payload.middlename;
				const lastname = payload.last_name;
				const email = payload.email;
				if(usertype == "admin"||usertype =="hr")
				{
				const query =
					`INSERT INTO "${schema}"."SCLABS_ALUMNIPORTAL_PERSONALINFORMATION_ADMIN_HR_PERSONALINFORMATION" VALUES(	
				        '${createdat}',
						'${createdby}',
						'${modifiedat}',
						'${modifiedby}',
						'${id}',
						'${usertype}',
						'${salutation}',
						'${firstname}',
						'${middlename}',
						'${lastname}',
						'${email}')`
				const statement = await db.preparePromisified(query)
				const results = await db.statementExecPromisified(statement, [])
				resolve(results);
				}
				else{
					resolve("error in usertype")
				}
			} catch (error) {
				reject(error);
			}
		});
	};

	const updateuser = ({
		payload,
		db
	}) => {
		return new Promise(async(resolve, reject) => {
			try {
				const schema = await utils.currentSchema({db})
				const modifiedby = "admin";
				const modifiedat = new Date().toISOString();
				const query =
					`UPDATE "${schema}"."SCLABS_ALUMNIPORTAL_PERSONALINFORMATION_ADMIN_HR_PERSONALINFORMATION"
					SET "EMAIL" = CASE
								WHEN '${payload.email}' != 'undefined' THEN '${payload.email}'
								ELSE (select "EMAIL" FROM "${schema}"."SCLABS_ALUMNIPORTAL_PERSONALINFORMATION_ADMIN_HR_PERSONALINFORMATION" where "ID"='${payload.id}')
								END,
					"MODIFIEDBY" = '${modifiedby}',
    				"MODIFIEDAT" = '${modifiedat}'
    				where
    				"ID" = '${payload.id}'`
			const statement = await db.preparePromisified(query);
			const results = await db.statementExecPromisified(statement, [])
			resolve(results);

			} catch (error) {
				reject(error);
			}
		});
	};

	const deleteuser = ({
		payload,
		db
	}) => {
		return new Promise(async(resolve, reject) => {
			try {
				const schema = await utils.currentSchema({db})
				const query = `DELETE FROM "${schema}"."SCLABS_ALUMNIPORTAL_PERSONALINFORMATION_ADMIN_HR_PERSONALINFORMATION"  WHERE ID = '${payload.id}'`
				const statement = await db.preparePromisified(query);
				const results = await db.statementExecPromisified(statement, [])
				resolve(results);
			} catch (error) {
				reject(error);
			}
		});
	};

	return {
		createuser,
		updateuser,
		getuser,
		deleteuser,
	};

};