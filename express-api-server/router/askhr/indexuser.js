const expressrouter = require("express").Router();
const askhrusercontroller = require("../../controller/askhr/index.js");

expressrouter
	.route("/ticket/create")
	.post((req, res, next) => askhrusercontroller.createticket(req, res, next));
expressrouter
	.route("/ticket/update")
	.post((req, res, next) => askhrusercontroller.updateticket(req, res, next));
expressrouter
	.route("/ticket/get")
	.get((req, res, next) => askhrusercontroller.getticket(req, res, next));
expressrouter
	.route("/ticket/delete")
	.post((req, res, next) => askhrusercontroller.updateticket(req, res, next));
expressrouter
	.route("/ticket/message/get")
	.get((req, res, next) => askhrusercontroller.getmessage(req, res, next));
expressrouter
	.route("/ticket/message/create")
	.post((req, res, next) => askhrusercontroller.createmessage(req, res, next));
expressrouter
	.route("/ticket/message/update")
	.post((req, res, next) => askhrusercontroller.updatemessage(req, res, next));
expressrouter
	.route("/ticket/message/delete")
	.post((req, res, next) => askhrusercontroller.deletemessage(req, res, next));
module.exports = expressrouter;	
