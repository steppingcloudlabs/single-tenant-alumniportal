const expressrouter = require("express").Router();
const searchContoller = require("../../controller/search/index");

// User search Router
expressrouter
	.route("/user")
	.get((req, res, next) => searchContoller.user(req, res, next));

// Skill Search Router
expressrouter
	.route("/skills")
	.get((req, res, next) => searchContoller.skill(req, res, next));

//  Admin search routers
expressrouter
	.route("/admin")
	.get((req, res, next) => searchContoller.admin(req, res, next));

//	Job Search routers
expressrouter
	.route("/job")
	.get((req, res, next) => searchContoller.job(req, res, next));

module.exports = expressrouter;