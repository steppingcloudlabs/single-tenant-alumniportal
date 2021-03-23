const expressrouter = require("express").Router();
const sescontroller = require("../../controller/ses")

expressrouter
    .route("/sns/handle-bounces")
    .post((req, res, next) => sescontroller.handlebounces(req, res, next));
expressrouter
    .route("/sns/handle-complaints")
    .post((req, res, next) => sescontroller.handlecomplaints(req, res, next));

module.exports = expressrouter;