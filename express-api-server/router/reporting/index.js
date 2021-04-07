const expressrouter = require("express").Router();
const controller = require('../../controller/reporting/index')

//job routers
expressrouter
    .route("/user/registered")
    .get((req, res, next) => controller.getRegisteredUsers(req, res, next));
expressrouter
    .route("/user/active")
    .get((req, res, next) => controller.getActiveUserStats(req, res, next));
module.exports = expressrouter;