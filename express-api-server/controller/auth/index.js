/**
 * Index.js is a file that contains admin code. Auth controller for admin are defined below. 
 */
const authserivce = require("../../service/auth/index.js")();
const dbClass = require("sap-hdbext-promisfied");
const JWT = require("jsonwebtoken");
const {
    JWT_SECRET
} = require("../../config")

module.exports = {
    login: async (req, res) => {
        try {
            const payload = req.body;
            const logger = req.logger;
            let db = new dbClass(req.db);
            // Calling Async login service
            let response = await authserivce.login({
                payload,
                logger,
                db
            });

            // setting the appropriate response code and message.
            if (response == "incorrectuser") {
                res.type("application/json").status(200).send({
                    status: "200",
                    result: "Incorrect Username"
                });
            }
            if (response == "incorrectpassword") {
                res.type("application/json").status(200).send({
                    status: "200",
                    result: "Incorrect password"
                });
            }

            // If valid response then create the token. 
            // Improvement: token validaation and expiration if user clicks on logout needs to be implemented if required. 
            if (response) {
                // generating token 
                const token = JWT.sign({
                    iss: "steppingcloudforuser",
                    sub: response[0].USER_ID,
                    jwtKey: "steppingcloudsecret",
                    algorithm: "HS256",
                    iat: new Date().getTime(),
                    exp: new Date().setTime(new Date().getTime() + 900000),
                    usertype: response[0].USERTYPE,
                },
                    JWT_SECRET
                );
                if (response.length == 0) response = response

                res.type("application/json").status(200).send({
                    status: "200",
                    result: response,
                    token: token
                });
            } else {
                
                req.logger.error(` Error for ${req.logger.getTenantId()} at user/action/index/login ${error}`);
                res.type("application/json").status(200).send({
                    status: "500",
                    result: "Error"

                });


            }
        } catch (error) {
            req.logger.error(` Error for ${req.logger.getTenantId()} at user/action/index/login ${error}`);
            res.type("application/json").status(500).send({
                status: "500",
                error: error
            });
        }

    },
    signup: async (req, res) => {
        try {
            const payload = req.body;
            const logger = req.logger;
            let db = new dbClass(req.db);
            // DB call 
            let response = await authserivce.signup({
                payload,
                logger,
                db
            });

            if (response == "foundemail") {
                res.type("application/json").status(200).send({
                    status: "200",
                    result: "Email already exists"
                });
            }
            if (response == "founduserid") {
                res.type("application/json").status(200).send({
                    status: "200",
                    result: "UserId already exists"
                });
            }
            if (response == "notalumni") {
                res.type("application/json").status(200).send({
                    status: "200",
                    result: "User is not an Alumni"
                });
            }
            if (response == "onlyhrsandadmins") {
                res.type("application/json").status(200).send({
                    status: "401",
                    result: "Only admin and hr users allowed"
                });
            } else if (response == "nothr") {
                res.type("application/json").status(200).send({
                    status: "401",
                    result: "Hr not recognised in the database. Admin add hr action required"
                })
            } else {
                res.type("application/json").status(200).send({
                    status: "200",
                    result: response
                });
            }

        } catch (error) {
            req.logger.error(` Error for ${req.logger.getTenantId()} at user/action/index/signup ${error}`);
            res.type("application/json").status(500).send({
                status: "500",
                error: error
            });
        }
    },
    forgetpassword: async (req, res) => {
        try {

            const payload = req.body;
            let db = new dbClass(req.db);
            let response = await authserivce.forgetpassword({
                payload,
                db
            });


            if (response == "tokensent") {
                res.status(200).send({
                    status: 200,
                    result: "Reset Token sent to your email",
                });
            } else if (response == "notfounduser") {
                res.status(200).send({
                    status: 400,
                    result: "user not found",
                });
            } else {
                res.type("application/json").status(200).send({
                    status: "500",
                    result: "Error"
                });

            }

        } catch (error) {
            res.type("application/json").status(500).send({
                status: "500",
                error: error
            });
        }
    },
    resetpassword: async (req, res) => {
        try {

            const payload = req.body;
            const resettoken = req.query;

            let db = new dbClass(req.db);
            let response = await authserivce.resetpassword({
                payload,
                resettoken,
                db
            });


            if (response == "ResetTokenExpired") {
                res.status(200).send({
                    status: 400,
                    result: "Reset Token Expired",
                });
            } else if ("updated") {
                res.status(200).send({
                    status: 200,
                    result: "New password updated successfully",
                });
            } else {
                res.status(200).send({
                    status: 200,
                    result: response,
                });
            }

        } catch (error) {
            res.type("application/json").status(500).send({
                status: "500",
                error: error
            });
        }
    },


}