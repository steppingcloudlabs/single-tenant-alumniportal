const {
	JWT_SECRET
} = require('../../config');
const JWT = require('jsonwebtoken');
module.exports =
	function checkusertoken(req, res, next) {
		if (!req.headers.authorization) {
			return res.status(403).json({
				status: "400",
				result: "Rejected Request, Token Required"
			});
		}
		let token = req.headers['x-access-token'] || req.headers['authorization'];

		// Remove Bearer from string
		token = token.replace(/^Bearer\s+/, "");

		if (token) {
			try {
				const tokendetails = JWT.verify(token, JWT_SECRET);
				const expirytimefromtoken = tokendetails.exp;
				if (Date.now() > expirytimefromtoken) {
					res.type("application/json").status(401).send({
						status: "200",
						result: "Invalid Token"
					});
				} else {
					next();
				}
			} catch (error) {
				res.type("application/json").status(200).send({
					status: "400",
					result: "Rejected Request, Token Required"
				});
			}

		} else {
			res.type("application/json").status(200).send({
				status: "400",
				result: "Rejected Request, Token Required"
			});
		}
	}