const expressrouter = require("express").Router();
const authcontroller = require("../../controller/documents/index");
//auth routers
expressrouter
	.route("/auth/login")
	.get((req, res, next) => authcontroller.login(req, res, next));
expressrouter
	.route("/auth/signup")
	.post((req, res, next) => authcontroller.signup(req, res, next));
expressrouter
	.route("/auth/changepassword")
	.post((req, res, next) => authcontroller.changepassword(req, res, next));
expressrouter
	.route("/auth/resetpassword")
	.post((req, res, next) => authcontroller.resetpassword(req, res, next));
module.exports = expressrouter;