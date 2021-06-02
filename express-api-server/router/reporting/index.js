const expressrouter = require("express").Router();
const controller = require('../../controller/reporting/index')

//job routers
expressrouter
    .route("/user/registered")
    .get((req, res, next) => controller.getRegisteredUsers(req, res, next));

expressrouter
    .route("/logincount")
    .get((req, res, next) => controller.logincount(req, res, next));

expressrouter
    .route("/signupcount")
    .get((req, res, next) => controller.signupcount(req, res, next));

expressrouter
    .route("/documentdownloadcount")
    .get((req, res, next) => controller.documentdownloadcount(req, res, next));

expressrouter
    .route("/documentuploadcount")
    .get((req, res, next) => controller.documentuploadcount(req, res, next));

expressrouter
    .route("/ticketopencount")
    .get((req, res, next) => controller.ticketopencount(req, res, next));

expressrouter
    .route("/ticketclosecount")
    .get((req, res, next) => controller.ticketclosecount(req, res, next));



module.exports = expressrouter;