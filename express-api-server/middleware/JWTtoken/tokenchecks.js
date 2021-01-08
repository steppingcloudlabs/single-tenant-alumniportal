const {
	JWT_SECRET
} = require('../../config');
const JWT = require('jsonwebtoken');
module.exports =
	function checkusertoken(req, res, next) {
		if (!req.headers.authorization) {
			return res.status(200).json({
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
				const usertype = tokendetails.usertype;
				if (Date.now() > expirytimefromtoken) {
					res.type("application/json").status(200).send({
						status: "400",
						result: "Token expired, Please Login Again"
					});
				}
				// if (usertype != "user") {
				// 	res.type("application/json").status(200).send({
				// 		status: "400",
				// 		result: "Not a valid usertype for accessing the resource"
				// 	});
				// }
				else {
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