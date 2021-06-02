const service = require('../../service/reporting/index')();
const dbClass = require("sap-hdbext-promisfied");
const utils = require("../../utils/database/index")();
module.exports = {
    getRegisteredUsers: async (req, res, next) => {
        try {
            const payload = req.query;
            let db = new dbClass(req.db);
            let response = await service.getRegisteredUsers({
                payload,
                db
            });

            if (response) {
                res.status(200).send({
                    status: "200",
                    result: response
                });
            } else {
                res.status(400).send({
                    status: "400",
                    result: response
                });
            }
        } catch (error) {
            req.logger.error(` Error for ${req.logger.getTenantId()} at admin/action/search/user ${error}`);
            res.status(500).send({
                status: "500",
                result: error.message
            });
        }
    },

    logincount: async (req, res, next) => {
        try {
            const payload = req.query;
            let db = new dbClass(req.db);
            let response = await service.logincount({
                payload,
                db
            });
            if (response) {
                res.status(200).send({
                    status: "200",
                    result: response
                });
            } else {
                res.status(400).send({
                    status: "400",
                    result: response
                });
            }
        } catch (error) {
            req.logger.error(` Error for ${req.logger.getTenantId()} at admin/action/search/user ${error}`);
            res.status(400).send({
                status: "500",
                result: error
            });
        }
    },
    signupcount: async (req, res, next) => {
        try {
            const payload = req.query;
            let db = new dbClass(req.db);
            let response = await service.signupcount({
                payload,
                db
            });
            if (response) {
                res.status(200).send({
                    status: "200",
                    result: response
                });
            } else {
                res.status(400).send({
                    status: "400",
                    result: response
                });
            }
        } catch (error) {
            req.logger.error(` Error for ${req.logger.getTenantId()} at admin/action/search/user ${error}`);
            res.status(400).send({
                status: "500",
                result: error
            });
        }
    },
    documentdownloadcount: async (req, res, next) => {
        try {
            const payload = req.query;
            let db = new dbClass(req.db);
            let response = await service.documentdownloadcount({
                payload,
                db
            });
            if (response) {
                res.status(200).send({
                    status: "200",
                    result: response
                });
            } else {
                res.status(400).send({
                    status: "400",
                    result: response
                });
            }
        } catch (error) {
            req.logger.error(` Error for ${req.logger.getTenantId()} at admin/action/search/user ${error}`);
            res.status(400).send({
                status: "500",
                result: error
            });
        }
    },
    documentuploadcount: async (req, res, next) => {
        try {
            const payload = req.query;
            let db = new dbClass(req.db);
            let response = await service.documentuploadcount({
                payload,
                db
            });
            if (response) {
                res.status(200).send({
                    status: "200",
                    result: response
                });
            } else {
                res.status(400).send({
                    status: "400",
                    result: response
                });
            }
        } catch (error) {
            req.logger.error(` Error for ${req.logger.getTenantId()} at admin/action/search/user ${error}`);
            res.status(400).send({
                status: "500",
                result: error
            });
        }
    },
    ticketopencount: async (req, res, next) => {
        try {
            const payload = req.query;
            let db = new dbClass(req.db);
            let response = await service.ticketopencount({
                payload,
                db
            });
            if (response) {
                res.status(200).send({
                    status: "200",
                    result: response
                });
            } else {
                res.status(400).send({
                    status: "400",
                    result: response
                });
            }
        } catch (error) {
            req.logger.error(` Error for ${req.logger.getTenantId()} at admin/action/search/user ${error}`);
            res.status(400).send({
                status: "500",
                result: error
            });
        }
    },
    ticketclosecount: async (req, res, next) => {
        try {
            const payload = req.query;
            let db = new dbClass(req.db);
            let response = await service.ticketclosecount({
                payload,
                db
            });
            if (response) {
                res.status(200).send({
                    status: "200",
                    result: response
                });
            } else {
                res.status(400).send({
                    status: "400",
                    result: response
                });
            }
        } catch (error) {
            req.logger.error(` Error for ${req.logger.getTenantId()} at admin/action/search/user ${error}`);
            res.status(400).send({
                status: "500",
                result: error
            });
        }
    }

}