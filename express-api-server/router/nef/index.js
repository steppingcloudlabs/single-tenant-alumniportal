const expressrouter = require("express").Router();
const nefcontroller = require("../../controller/nef/index");
expressrouter
	.route("/view/news")
	.get((req, res, next) => nefcontroller.viewnews(req, res, next));

module.exports = expressrouter;