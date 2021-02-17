const dbClass = require("sap-hdbext-promisfied");
const sftpService = require("../../service/sftp")();
const utils = require("../../utils/database/index")();

module.exports = {
    getCredentials: async (req, res, next) => {

        try {
            const payload = req.body;
            let db = new dbClass(req.db);
            let response = await sftpService.getCredentials({
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
            res.type("application/json").status(500).send({
                status: "500",
                error: error.message
            });
        }

    },
    createCredentials: async (req, res, next) => {

        try {
            const payload = req.body;
            let db = new dbClass(req.db);
            let response = await sftpService.createCredentials({
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
            res.type("application/json").status(500).send({
                status: "500",
                error: error.message
            });
        }

    },
    deleteCredentials: async (req, res, next) => {

        try {
            const payload = req.body;
            let db = new dbClass(req.db);
            let response = await sftpService.deleteCredentials({
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
            res.type("application/json").status(500).send({
                status: "500",
                error: error.message
            });
        }

    }


}
