const expressrouter = require("express").Router();
const admincontroller = require("../../controller/admin/index");
//admin control routers
expressrouter
	.route("/admin/create")
	.post((req, res, next) => admincontroller.createuser(req, res, next));
expressrouter
	.route("/admin/update")
	.post((req, res, next) => admincontroller.updateuser(req, res, next));
expressrouter
	.route("/admin/get")
	.get((req, res, next) => admincontroller.getuser(req, res, next));
expressrouter
	.route("/admin/delete")
	.post((req, res, next) => admincontroller.deleteuser(req, res, next));

module.exports = expressrouter;