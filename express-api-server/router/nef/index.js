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
expressrouter
	.route("/faq/get")
	.get((req, res, next) => nefcontroller.getfaq(req, res, next));
expressrouter
	.route("/faq/create")
	.post((req, res, next) => nefcontroller.createfaq(req, res, next));
expressrouter
	.route("/faq/update")
	.post((req, res, next) => nefcontroller.updatefaq(req, res, next));
expressrouter
	.route("/faq/delete")
	.post((req, res, next) => nefcontroller.updatefaq(req, res, next));

module.exports = expressrouter;