const expressrouter = require("express").Router();
const admincontroller = require("../../controller/admin/index");
//admin control routers
expressrouter
	.route("/admin/create")
	.post((req, res, next) => admincontroller.createadmin(req, res, next));
expressrouter
	.route("/admin/update")
	.post((req, res, next) => admincontroller.deleteadmin(req, res, next));
expressrouter
	.route("/admin/get")
	.get((req, res, next) => admincontroller.getadmin(req, res, next));
expressrouter
	.route("/admin/delete")
	.post((req, res, next) => admincontroller.deleteadmin(req, res, next));

module.exports = expressrouter;