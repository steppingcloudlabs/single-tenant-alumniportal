const expressrouter = require("express").Router();
const searchContoller = require("../../controller/search/index");

// User search Router
expressrouter
	.route("/user")
	.get((req, res, next) => searchContoller.getnews(req, res, next));
	
// Skill Search Router
expressrouter
	.route("/skill")
	.get((req, res, next) => searchContoller.createnews(req, res, next));
	
//  Admin search routers
expressrouter
	.route("/admin")
	.get((req, res, next) => searchContoller.updatenews(req, res, next));
//	Job Search routers
expressrouter
	.route("/job")
	.get((req, res, next) => searchContoller.deletenews(req, res, next));