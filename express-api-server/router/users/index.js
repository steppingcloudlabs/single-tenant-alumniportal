/**
 * 
 */
const expressrouter = require("express").Router();
const usercontroller = require("../../controller/user/index.js");

expressrouter
	.route("/userprofile/get")
	.get((req, res, next) => usercontroller.getprofile(req, res, next));
expressrouter
	.route("/userprofile/update")
	.post((req, res, next) => usercontroller.updateprofile(req, res, next));
expressrouter
	.route("/userprofile/delete")
	.post((req, res, next) => usercontroller.deleteprofile(req, res, next));
module.exports = expressrouter;