const expressrouter = require("express").Router();
const documentcontroller = require("../../controller/nef/index");
//document routers
expressrouter
	.route("/document/get")
	.get((req, res, next) => documentcontroller.getdocument(req, res, next));
module.exports = expressrouter;