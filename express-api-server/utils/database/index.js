module.exports = () => {
	// Helper functions which get the currentSchema of the tenant
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

	// Get the total pagecount of a table.

	const getPageCount = ({
		schema,
		tablename,
		db
	}) => {
		return new Promise(async (resolve, reject) => {
			try {
				const query = `SELECT COUNT(*) as TOTALROWS FROM "${schema}"."${tablename}"`
				const schemaSQL = await db.preparePromisified(query)
				let response = await db.statementExecPromisified(schemaSQL, [])
				resolve(response);
			} catch (error) {
				reject(error);
			}
		});
	};

	// const getNewsCount = ({
	// 	payload,
	// 	db
	// }) => {
	// 	return new Promise(async (resolve, reject) => {
	// 		try {
	// 			const schema = await utils.currentSchema({
	// 				db
	// 			})
	// 			let query= `SELECT COUNT(*) FROM "${schema}"."SCLABS_ALUMNIPORTAL_NEWS_NEWS" AS A1 WHERE CONTAINS ((A1."TITLE"),'${payload.QUERY}', fuzzy(0.1))`
	// 			const schemaSQL = await db.preparePromisified(query)
	// 			let response = await db.statementExecPromisified(schemaSQL, [])
	// 			resolve(response);
	// 		} catch (error) {
	// 			reject(error);
	// 		}
	// 	});
	// };
	// const getEventCount = ({
	// 	payload,
	// 	db
	// }) => {
	// 	return new Promise(async (resolve, reject) => {
	// 		try {
	// 			const schema = await utils.currentSchema({
	// 				db
	// 			})
	// 			let query= `SELECT COUNT(*) FROM "${schema}"."SCLABS_ALUMNIPORTAL_EVENTS_EVENTS" AS A1 WHERE CONTAINS ((A1."TITLE"),'${payload.QUERY}', fuzzy(0.1))`
	// 			const schemaSQL = await db.preparePromisified(query)
	// 			let response = await db.statementExecPromisified(schemaSQL, [])
	// 			resolve(response);
	// 		} catch (error) {
	// 			reject(error);
	// 		}
	// 	});
	// };
	return {
		currentSchema,
		getPageCount
	};
};