const expressrouter = require("express").Router();
const searchContoller = require("../../controller/search/adminindex");

// User search Router
expressrouter
    .route("/userprofile")
    .get((req, res, next) => searchContoller.user(req, res, next));

// Skill Search Router
expressrouter
    .route("/skill")
    .get((req, res, next) => searchContoller.skill(req, res, next));

//  Admin search routers
expressrouter
    .route("/admin")
    .get((req, res, next) => searchContoller.admin(req, res, next));

//	Job Search routers
expressrouter
    .route("/job")
    .get((req, res, next) => searchContoller.job(req, res, next));

// For map 
expressrouter
    .route("/maps/userids/get")
    .get((req, res, next) => searchContoller.userids(req, res, next));

module.exports = expressrouter;