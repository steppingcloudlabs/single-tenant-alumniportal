`
Admin Routes for Managing color theming in the application.
`

const expressrouter = require("express").Router();
const admincontroller = require("../../controller/theme/adminindex");
//admin control routers
expressrouter
	.route("/theme/updatecolor")
	.post((req, res, next) => admincontroller.updatecolor(req, res, next));
expressrouter
	.route("/theme/getcolor")
	.get((req, res, next) => admincontroller.getcolor(req, res, next));
expressrouter
	.route("/theme/updateDynamicImage")
	.post((req, res, next) => admincontroller.updateDynamicImage(req, res, next));
expressrouter
	.route("/theme/getDynamicImage")
	.get((req, res, next) => admincontroller.getDynamicImage(req, res, next));


module.exports = expressrouter;