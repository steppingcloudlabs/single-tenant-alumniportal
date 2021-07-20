const expressrouter = require("express").Router();
const searchContoller = require("../../controller/search/index");

// User search Router
expressrouter
	.route("/userprofile")
	.get((req, res, next) => searchContoller.user(req, res, next));

// Skill Search Router
expressrouter
	.route("/skill")
	.get((req, res, next) => searchContoller.skill(req, res, next));

//	Job Search routers
expressrouter
	.route("/job")
	.get((req, res, next) => searchContoller.job(req, res, next));

// For map 
expressrouter
	.route("/maps/userids/get")
	.get((req, res, next) => searchContoller.userids(req, res, next));

// For map 
expressrouter
	.route("/maps/userprofile/get")
	.get((req, res, next) => searchContoller.getMapsProfile(req, res, next));
// For event	
expressrouter
	.route("/event")
	.get((req, res, next) => searchContoller.getEvent(req, res, next));
// FOR NEWS
expressrouter
	.route("/news")
	.get((req, res, next) => searchContoller.getNews(req, res, next));

module.exports = expressrouter;