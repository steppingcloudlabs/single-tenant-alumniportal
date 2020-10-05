const expressrouter = require("express").Router();
const skillscontroller = require("../../controller/skills/index");
//skills routers
expressrouter
	.route("/skills/get")
	.get((req, res, next) => skillscontroller.getskills(req, res, next));
expressrouter
	.route("/skills/create")
	.post((req, res, next) => skillscontroller.createskills(req, res, next));
expressrouter
	.route("/skills/update")
	.post((req, res, next) => skillscontroller.updateskills(req, res, next));
expressrouter
	.route("/skills/delete")
	.post((req, res, next) => skillscontroller.deleteskills(req, res, next));
module.exports = expressrouter;