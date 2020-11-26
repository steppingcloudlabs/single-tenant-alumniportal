const expressrouter = require("express").Router();
const jobcontroller = require("../../controller/job/index");
//skills routers
expressrouter
	.route("/job/get")
	.get((req, res, next) => jobcontroller.getjob(req, res, next));
expressrouter
	.route("/job/recommendation/get")
	.get((req, res, next) => jobcontroller.getjob(req, res, next));
module.exports = expressrouter;