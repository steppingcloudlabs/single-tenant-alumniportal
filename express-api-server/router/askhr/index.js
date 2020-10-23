const expressrouter = require("express").Router();
const askhradmincontroller = require("../../controller/auth/userindex.js");

expressrouter
	.route("/ticket/create")
	.post((req, res, next) => askhradmincontroller.login(req, res, next));
expressrouter
	.route("/ticket/update")
	.post((req, res, next) => askhradmincontroller.login(req, res, next));
expressrouter
	.route("/ticket/get")
	.get((req, res, next) => askhradmincontroller.login(req, res, next));
expressrouter
	.route("/ticket/delete")
	.post((req, res, next) => askhradmincontroller.login(req, res, next));