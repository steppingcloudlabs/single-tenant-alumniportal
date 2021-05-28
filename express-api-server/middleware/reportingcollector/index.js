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
					''/*SIGNUPCOUNT <NVARCHAR(5000)>*/,
					''/*DOCUMENTDOWNLOADCOUNT <NVARCHAR(5000)>*/,
					''/*DOCUMENTUPLOADCOUNT <NVARCHAR(5000)>*/,
					''/*TICKETOPENCOUNT <NVARCHAR(5000)>*/,
					''/*TICKETCLOSEDCOUT <NVARCHAR(5000)>*/
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
		if (req.authInfo.checkScope('$XSAPPNAME.Administrator')) {
			next();
		} else {
			res.status(403).send('Forbidden');
		}
	}

	function documentdownloadcount(req, res, next) {
		if (req.authInfo.checkScope('$XSAPPNAME.Manager')) {
			next();
		} else {
			res.status(403).send('Forbidden');
		}
	}

	function documentuploadcount(req, res, next) {
		if (req.authInfo.checkScope('$XSAPPNAME.Manager')) {
			next();
		} else {
			res.status(403).send('Forbidden');
		}
	}
	function ticketopencount(req, res, next) {
		if (req.authInfo.checkScope('$XSAPPNAME.Manager')) {
			next();
		} else {
			res.status(403).send('Forbidden');
		}
	}
	function ticketclosedcout(req, res, next) {
		if (req.authInfo.checkScope('$XSAPPNAME.Manager')) {
			next();
		} else {
			res.status(403).send('Forbidden');
		}
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