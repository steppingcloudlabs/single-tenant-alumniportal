const expressrouter = require("express").Router();
const controller = require('../../controller/reporting/index')

//job routers
expressrouter
    .route("/user/registered")
    .get((req, res, next) => controller.getRegisteredUsers(req, res, next));
expressrouter
    .route("/logincount")
    .get((req, res, next) => controller.logincount(req, res, next));
module.exports = expressrouter;