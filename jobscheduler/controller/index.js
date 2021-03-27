const service = require('../service/index')();

module.exports = {
    createjob: async (req, res, next) => {
        try {
            let db = new dbClass(req.db);
            let payload = req.body;
            let response = await objectstorserivce.createETLJob({
                payload,
                db
            });

            if (response) {
                res.type("application/json").status(200).send({
                    status: "200",
                    result: response,
                });
            } else {
                res.type("application/json").status(400).send({
                    status: "400",
                    result: response
                });
            }

        } catch (error) {
            req.logger.error(` Error for ${req.logger.getTenantId()} at admin/action/index/documents/index/complete ${error}`);
            res.type("application/json").status(500).send({
                status: "500",
                error: error.message
            });
        }
    },
    getjob: async (req, res, next) => {
        try {
            let db = new dbClass(req.db);
            let payload = req.body;
            let response = await objectstorserivce.createETLJob({
                payload,
                db
            });

            if (response) {
                res.type("application/json").status(200).send({
                    status: "200",
                    result: response,
                });
            } else {
                res.type("application/json").status(400).send({
                    status: "400",
                    result: response
                });
            }

        } catch (error) {
            req.logger.error(` Error for ${req.logger.getTenantId()} at admin/action/index/documents/index/complete ${error}`);
            res.type("application/json").status(500).send({
                status: "500",
                error: error.message
            });
        }
    },
    getalljobs: async (req, res, next) => {
        try {
            let db = new dbClass(req.db);
            let payload = req.body;
            let response = await objectstorserivce.createETLJob({
                payload,
                db
            });

            if (response) {
                res.type("application/json").status(200).send({
                    status: "200",
                    result: response,
                });
            } else {
                res.type("application/json").status(400).send({
                    status: "400",
                    result: response
                });
            }

        } catch (error) {
            req.logger.error(` Error for ${req.logger.getTenantId()} at admin/action/index/documents/index/complete ${error}`);
            res.type("application/json").status(500).send({
                status: "500",
                error: error.message
            });
        }
    },

}