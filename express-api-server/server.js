/*eslint no-console: 0*/
"use strict";

const express = require("express");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const compression = require("compression");
const xsenv = require("@sap/xsenv");
const xssec = require("@sap/xssec");
const xsHDBConn = require("@sap/hdbext");

const passport = require("passport");
const port = process.env.PORT || 3000;

//Initialize Express App for XS UAA and HDBEXT Middleware
const app = express();
//logging
app.use(morgan("dev"));
app.use(
	bodyParser.json({
		limit: "200mb"
	})
);
const logging = require("@sap/logging");
const appContext = logging.createAppContext();

const helmet = require("helmet");
// ...
app.use(helmet());
app.use(helmet.contentSecurityPolicy({
	directives: {
		defaultSrc: ["'self'"],
		styleSrc: ["'self'", "sapui5.hana.ondemand.com"],
		scriptSrc: ["'self'", "sapui5.hana.ondemand.com"]
	}
}));
// Sets "Referrer-Policy: no-referrer".
app.use(helmet.referrerPolicy({
	policy: "no-referrer"
}));

// passport.use("JWT", new xssec.JWTStrategy(xsenv.getServices({
// 	uaa: {
// 		tag: "xsuaa"
// 	}
// }).uaa));

app.use(logging.middleware({
	appContext: appContext,
	logNetwork: true
}));
// app.use(passport.initialize());
var hanaOptions = xsenv.getServices({
	hana: {
		tag: "hana"
	}
});
hanaOptions.hana.pooling = true;
app.use(
	// 	passport.authenticate("JWT", {
	// 		session: false
	// 	}),
	xsHDBConn.middleware(hanaOptions.hana)
);

//Compression
app.use(require("compression")({
	threshold: "1b"
}));
// Handling cors
const cors = require("cors");
app.use(cors());
// compress responses
app.use(compression());
app.use(function (req, res, next) {
	res.header("Access-Control-Allow-Origin", "*");
	res.header("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE");
	res.header(
		"Access-Control-Allow-Headers",
		"Origin, X-Requested-With, Content-Type, Accept"
	);
	next();
});

// app.get("/", async(req, res) => {
// 	try {
// 		const dbClass = require("sap-hdbext-promisfied")
// 		let db = new dbClass(req.db);
// 		const statement = await db.preparePromisified(`SELECT SESSION_USER, CURRENT_SCHEMA FROM "DUMMY"`)
// 		const results = await db.statementExecPromisified(statement, [])
// 		let result = JSON.stringify({
// 			Objects: results
// 		})
// 		return res.type("application/json").status(200).send(result)
// 	} catch (e) {
// 		return res.type("text/plain").status(500).send(`ERROR: ${e.toString()}`)
// 	}
// });
// //  TESTING STUFF 

// app.get("/env", (req, res) => {
// 	return res.type("application/json").status(200).send(JSON.stringify(process.env));
// });

// ROUTES

// news, events, faq routes
const adminnefRoutes = require("./router/nef");
const usernefRoutes = require("./router/nef");
app.use("/admin/action", adminnefRoutes);
app.use("/user/actions", usernefRoutes);

// documents 
// user 
// admin
// login and signup

// additional serivce
// 1. usersearch, 
// ASKHR

app.listen(port, () => {
	console.log(`Server listening on port: ${port}`);
});