const {
    JWT_SECRET
} = require('../../config');
const JWT = require('jsonwebtoken');
module.exports =
    function checkadmintoken(req, res, next) {
        if (!req.headers.authorization) {
            return res.status(400).json({
                status: "400",
                result: "Rejected Request, Token Required"
            });
        }
        let token = req.headers['x-access-token'] || req.headers['authorization'];

        // Remove Bearer from string
        token = token.replace(/^Bearer\s+/, "");

        if (token) {
            const tokendetails = JWT.verify(token, JWT_SECRET);
            const expirytimefromtoken = tokendetails.exp;
            if (Date.now() > expirytimefromtoken) {
                res.type("application/json").status(400).send({
                    status: "400",
                    result: "Token expired, Please Login Again"
                });
            } else {
                next();
            }
        } else {
            res.type("application/json").status(400).send({
                status: "400",
                result: "Rejected Request, Token Required"
            });
        }
    }