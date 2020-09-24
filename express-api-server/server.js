  /*eslint no-console: 0*/
  "use strict";
  const express = require("express");
  const morgan = require("morgan");
  const bodyParser = require("body-parser");
  const compression = require("compression");
  const xsenv = require("@sap/xsenv");
  const xssec = require("@sap/xssec");
  const xsHDBConn = require("@sap/hdbext");
  const JWTtoken = require("./middleware/JWTtoken/tokenchecks")()
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

  passport.use("JWT", new xssec.JWTStrategy(xsenv.getServices({
    uaa: {
      tag: "xsuaa"
    }
  }).uaa));
  app.use(passport.initialize());

  app.use(logging.middleware({
    appContext: appContext,
    logNetwork: true
  }));

  var hanaOptions = xsenv.getServices({
    hana: {
      tag: "hana"
    }
  });
  hanaOptions.hana.pooling = true;
  app.use(
    passport.authenticate("JWT", {
      session: false
    }),
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
  //multi-tenant SaaS registry endpoints 
  app.get("/tenantinfo", function (req, res) {
    var responseStr = "<!DOCTYPE HTML><html><head><title>MTApp</title></head><body><h1>MTApp</h1><h2>Welcome " + req.authInfo.userInfo.givenName +
      " " + req.authInfo.userInfo.familyName + "!</h2><p><b>Subdomain:</b> " + req.authInfo.subdomain + "</p><p><b>Identity Zone:</b> " + req.authInfo
      .identityZone + "</p></body></html>";
    res.status(200).send(responseStr);
  });

  // subscribe/onboard a subscriber tenant
  app.put("/callback/v1.0/tenants/*", function (req, res) {
    var tenantAppURL = "https:\/\/" + req.body.subscribedSubdomain + "-dev-alumniportal-ui" + ".cfapps.eu10.hana.ondemand.com";
    res.status(200).send(tenantAppURL);
  });

  // unsubscribe/offboard a subscriber tenant
  app.delete("/callback/v1.0/tenants/*", function (req, res) {
    res.status(200).send("");
  });
  // server env variables.
  app.get("/env", (req, res) => {
    return res.type("application/json").status(200).send(JSON.stringify(process.env));
  });
  app.get("/", async (req, res) => {
    try {
      const dbClass = require("sap-hdbext-promisfied")
      let db = new dbClass(req.db);
      const statement = await db.preparePromisified(`SELECT SESSION_USER, CURRENT_SCHEMA FROM "DUMMY"`)
      const results = await db.statementExecPromisified(statement, [])
      let result = JSON.stringify({
        Objects: results
      })
      return res.type("application/json").status(200).send(result)
    } catch (e) {
      return res.type("text/plain").status(500).send(`ERROR: ${e.toString()}`)
    }
  });


  //user authorization routes
  const userauthRoutes = require("./router/auth/userindex.js");
  app.use("/user/auth", userauthRoutes);
  //tokenization: tokens check middleware
  app.use(JWTtoken)
  // ROUTES
  //skills
  const adminskillsRoutes = require("./router/skills");
  const userskillsRoutes = require("./router/skills/userindex.js");
  app.use("/admin/action", adminskillsRoutes);
  app.use("/user/action", userskillsRoutes);
  //jobs
  const adminjobRoutes = require("./router/job");
  const userjobRoutes = require("./router/job/userindex.js");
  app.use("/admin/action", adminjobRoutes);
  app.use("/user/action", userjobRoutes);
  // news, events, faq routes
  const adminnefRoutes = require("./router/nef");
  const usernefRoutes = require("./router/nef");
  app.use("/admin/action", adminnefRoutes);
  app.use("/user/action", usernefRoutes);

  // documents 
  const admindocumentRoutes = require("./router/documents");
  const userdocumentRoutes = require("./router/documents/userindex.js");
  app.use("/admin/action", admindocumentRoutes);
  app.use("/user/action", userdocumentRoutes);
  //----------------------------------------------------------------------------------------------------------------------------------------------------------------------------
  // TODO SANA
  // admin 
  const adminactionRoutes = require("./router/admin");
  app.use("/admin/action", adminactionRoutes);

  // TODO Maazzzzz
  // user
  //const adminuseractionRoutes = require("./router/users");
  const useractionRoutes = require("./router/users/index.js");
  app.use("/user/action", useractionRoutes);

  // TODO Maazzzz


  // TODO PD
  // ADDITIONAL SERVICES 

  //usersearch
  const searchRoutes = require("./router/search");
  app.use("/search", searchRoutes);

  // ASKHR
  //NEED TO BE BUILD AS A SAPERATE PRODUCT.
  //skills

  app.listen(port, () => {
    console.log(`Server listening on port: ${port}`);
  });
  module.exports = express;