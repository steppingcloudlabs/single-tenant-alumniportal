const expressrouter = require("express").Router();
const personalinformationcontroller = require("../../controller/documents/index");
//document routers
expressrouter
	.route("/personalinformation/get")
	.get((req, res, next) => personalinformationcontroller.getdocuments(req, res, next));
expressrouter
	.route("/personalinformation/create")
	.post((req, res, next) => personalinformationcontroller.createdocuments(req, res, next));
expressrouter
	.route("/personalinformation/update")
	.post((req, res, next) => personalinformationcontroller.updatedocuments(req, res, next));
expressrouter
	.route("/personalinformation/delete")
	.post((req, res, next) => personalinformationcontroller.deletedocuments(req, res, next));

module.exports = expressrouter;