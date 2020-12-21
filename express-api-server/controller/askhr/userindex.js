const ticketserivce = require("../../service/askhr/userindex")();
const dbClass = require("sap-hdbext-promisfied");
const utils = require("../../utils/database/index")();

module.exports = {
    createticket: async (req, res) => {
        try {
            let payload = req.body;

            payload.payload.USERTYE = 'user'
            let db = new dbClass(req.db);
            let response = await ticketserivce.createticket({
                payload,
                db
            });
            console.log(response);
            if (response) {
                res.type("application/json").status(200).send({
                    status: "200",
                    result: response
                });
            } else {
                res.type("application/json").status(200).send({
                    status: "500",
                    result: "Error"

                });
            }
        } catch (error) {
            req.logger.error(` Error for ${req.logger.getTenantId()} at user/action/askhr/index/createticket ${error}`);
            res.type("application/json").status(500).send({
                status: "500",
                error: error
            });
        }

    },
    updateticket: async (req, res) => {
        try {
            const payload = req.body;
            let db = new dbClass(req.db);
            let response = await ticketserivce.updateticket({
                payload,
                db
            });
            if (response) {
                res.type("application/json").status(200).send({
                    status: "200",
                    result: response
                });
            } else {
                res.type("application/json").status(200).send({
                    status: "500",
                    result: "Error"
                });

            }

        } catch (error) {
            req.logger.error(` Error for ${req.logger.getTenantId()} at admin/action/askhr/index/updateuser ${error}`);
            res.type("application/json").status(500).send({
                status: "500",
                error: error
            });
        }
    },
    getticket: async (req, res) => {

        try {
            const payload = req.query;
            let db = new dbClass(req.db);
            let response = await ticketserivce.getticket({
                payload,
                db
            });

            if (response) {
                if (response.length == 0) response = response
                
                const LIMIT = payload.LIMIT == undefined ? 1 : payload.LIMIT
                const OFFSET = payload.OFFSET == undefined ? 0 : payload.OFFSET
                tablename = "SCLABS_ALUMNIPORTAL_TICKET_TICKET"
                const schema = await utils.currentSchema({
                    db
                })

                let pagecount = await utils.getPageCount({
                    schema,
                    tablename,
                    db
                })
                paginationobject = {
                    'TOTALPAGES': Math.ceil(pagecount[0].TOTALROWS / LIMIT),
                    'LIMIT': LIMIT,
                    'OFFSET': OFFSET
                }
                res.type("application/json").status(200).send({
                    status: "200",
                    result: response,
                    pagination: paginationobject
                });
            } else {
                res.status(400).send({
                    status: "400",
                    result: response
                });
            }

        } catch (error) {
            req.logger.error(` Error for ${req.logger.getTenantId()} at admin/action/askhr/index/getticket ${error}`);
            res.status(400).send({
                status: "400",
                result: error
            });
        }

    },
    deleteticket: async (req, res) => {
        try {

            const payload = req.body;
            let db = new dbClass(req.db);

            let response = await ticketserivce.deleteticket({
                payload,
                db
            });

            if (response) {
                res.type("application/json").status(200).send({
                    status: "200",
                    result: response
                });
            } else {
                res.type("application/json").status(200).send({
                    status: "500",
                    result: response
                });

            }
        } catch (error) {
            req.logger.error(` Error for ${req.logger.getTenantId()} at admin/action/askhr/index/deleteticket ${error}`);

            res.status(200).send({
                status: "400",
                result: "Element Not Found"
            });
        }
    },

    // MESSAGE CONTROLLERS
    createmessage: async (req, res) => {
        try {
            const payload = req.body;
            let db = new dbClass(req.db);
            console.log(payload)
            let response = await ticketserivce.createMESSAGE({
                payload,
                db
            });
            console.log(response);
            if (response) {
                res.type("application/json").status(200).send({
                    status: "200",
                    result: response
                });
            } else {
                res.type("application/json").status(200).send({
                    status: "400",
                    result: response

                });
            }
        } catch (error) {
            req.logger.error(` Error for ${req.logger.getTenantId()} at admin/action/askhr/index/createmessage ${error}`);

            res.type("application/json").status(500).send({
                status: "500",
                error: error
            });
        }

    },
    updatemessage: async (req, res) => {
        try {
            const payload = req.body;
            let db = new dbClass(req.db);
            let response = await ticketserivce.updateMESSAGE({
                payload,
                db
            });
            if (response) {
                res.type("application/json").status(200).send({
                    status: "200",
                    result: response
                });
            } else {
                res.type("application/json").status(200).send({
                    status: "400",
                    result: response
                });

            }

        } catch (error) {
            req.logger.error(` Error for ${req.logger.getTenantId()} at admin/action/askhr/index/updatemessage ${error}`);

            res.type("application/json").status(500).send({
                status: "500",
                error: error
            });
        }
    },
    getmessage: async (req, res) => {

        try {

            const payload = req.query;
            let db = new dbClass(req.db);
            console.log(payload)
            let response = await ticketserivce.getMESSAGE({
                payload,
                db
            });
            if (response) {
                if (response.length == 0) response = response
                
                const LIMIT = payload.LIMIT == undefined ? 1 : payload.LIMIT
                const OFFSET = payload.OFFSET == undefined ? 0 : payload.OFFSET
                tablename = "SCLABS_ALUMNIPORTAL_MESSAGES_MESSAGES"
                const schema = await utils.currentSchema({
                    db
                })

                let pagecount = await utils.getPageCount({
                    schema,
                    tablename,
                    db
                })
                paginationobject = {
                    'TOTALPAGES': Math.ceil(pagecount[0].TOTALROWS / LIMIT),
                    'LIMIT': LIMIT,
                    'OFFSET': OFFSET
                }
                res.type("application/json").status(200).send({
                    status: "200",
                    result: response,
                    pagination: paginationobject
                });
            } else {
                req.logger.info(`400 response for ${req.logger.getTenantId()} at admin/action/askhr/index/updatemessage ${response}`);

                res.status(400).send({
                    status: "400",
                    result: response
                });
            }

        } catch (error) {
            req.logger.error(` Error for ${req.logger.getTenantId()} at admin/action/askhr/index/updatemessage ${error}`);

            res.type("application/json").status(500).send({
                status: "500",
                result: error
            });
        }

    },
    deletemessage: async (req, res) => {
        try {
            const payload = req.body;
            let db = new dbClass(req.db);
            let response = await ticketserivce.deleteMESSAGE({
                payload,
                db
            });
            if (response) {
                res.type("application/json").status(200).send({
                    status: "200",
                    result: response
                });
            } else {
                res.type("application/json").status(200).send({
                    status: "500",
                    result: response
                });

            }
        } catch (error) {
            req.logger.error(` Error for ${req.logger.getTenantId()} at admin/action/askhr/index/deletemessage ${error}`);

            res.status(200).send({
                status: "400",
                result: "Element Not Found"
            });
        }
    }

}