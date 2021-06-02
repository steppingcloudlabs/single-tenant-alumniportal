const expressrouter = require("express").Router();
const documentcontroller = require("../../controller/documents/index");
const {documentdownloadcount} = require("../../middleware/reportingcollector/index")();
//document routers
expressrouter
	.route("/documents/get")
	.get((req, res, next) =>{documentdownloadcount(req, res, next)}, (req, res, next) => documentcontroller.getdocuments(req, res, next));
expressrouter
	.route("/documents/status")
	.get((req, res, next) => documentcontroller.statusdocuments(req, res, next));
module.exports = expressrouter;