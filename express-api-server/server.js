/*eslint no-console: 0*/
"use strict";
const express = require("express");
const bodyParser = require("body-parser");
const compression = require("compression");
const xsenv = require("@sap/xsenv");
const xssec = require("@sap/xssec");
xsenv.loadEnv("D:\\steppingcloud\\github\\single-tenant-alumniportal\\express-api-server\\default-env.json");
const xsHDBConn = require("@sap/hdbext");
const passport = require("passport");
const admintokenchecker = require('./middleware/JWTtoken/admintokencheck')
const usertokenchecker = require('./middleware/JWTtoken/tokenchecks')
const port = process.env.PORT || 8000;
const helmet = require('helmet');
// Handling cors
const cors = require("cors");

//Initialize Express App for XS UAA and HDBEXT Middleware
const app = express();
app.use(cors());
app.use(bodyParser.json({
  limit: '1024mb'
}));
app.use(bodyParser.urlencoded({
  limit: '1024mb',
  extended: true
}));
app.disable('x-powered-by');

// ...
app.use(helmet());
app.use(helmet.xssFilter());
app.use(helmet.frameguard());
// Sets "Referrer-Policy: no-referrer".
app.use(helmet.referrerPolicy({
  policy: "no-referrer"
}));

// passport.use("JWT", new xssec.JWTStrategy(xsenv.getServices({
//   uaa: {
//     tag: "xsuaa"
//   }
// }).uaa));

const log = require("cf-nodejs-logging-support");
log.setLoggingLevel("info");
log.setLogPattern("{{written_at}} - {{msg}}");
app.use(log.logNetwork);
//app.use(passport.initialize());
var hanaOptions = xsenv.getServices({
  hana: {
    tag: "hana"
  }
});
hanaOptions.hana.pooling = true;

app.use(
  // passport.authenticate("JWT", {
  //   session: false
  // }),
  xsHDBConn.middleware(hanaOptions.hana)
);

//Compression
app.use(require("compression")({
  threshold: "1b"
}));

// compress responses
app.use(compression());
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET,HEAD,PUT,PATCH,POST,DELETE");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

app.get("/", async (req, res) => {
  try {
    const dbClass = require("sap-hdbext-promisfied")
    let db = new dbClass(req.db);
    console.log(db);
    const statement = await db.preparePromisified(`SELECT SESSION_USER, CURRENT_SCHEMA FROM "DUMMY"`)
    const results = await db.statementExecPromisified(statement, [])
    let result = JSON.stringify({
      Objects: results
    })
    return res.type("application/json").status(200).send(result)
  } catch (e) {
    return res.type("application/json").status(500).send(`ERROR: ${e.toString()}`)
  }
});

app.get("/admin/action/info", async (req, res) => {

  let info = {
    'userInfo': req.authInfo.userInfo,
    'subdomain': req.authInfo.subdomain,
    'tenantId': req.authInfo.identityZone
  };
  res.status(200).json(info);

});

app.get("/user/action/info", async (req, res) => {
  if (req.authInfo.checkScope('$XSAPPNAME.Administrator')) {
    let info = {
      'userInfo': req.authInfo.userInfo,
      'subdomain': req.authInfo.subdomain,
      'tenantId': req.authInfo.identityZone
    };
    res.status(200).json(info);
  } else {
    res.status(403).send('Forbidden');
  }
});

const auth = require('./router/auth/index');
app.use("/auth", auth);

// ADMIN ROUTES 
const adminskillsRoutes = require("./router/skills");
const adminjobRoutes = require("./router/job");
const adminnefRoutes = require("./router/nef");
const admindocumentRoutes = require("./router/documents");
const adminactionRoutes = require("./router/admin/");
const adminuseractionRoutes = require("./router/admin/indexuser.js");
const searchRoutes = require("./router/search/adminindex");
const successfactorsRoutes = require("./router/successfactors");
const askhradminroutes = require("./router/askhr")
const adminauthRoutes = require("./router/auth/index.js");

app.use("/admin/auth", adminauthRoutes);
app.use("/admin/action", admintokenchecker, adminactionRoutes);
app.use("/admin/action", admintokenchecker, adminskillsRoutes);
app.use("/admin/action", admintokenchecker, adminjobRoutes);
app.use("/admin/action", admintokenchecker, adminnefRoutes);
app.use("/admin/action", admintokenchecker, adminuseractionRoutes)
app.use("/admin/action", admintokenchecker, admindocumentRoutes);
app.use("/admin/action/search", admintokenchecker, searchRoutes);
app.use("/admin/action", admintokenchecker, successfactorsRoutes)
app.use("/admin/action/askhr", admintokenchecker, askhradminroutes)
//USER ROUTES

//app.use(JWTtoken)     // express middleware for usertoken verfication
const userauthRoutes = require("./router/auth/userindex.js");
const userskillsRoutes = require("./router/skills/userindex.js");
const userjobRoutes = require("./router/job/userindex.js");
const userdocumentRoutes = require("./router/documents/userindex.js");
const useractionRoutes = require("./router/users/index.js");
const usernefRoutes = require("./router/nef");
const askhruserroutes = require("./router/askhr/indexuser.js")
const searchuserRoutes = require("./router/search/index")
app.use("/user/auth", userauthRoutes);
app.use("/user/action", usertokenchecker, userskillsRoutes);
app.use("/user/action", usertokenchecker, userjobRoutes);
app.use("/user/action", usertokenchecker, usernefRoutes);
app.use("/user/action", usertokenchecker, userdocumentRoutes);
app.use("/user/action", usertokenchecker, useractionRoutes);
app.use("/user/action/askhr", usertokenchecker, askhruserroutes);
app.use("/search", usertokenchecker, searchuserRoutes);
app.listen(port, () => {
  console.log(`Server listening on port: ${port}`);
});
module.exports = express;