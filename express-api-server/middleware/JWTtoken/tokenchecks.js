const {
	JWT_SECRET
} = require('../../config');
const utils = require("../../utils/database/index.js")();
const JWT = require('jsonwebtoken');
module.exports = () => {
	function tokenchecks(req, res, next) {
		const {
			token
		} = req.body;
		if (token) {
			const tokendetails = JWT.verify(token, JWT_SECRET);
			const expirytimefromtoken = tokendetails.exp
			if (Date.now() > expirytimefromtoken) {
				res.type("application/json").status(200).send({
					status: "200",
					result: "Token expired, Please Login Again"
				});
			} else {
				next();
			}
		} else {
			res.type("application/json").status(200).send({
				status: "400",
				result: "Rejected Request, Token Required"
			});
		}
	}

	function admintokenchecks(req, res, next) {
		const {
			manager
		} = req.query;
		if (manager) {
			const schema = await utils.currentSchema({
				db
			})
			query = `select `
			const statement = await db.preparePromisified(query)
			const results = await db.statementExecPromisified(statement, [])
			if (results.length == 0) {
				res.type("application/json").status(200).send({
					status: "401",
					result: "Manager is not registered in the system"
				});
			} else {
				next();
			}
		} else {
			res.type("application/json").status(200).send({
				status: "400",
				result: "Rejected Request, Manager Required"
			});
		}
	}
	return {
		tokenchecks,
		admintokenchecks
	};
};