const expressrouter = require("express").Router();
const authcontroller = require("../../controller/auth/userindex.js");
const {
  signupValidateBody,
  signupSchemas}=require("../../validator/authValidate.js")
//auth routers
expressrouter
	.route("/login")
	.post((req, res, next) => authcontroller.login(req, res, next));
expressrouter
	.route("/signup")
	.post(signupValidateBody(signupSchemas.authSchema),(req, res, next) => authcontroller.signup(req, res, next));
module.exports = expressrouter;