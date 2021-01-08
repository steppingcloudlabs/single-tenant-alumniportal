const {
    JWT_SECRET
} = require('../../config');
const JWT = require('jsonwebtoken');
module.exports =
    function checkadmintoken(req, res, next) {
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
                console.log(tokendetails);
                const usertype = tokendetails.usertype;
                if (Date.now() > expirytimefromtoken) {
                    res.type("application/json").status(200).send({
                        status: "400",
                        result: "Token expired, Please Login Again"
                    });
                }
                // if (usertype != "admin" && usertype != "hr") {
                //     console.log(usertype + "this need to be HR OR ADMIN")
                //     res.type("application/json").status(200).send({
                //         status: "400",
                //         user: usertype,
                //         result: "Not a valid usertype for accessing the resource"
                //     });
                // } 
                else {
                    next();
                }
            }
            catch (e) {
                res.type("application/json").status(500).send({
                    status: "400",
                    result: "Error",
                    error: e.message
                });
            }
        } else {
            res.type("application/json").status(200).send({
                status: "400",
                result: "Rejected Request, Token Required"
            });
        }
    }