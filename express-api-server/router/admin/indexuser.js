const expressrouter = require("express").Router();
const admincontroller = require("../../controller/admin/userindex.js");
//admin control routers
expressrouter
	.route("/user/create")
	.post((req, res, next) => admincontroller.createuser(req, res, next));
expressrouter
	.route("/user/update")
	.post((req, res, next) => admincontroller.deleteuser(req, res, next));
expressrouter
	.route("/user/get")
	.get((req, res, next) => admincontroller.getuser(req, res, next));
expressrouter
	.route("/user/delete")
	.post((req, res, next) => admincontroller.deleteuser(req, res, next));
expressrouter
	.route("/user/create/_bulk")
	.post((req, res, next) => admincontroller.createuserbulk(req, res, next));
module.exports = expressrouter;