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
	return {
		currentSchema
	};
};