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
expressrouter
	.route("/event/enrollevent")
	.post((req, res, next) =>  nefcontroller.enrollevent(req, res, next));	
expressrouter
	.route("/event/viewenrollevent")
	.get((req, res, next) =>  nefcontroller.viewenrollevent(req, res, next));
expressrouter
	.route("/event/unenrollevent")
	.delete((req, res, next) =>  nefcontroller.unenrollevent(req, res, next));
expressrouter
	.route("/event/viewuserenrollevent")
	.get((req, res, next) =>  nefcontroller.viewUserEnrollEvent(req, res, next));		

module.exports = expressrouter;
