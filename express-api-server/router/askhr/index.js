const expressrouter = require("express").Router();
const askhradmincontroller = require("../../controller/auth/userindex.js");

expressrouter
	.route("/ticket/create")
	.post((req, res, next) => askhradmincontroller.createticket(req, res, next));
expressrouter
	.route("/ticket/update")
	.post((req, res, next) => askhradmincontroller.updateticket(req, res, next));
expressrouter
	.route("/ticket/get")
	.get((req, res, next) => askhradmincontroller.getticket(req, res, next));
expressrouter
	.route("/ticket/delete")
	.post((req, res, next) => askhradmincontroller.updateticket(req, res, next));
expressrouter
	.route("/ticket/message/get")
	.get((req, res, next) => askhradmincontroller.getmessage(req, res, next));
expressrouter
	.route("/ticket/message/create")
	.post((req, res, next) => askhradmincontroller.createmessage(req, res, next));
expressrouter
	.route("/ticket/message/update")
	.post((req, res, next) => askhradmincontroller.updatemessage(req, res, next));
expressrouter
	.route("/ticket/message/delete")
	.post((req, res, next) => askhradmincontroller.deletemessage(req, res, next));