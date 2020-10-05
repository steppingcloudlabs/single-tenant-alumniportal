const expressrouter = require("express").Router();
const usercontroller = require("../../controller/user/index.js");
//document routers
expressrouter
	.route("/userinfo/get")
	.get((req, res, next) => usercontroller.getprofile(req, res, next));
module.exports = expressrouter;