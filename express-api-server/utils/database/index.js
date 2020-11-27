module.exports = () => {
	const currentSchema = ({
		db
	}) => {
		return new Promise(async (resolve, reject) => {
			try {
				const schemaSQL = await db.preparePromisified(`SELECT SESSION_USER, CURRENT_SCHEMA FROM "DUMMY"`)
				let response = await db.statementExecPromisified(schemaSQL, [])
				const currentSchema = response[0].CURRENT_SCHEMA;
				resolve(currentSchema);
			} catch (error) {
				reject(error);
			}
		});
	};

	const getPageCount = ({
		schema,
		tablename
	}) => {
		return new Promise(async (resolve, reject) => {
			try {
				const query = `(SELECT COUNT(*) FROM "${schema}"."${tablename}")`
				const schemaSQL = await db.preparePromisified(query)
				let response = await db.statementExecPromisified(schemaSQL, [])
				resolve(response);
			} catch (error) {
				reject(error);
			}
		});
	};
	return {
		currentSchema,
		getPageCount
	};
};