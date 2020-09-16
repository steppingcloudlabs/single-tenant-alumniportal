const {JWT_SECRET} = require('../../config');
const JWT = require('jsonwebtoken');
module.exports = () => {
	function tokenchecks(req,res,next) {
		const {token}=req.body;
		if(token){
			const tokendetails =  JWT.verify(token, JWT_SECRET);
			const expirytimefromtoken=tokendetails.exp
				if (Date.now() > expirytimefromtoken) {
        		res.type("application/json").status(200).send({
					status: "200",
					result: "Token expired, Please Login Again"
				});
        		}
        		else
        		{
        			next();
        		}
		}
		else
		{
			res.type("application/json").status(200).send({
					status: "400",
					result: "Rejected Request, Token Required"
				});
		}
	}
	return tokenchecks;
};