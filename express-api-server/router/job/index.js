const expressrouter = require("express").Router();
const jobcontroller = require("../../controller/job/index");
//job routers
expressrouter
	.route("/job/get")
	.get((req, res, next) => jobcontroller.getjob(req, res, next));
expressrouter
	.route("/job/create")
	.post((req, res, next) => jobcontroller.createjob(req, res, next));
expressrouter
	.route("/job/update")
	.post((req, res, next) => jobcontroller.updatejob(req, res, next));
expressrouter
	.route("/job/delete")
	.post((req, res, next) => jobcontroller.deletejob(req, res, next));
expressrouter
	.route("/job/bulk/create")
	.post((req, res, next) => jobcontroller.createbulkjob(req, res, next));
module.exports = expressrouter;