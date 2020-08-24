module.exports = () => {
	/*
	SERVICE FUNCTIONS FOR NEWS 
	
	REPONSIBILITY: HAMZA
	*/
	const getprofile = ({
		payload,
		db
	}) => {
		return new Promise(async(resolve, reject) => {
			try {
				console.log("hello")
				
				// const schema = currentSchema(db)
				// 	// TODO: add pagination using [to, from] clauses in statement.
				// const limit = payload.limit == undefined ? 10 : payload.limit
				// const offset = payload.offset == undefined ? 0 : payload.offset
				// const statement = await db.preparePromisified(
				// 	`SELECT "ID","TITLE","CONTENT","AUTHOR","TAGS","DATE","PHOTO","PHOTONAME","CREATEDAT","CREATEDBY","MODIFIEDAT","MODIFIEDBY" FROM "${schema}"."SCLABS_ALUMNIPORTAL_NEWS_NEWS" rows limit ${limit} offset ${offset}`
				// )
				 const results = await db.statementExecPromisified(statement, [])
				resolve(results);

			} catch (error) {
				reject(error);
			}
		});
	};
		return {
		getprofile,
	

	};
}