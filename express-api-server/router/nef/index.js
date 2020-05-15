const expressrouter = require("express").Router();
const nefcontroller = require("../../controller/nef/index");
//news routers
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
	.route("/news/delete")
	.post((req, res, next) => nefcontroller.deletenews(req, res, next));

//faqs routers
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
	.post((req, res, next) => nefcontroller.deletefaq(req, res, next));

//events routers
expressrouter
	.route("/event/get")
	.get((req, res, next) => nefcontroller.getevent(req, res, next));
expressrouter
	.route("/event/create")
	.post((req, res, next) => nefcontroller.createevent(req, res, next));
expressrouter
		.route("/event/update")
	.post((req, res, next) => nefcontroller.updateevent(req, res, next));
expressrouter
	.route("/event/delete")
	.post((req, res, next) => nefcontroller.deleteevent(req, res, next));

module.exports = expressrouter;