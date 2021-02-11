const expressrouter = require("express").Router();
const authcontroller = require('../../controller/auth/integration.auth')

expressrouter
    .route("/login")
    .post((req, res, next) => authcontroller.loginIntegrationUser(req, res, next));
expressrouter
    .route("/user")
    .post((req, res, next) => authcontroller.addIntegrationUser(req, res, next));
expressrouter
    .route("/user")
    .get((req, res, next) => authcontroller.getIntegrationUsers(req, res, next));
expressrouter
    .route("/user")
    .delete((req, res, next) => authcontroller.deleteIntegrationUser(req, res, next));

module.exports = expressrouter;