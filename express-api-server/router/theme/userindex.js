`
user Routes for getting color theming in the application.
`

const expressrouter = require("express").Router();
const usercontroller = require("../../controller/theme/userindex");
//admin control routers

expressrouter
	.route("/theme/getcolor")
	.get((req, res, next) => usercontroller.getcolor(req, res, next));
expressrouter
	.route("/theme/getDynamicImage")
	.get((req, res, next) => usercontroller.getDynamicImage(req, res, next));

module.exports = expressrouter;