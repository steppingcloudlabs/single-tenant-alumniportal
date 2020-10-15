const expressrouter = require("express").Router();
const nefcontroller = require("../../controller/nef/index");
expressrouter
	.route("/news/get")
	.get((req, res, next) => nefcontroller.getnews(req, res, next));
expressrouter
	.route("/faq/get")
	.get((req, res, next) => nefcontroller.getfaq(req, res, next));
expressrouter
	.route("/event/get")
	.get((req, res, next) =>  nefcontroller.getevent(req, res, next));

module.exports = expressrouter;