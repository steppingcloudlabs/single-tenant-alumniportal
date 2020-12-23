const expressrouter = require("express").Router();
const authcontroller = require("../../controller/auth/main");

const {
    signupValidateBody,
    signupSchemas,
    signinValidateBody,
    signinSchemas
} = require("../../validator/authValidate.js")
//auth routers
expressrouter
    .route("/login")
    .post((req, res, next) => authcontroller.login(req, res, next));
expressrouter
    .route("/signup")
    .post((req, res, next) => authcontroller.signup(req, res, next));
expressrouter
    .route("/forgetpassword")
    .post((req, res, next) => authcontroller.forgetpassword(req, res, next));
expressrouter
    .route("/reset/:token")
    .post((req, res, next) => authcontroller.resetpassword(req, res, next));


module.exports = expressrouter;