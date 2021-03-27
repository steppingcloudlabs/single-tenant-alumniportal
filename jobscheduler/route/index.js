const expressrouter = require("express").Router();
const controller = require("../controller/index");

expressrouter
    .route("/job")
    .post((req, res, next) => controller.createjob(req, res, next));

expressrouter
    .route("/job")
    .get((req, res, next) => controller.createJob(req, res, next));

expressrouter
    .route("/job/all")
    .get((req, res, next) => controller.createJob(req, res, next));

module.exports = expressrouter;