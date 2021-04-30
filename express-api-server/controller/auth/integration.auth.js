const integrrationauthserviceauth = require("../../service/auth/intergration.index")();
const JWT = require("jsonwebtoken");
const {
    JWT_SECRET
} = require("../../config")
const dbClass = require("sap-hdbext-promisfied");
module.exports = {
    // Integratoin users 
    addIntegrationUser: async (req, res, next) => {
        try {
            const payload = req.body;
            const logger = req.logger;
            let db = new dbClass(req.db);
            let response = await integrrationauthserviceauth.addIntegrationUser({
                payload,
                logger,
                db
            });

            if (response) {
                if (response === 'exists') {
                    res.type("application/json").status(200).send({
                        status: "200",
                        result: "Integration user already exists"
                    });

                } else {
                    res.type("application/json").status(200).send({
                        status: "200",
                        result: "Integration User Added Successfully",
                    });
                }
            } else {
                res.type("application/json").status(200).send({
                    status: "500",
                    result: response,
                });
            }
        } catch (error) {
            req.logger.error(` Error for ${req.logger.getTenantId()} at auth/index/signup ${error.message}`);
            res.type("application/json").status(500).send({
                status: "500",
                error: error.message
            });
        }
    },
    deleteIntegrationUser: async (req, res, next) => {
        try {
            const payload = req.body;
            console.log(payload)

            let db = new dbClass(req.db);
            let response = await integrrationauthserviceauth.deleteIntegrationUser({
                payload,

                db
            });
            if (response) {
                if (response === 'exists') {
                    res.type("application/json").status(200).send({
                        status: "400",
                        result: "Integration user already exists"
                    });

                } else {
                    res.type("application/json").status(200).send({
                        status: "200",
                        result: "Integration User Deleted Successfully",
                    });
                }

            } else {
                res.type("application/json").status(200).send({
                    status: "500",
                    result: response,
                });
            }


        } catch (error) {
            req.logger.error(` Error for ${req.logger.getTenantId()} at auth/index/signup ${error.message}`);
            res.type("application/json").status(500).send({
                status: "500",
                error: error.message
            });
        }
    },

    loginIntegrationUser: async (req, res, next) => {
        try {
            const payload = req.body;

            let db = new dbClass(req.db);
            let response = await integrrationauthserviceauth.loginIntegrationUser({
                payload,
                db
            });

            if (response == "incorrectuser") {
                res.type("application/json").status(200).send({
                    status: "400",
                    result: "Incorrect Email"
                });
            } else if (response == "incorrectpassword") {
                res.type("application/json").status(200).send({
                    status: "400",
                    result: "Incorrect password"
                });
            } else {
                const token = JWT.sign({
                    iss: "steppingcloudforuser",
                    sub: response[0].USER_ID,
                    jwtKey: "steppingcloudsecret",
                    algorithm: "HS256",
                    iat: new Date().getTime(),
                    exp: new Date().setTime(new Date().getTime() + 900000000),
                    usertype: response[0].USERTYPE,
                },
                    JWT_SECRET
                )

                res.type("application/json").status(200).send({
                    status: "200",
                    result: response,
                    token: token
                });
            }


        } catch (error) {
            req.logger.error(` Error for ${req.logger.getTenantId()} at auth/index/login ${error.message}`);
            res.type("application/json").status(500).send({
                status: "500",
                error: error.message
            });
        }
    },
    getIntegrationUsers: async (req, res, next) => {
        try {
            const payload = req.body;
            let db = new dbClass(req.db);
            let response = await integrrationauthserviceauth.getIntegrationUsers({
                payload,
                db
            });
            res.type("application/json").status(200).send({
                status: "200",
                result: response
            });
        } catch (error) {
            req.logger.error(` Error for ${req.logger.getTenantId()} at auth/index/signup ${error.message}`);
            res.type("application/json").status(500).send({
                status: "500",
                error: error.message
            });
        }
    }
}