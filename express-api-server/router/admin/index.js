const expressrouter = require("express").Router();
const admincontroller = require("../../controller/admin/index");
//admin control routers
expressrouter
	.route("/user/create")
	.post((req, res, next) => admincontroller.createuser(req, res, next));
expressrouter
	.route("/user/delete")
	.post((req, res, next) => admincontroller.deleteuser(req, res, next));
expressrouter
	.route("/user/update")
	.post((req, res, next) => admincontroller.userupdate(req, res, next));
expressrouter
	.route("/user/edit")
	.post((req, res, next) => admincontroller.useredit(req, res, next));

module.exports = expressrouter;