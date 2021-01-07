const userauthserivce = require("../../service/auth/userindex.js")();
const adminauthserivce = require("../../service/auth/index.js")();
const utils = require("../../utils/database/index")();
const dbClass = require("sap-hdbext-promisfied");
const JWT = require("jsonwebtoken");
const {
    JWT_SECRET
} = require("../../config");

module.exports = {
    login: async (req, res) => {
        try {
            /**
             * Checking if my user is admin or user. If its a user then call user login otherwise call admin login. 
             * Edge cases are handled by service layer we don't have to that implement on controller
             */
            let db = new dbClass(req.db);
            let schema = await utils.currentSchema({
                db
            });
            let payload = req.body;
            let {
                EMAIL
            } = payload;
            let query = `SELECT * FROM "${schema}"."SCLABS_ALUMNIPORTAL_AUTH_LOGIN" where USERNAME= '${EMAIL}'`
            let statement = await db.preparePromisified(query)
            let result = await db.statementExecPromisified(statement, [])

            if (result.length == 0) {
                const payload = req.body;
                const logger = req.logger;

                let response = await adminauthserivce.login({
                    payload,
                    logger,
                    db
                });

                if (response == "incorrectuser") {
                    res.type("application/json").status(200).send({
                        status: "200",
                        result: "Incorrect Admin Email"
                    });
                } else if (response == "incorrectpassword") {
                    res.type("application/json").status(200).send({
                        status: "200",
                        result: "Incorrect password"
                    });
                } else if (response) {
                    const token = JWT.sign({
                        iss: "steppingcloudforuser",
                        sub: response[0].USER_ID,
                        jwtKey: "steppingcloudsecret",
                        algorithm: "HS256",
                        iat: new Date().getTime(),
                        exp: new Date().setTime(new Date().getTime() + 900000000),
                    },
                        JWT_SECRET
                    )
                    if (response.length == 0) response = response

                    res.type("application/json").status(200).send({
                        status: "200",
                        result: response,
                        token: token
                    });
                }
            } else {

                const payload = req.body;
                const logger = req.logger;
                let db = new dbClass(req.db);
                let response = await userauthserivce.login({
                    payload,
                    logger,
                    db
                });
                if (response == "incorrectuser") {
                    res.type("application/json").status(200).send({
                        status: "200",
                        result: "Incorrect ALumni Username"
                    });
                }
                if (response == "incorrectpassword") {
                    res.type("application/json").status(200).send({
                        status: "200",
                        result: "Incorrect password"
                    });
                }

                if (response) {
                    const token = JWT.sign({
                        iss: "steppingcloudforuser",
                        sub: response[0].USER_ID,
                        jwtKey: "steppingcloudsecret",
                        algorithm: "HS256",
                        iat: new Date().getTime(),
                        exp: new Date().setTime(new Date().getTime() + 90000000),
                    },
                        JWT_SECRET
                    );
                    if (response.length == 0) response = response
                    else if (response[0].SKILL == null) response[0].SKILL = []
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
            }
        } catch (error) {
            req.logger.error(` Error for ${req.logger.getTenantId()} at user/action/index/login ${error}`);
            res.type("application/json").status(200).send({
                status: "500",
                result: error

            });
        }
    },
    signup: async (req, res) => {
        try {
            let db = new dbClass(req.db);
            let schema = await utils.currentSchema({
                db
            });
            let query = `SELECT * FROM "${schema}"."SCLABS_ALUMNIPORTAL_MASTERDATA_MASTERDATA" where USER_ID='${req.body.USERID}'`
            let statement = await db.preparePromisified(query)
            let result = await db.statementExecPromisified(statement, [])
            let payload = req.body;
            if (result.length == 0 && (payload.USERTYPE == 'hr' || payload.USERTYPE == 'admin')) {
                try {
                    const payload = req.body;
                    const logger = req.logger;
                    let db = new dbClass(req.db);
                    let response = await adminauthserivce.signup({
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
            } else {
                try {
                    const payload = req.body;
                    const logger = req.logger;
                    let db = new dbClass(req.db);
                    let response = await userauthserivce.signup({
                        payload,
                        logger,
                        db
                    });

                    if (response == "foundemail") {
                        res.type("application/json").status(200).send({
                            status: "200",
                            result: "Email already exists"
                        });
                    } else if (response == "founduserid") {
                        res.type("application/json").status(200).send({
                            status: "200",
                            result: "UserId already exists"
                        });
                    } else if (response == "notalumni") {
                        res.type("application/json").status(200).send({
                            status: "200",
                            result: "User is not an Alumni"
                        });
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
            }

        } catch (error) {
            req.logger.error(` Error for ${req.logger.getTenantId()} at auth/index/signup ${error}`);
            res.type("application/json").status(500).send({
                status: "500",
                error: error
            });
        }
    },
}