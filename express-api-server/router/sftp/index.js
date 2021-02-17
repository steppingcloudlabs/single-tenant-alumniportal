const expressrouter = require("express").Router();
const sftpController = require("../../controller/sftp/index");

expressrouter
    .route("/credentials/get")
    .get((req, res, next) => sftpController.getCredentials(req, res, next));

expressrouter
    .route("/credentials/create")
    .post((req, res, next) => sftpController.createCredentials(req, res, next));

expressrouter
    .route("/credentials/delete")
    .get((req, res, next) => sftpController.deleteCredentials(req, res, next));

module.exports = expressrouter;