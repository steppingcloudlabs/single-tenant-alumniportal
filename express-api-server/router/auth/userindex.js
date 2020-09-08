const expressrouter = require("express").Router();
const authcontroller = require("../../controller/auth/userindex.js");
//auth routers
expressrouter
	.route("/login")
	.post((req, res, next) => authcontroller.login(req, res, next));
expressrouter
	.route("/signup")
	.post((req, res, next) => authcontroller.signup(req, res, next));
module.exports = expressrouter;