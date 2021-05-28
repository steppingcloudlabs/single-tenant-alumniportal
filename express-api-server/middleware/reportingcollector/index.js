const utils = require("../../utils/database/index.js")();
const dbClass = require("sap-hdbext-promisfied");
const uuid = require("uuid");
module.exports = () => {
	function logincount(req, res, next) {
		return new Promise(async(resolve, reject) =>{
            try {
				let db = new dbClass(req.db);
                const schema = await utils.currentSchema({
                    db
                });

				let createdat = new Date().getTime();
				let id = uuid();
				let logincount = 1;
                
                let query = `INSERT INTO "${schema}"."SCLABS_ALUMNIPORTAL_REPORTING" VALUES (
					'${createdat}'/*CREATEDAT <NVARCHAR(100)>*/,
					'${id}'/*ID <NVARCHAR(36)>*/,
					'${logincount}'/*LOGINCOUNT <NVARCHAR(5000)>*/,
					'0'/*SIGNUPCOUNT <NVARCHAR(5000)>*/,
					'0'/*DOCUMENTDOWNLOADCOUNT <NVARCHAR(5000)>*/,
					'0'/*DOCUMENTUPLOADCOUNT <NVARCHAR(5000)>*/,
					'0'/*TICKETOPENCOUNT <NVARCHAR(5000)>*/,
					'0'/*TICKETCLOSEDCOUT <NVARCHAR(5000)>*/
				)`
                let statement = await db.preparePromisified(query);
                let result = await db.statementExecPromisified(statement);
				next()
            } catch (error) {
				console.log(error)
				next()
            }
        })
		
	}

	function signupcount(req, res, next) {
		return new Promise(async(resolve, reject) =>{
            try {
				let db = new dbClass(req.db);
                const schema = await utils.currentSchema({
                    db
                });

				let createdat = new Date().getTime();
				let id = uuid();
				let signupcount = 1;
                
                let query = `INSERT INTO "${schema}"."SCLABS_ALUMNIPORTAL_REPORTING" VALUES (
					'${createdat}'/*CREATEDAT <NVARCHAR(100)>*/,
					'${id}'/*ID <NVARCHAR(36)>*/,
					'0'/*LOGINCOUNT <NVARCHAR(5000)>*/,
					'${signupcount}'/*SIGNUPCOUNT <NVARCHAR(5000)>*/,
					'0'/*DOCUMENTDOWNLOADCOUNT <NVARCHAR(5000)>*/,
					'0'/*DOCUMENTUPLOADCOUNT <NVARCHAR(5000)>*/,
					'0'/*TICKETOPENCOUNT <NVARCHAR(5000)>*/,
					'0'/*TICKETCLOSEDCOUT <NVARCHAR(5000)>*/
				)`
                let statement = await db.preparePromisified(query);
                let result = await db.statementExecPromisified(statement);
				next()
            } catch (error) {
				console.log(error)
				next()
            }
        })
	}

	function documentdownloadcount(req, res, next) {
		return new Promise(async(resolve, reject) =>{
            try {
				let db = new dbClass(req.db);
                const schema = await utils.currentSchema({
                    db
                });

				let createdat = new Date().getTime();
				let id = uuid();
				let documentdownloadcount = 1;
                
                let query = `INSERT INTO "${schema}"."SCLABS_ALUMNIPORTAL_REPORTING" VALUES (
					'${createdat}'/*CREATEDAT <NVARCHAR(100)>*/,
					'${id}'/*ID <NVARCHAR(36)>*/,
					'0'/*LOGINCOUNT <NVARCHAR(5000)>*/,
					'0'/*SIGNUPCOUNT <NVARCHAR(5000)>*/,
					'${documentdownloadcount}'/*DOCUMENTDOWNLOADCOUNT <NVARCHAR(5000)>*/,
					'0'/*DOCUMENTUPLOADCOUNT <NVARCHAR(5000)>*/,
					'0'/*TICKETOPENCOUNT <NVARCHAR(5000)>*/,
					'0'/*TICKETCLOSEDCOUT <NVARCHAR(5000)>*/
				)`
                let statement = await db.preparePromisified(query);
                let result = await db.statementExecPromisified(statement);
				next()
            } catch (error) {
				console.log(error)
				next()
            }
        })
	}

	function documentuploadcount(req, res, next) {
		return new Promise(async(resolve, reject) =>{
            try {
				let db = new dbClass(req.db);
                const schema = await utils.currentSchema({
                    db
                });

				let createdat = new Date().getTime();
				let id = uuid();
				let documentuploadcount = 1;
                
                let query = `INSERT INTO "${schema}"."SCLABS_ALUMNIPORTAL_REPORTING" VALUES (
					'${createdat}'/*CREATEDAT <NVARCHAR(100)>*/,
					'${id}'/*ID <NVARCHAR(36)>*/,
					'0'/*LOGINCOUNT <NVARCHAR(5000)>*/,
					'0'/*SIGNUPCOUNT <NVARCHAR(5000)>*/,
					'0'/*DOCUMENTDOWNLOADCOUNT <NVARCHAR(5000)>*/,
					'${documentdownloadcount}'/*DOCUMENTUPLOADCOUNT <NVARCHAR(5000)>*/,
					'0'/*TICKETOPENCOUNT <NVARCHAR(5000)>*/,
					'0'/*TICKETCLOSEDCOUT <NVARCHAR(5000)>*/
				)`
                let statement = await db.preparePromisified(query);
                let result = await db.statementExecPromisified(statement);
				next()
            } catch (error) {
				console.log(error)
				next()
            }
        })
	}
	function ticketopencount(req, res, next) {
		return new Promise(async(resolve, reject) =>{
            try {
				let db = new dbClass(req.db);
                const schema = await utils.currentSchema({
                    db
                });

				let createdat = new Date().getTime();
				let id = uuid();
				let ticketopencount = 1;
                
                let query = `INSERT INTO "${schema}"."SCLABS_ALUMNIPORTAL_REPORTING" VALUES (
					'${createdat}'/*CREATEDAT <NVARCHAR(100)>*/,
					'${id}'/*ID <NVARCHAR(36)>*/,
					'0'/*LOGINCOUNT <NVARCHAR(5000)>*/,
					'0'/*SIGNUPCOUNT <NVARCHAR(5000)>*/,
					'0'/*DOCUMENTDOWNLOADCOUNT <NVARCHAR(5000)>*/,
					'0'/*DOCUMENTUPLOADCOUNT <NVARCHAR(5000)>*/,
					'${ticketopencount}'/*TICKETOPENCOUNT <NVARCHAR(5000)>*/,
					'0'/*TICKETCLOSEDCOUT <NVARCHAR(5000)>*/
				)`
                let statement = await db.preparePromisified(query);
                let result = await db.statementExecPromisified(statement);
				next()
            } catch (error) {
				console.log(error)
				next()
            }
        })
	}
	function ticketclosedcout(req, res, next) {
		return new Promise(async(resolve, reject) =>{
            try {
				let db = new dbClass(req.db);
                const schema = await utils.currentSchema({
                    db
                });

				let createdat = new Date().getTime();
				let id = uuid();
				let ticketclosecount = 1;
                
                let query = `INSERT INTO "${schema}"."SCLABS_ALUMNIPORTAL_REPORTING" VALUES (
					'${createdat}'/*CREATEDAT <NVARCHAR(100)>*/,
					'${id}'/*ID <NVARCHAR(36)>*/,
					'0/*LOGINCOUNT <NVARCHAR(5000)>*/,
					'0'/*SIGNUPCOUNT <NVARCHAR(5000)>*/,
					'0'/*DOCUMENTDOWNLOADCOUNT <NVARCHAR(5000)>*/,
					'0'/*DOCUMENTUPLOADCOUNT <NVARCHAR(5000)>*/,
					'0'/*TICKETOPENCOUNT <NVARCHAR(5000)>*/,
					'${ticketclosecount}'/*TICKETCLOSEDCOUT <NVARCHAR(5000)>*/
				)`
                let statement = await db.preparePromisified(query);
                let result = await db.statementExecPromisified(statement);
				next()
            } catch (error) {
				console.log(error)
				next()
            }
        })
	}
	

	return {
		logincount,
		signupcount,
		documentdownloadcount,
		documentuploadcount,
		ticketopencount,
		ticketclosedcout
	};
};