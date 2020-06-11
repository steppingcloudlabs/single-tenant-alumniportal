const expressrouter = require("express").Router();
const admincontroller = require("../../controller/admin/index");
//admin control routers
expressrouter
	.route("/useradd")
	.get((req, res, next) => admincontroller.login(req, res, next));
expressrouter
	.route("/userdelete")
	.post((req, res, next) => admincontroller.signup(req, res, next));
expressrouter
	.route("/userupdate")
	.post((req, res, next) => admincontroller.changepassword(req, res, next));
expressrouter
	.route("/adminadd")
	.post((req, res, next) => admincontroller.resetpassword(req, res, next));
expressrouter
	.route("/admindelete")
	.post((req, res, next) => admincontroller.resetpassword(req, res, next));
expressrouter
	.route("/adminupadte")
	.post((req, res, next) => admincontroller.resetpassword(req, res, next));
expressrouter
	.route("/hradd")
	.post((req, res, next) => admincontroller.resetpassword(req, res, next));
expressrouter
	.route("/hrdelete")
	.post((req, res, next) => admincontroller.resetpassword(req, res, next));
expressrouter
	.route("/hrupdate")
	.post((req, res, next) => admincontroller.resetpassword(req, res, next));
module.exports = expressrouter;