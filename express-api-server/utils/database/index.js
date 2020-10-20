module.exports = () => {
	const currentSchema = ({
		db
	}) => {
		return new Promise(async(resolve, reject) => {
			try {
				const schemaSQL = await db.preparePromisified(`SELECT SESSION_USER, CURRENT_SCHEMA FROM "DUMMY"`)
				const response = await db.statementExecPromisified(schemaSQL, [])
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