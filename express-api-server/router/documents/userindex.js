const expressrouter = require("express").Router();
const documentcontroller = require("../../controller/documents/index");
//document routers
expressrouter
	.route("/document/get")
	.get((req, res, next) => documentcontroller.getdocument(req, res, next));
expressrouter
	.route("/documents/status")
	.get((req, res, next) => documentcontroller.statusdocuments(req, res, next));
module.exports = expressrouter;