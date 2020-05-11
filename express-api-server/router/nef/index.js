const expressrouter = require("express").Router();
const nefcontroller = require("../../controller/nef/index");
expressrouter
	.route("/news/get")
	.get((req, res, next) => nefcontroller.getnews(req, res, next));
expressrouter
	.route("/news/create")
	.post((req, res, next) => nefcontroller.createnews(req, res, next));
expressrouter
	.route("/news/update")
	.post((req, res, next) => nefcontroller.updatenews(req, res, next));

module.exports = expressrouter;