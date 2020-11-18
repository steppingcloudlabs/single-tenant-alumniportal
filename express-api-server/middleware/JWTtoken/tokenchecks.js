const {
	JWT_SECRET
} = require('../../config');
const JWT = require('jsonwebtoken');
module.exports = () => {
	function tokenchecks(req, res, next) {
		if (!req.headers.authorization) {
			return res.status(403).json({
				status: "400",
				result: "Rejected Request, Token Required"
			});
		}
		const {
			token
		} = req.header.authorization.split(" ")[1];
		if (token) {
			const tokendetails = JWT.verify(token, JWT_SECRET);
			const expirytimefromtoken = tokendetails.exp;
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

	return {
		tokenchecks
	};

};