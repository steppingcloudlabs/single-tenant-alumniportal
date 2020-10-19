const expressrouter = require("express").Router();
const successfactorcontroller = require("../../controller/successfactors/index");

expressrouter
	.route("/successfactors")
	.get((req, res, next) => successfactorcontroller.getuser(req, res, next));
module.exports = expressrouter;