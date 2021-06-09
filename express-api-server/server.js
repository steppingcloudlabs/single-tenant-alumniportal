"use strict";
const express = require("express");
require('dotenv').config()
const bodyParser = require("body-parser")
const compression = require("compression");
const xsenv = require("@sap/xsenv");
const xssec = require("@sap/xssec");
const xsHDBConn = require("@sap/hdbext");
const passport = require("passport");
const admintokenchecker = require('./middleware/JWTtoken/admintokencheck')
const usertokenchecker = require('./middleware/JWTtoken/tokenchecks')
const port = process.env.PORT || 8000;
const helmet = require('helmet');
const cors = require("cors");
const log = require("cf-nodejs-logging-support");
const upload = require('express-fileupload')
// hashing algo.
const bcrypt = require('bcryptjs');
const saltRounds = 10;

const app = express();
//---------------------------------------------------------------------------------------------
// middlewares for CORS, bodyParser, helmet, compress responses.
//---------------------------------------------------------------------------------------------

app.use(cors());
app.use(bodyParser.json({ limit: '1024MB' }));
app.use(bodyParser.urlencoded({ limit: '1024MB', extended: true }));
app.disable('x-powered-by');
app.use(upload())
app.use(helmet());
app.use(helmet.xssFilter());
app.use(helmet.frameguard());
app.use(helmet.referrerPolicy({ policy: "no-referrer" }));
app.use(require("compression")({ threshold: "1024mb" }));
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

//---------------------------------------------------------------------------------------------
// Passport injection for app router integration and secure Hana Database connection.
//---------------------------------------------------------------------------------------------
xsenv.loadEnv();
app.use(passport.initialize());
passport.use("JWT", new xssec.JWTStrategy(xsenv.getServices({
  uaa: {
    tag: "xsuaa"
  }
}).uaa));

//---------------------------------------------------------------------------------------------
// Logging configuration for SAP Hana Cloud Platfrom.
//---------------------------------------------------------------------------------------------

log.setLoggingLevel("info");
log.setLogPattern("{{written_at}} - {{msg}}");
app.use(log.logNetwork);

//---------------------------------------------------------------------------------------------
// SAP Hana Database Configuration and connection injection into request object.
//---------------------------------------------------------------------------------------------
var hanaOptions = xsenv.getServices(
  {
    hana: {
      tag: "hana"
    }
  }
);
hanaOptions.hana.pooling = true;
app.use(
  // passport.authenticate("JWT", {
  //   session: false
  // }),
  xsHDBConn.middleware(hanaOptions.hana)
);

//---------------------------------------------------------------------------------------------
// Application Test Routes for dataabse access 
//---------------------------------------------------------------------------------------------


app.get("/", async (req, res) => {
  try {
    console.log(req.user)
    const dbClass = require("sap-hdbext-promisfied")
    let db = new dbClass(req.db);
    const statement = await db.preparePromisified(`SELECT SESSION_USER, CURRENT_SCHEMA FROM "DUMMY"`)
    const results = await db.statementExecPromisified(statement, [])
    let result = JSON.stringify({
      Objects: results
    })
    return res.type("application/json").status(200).send(result)
  } catch (e) {
    req.logger.error(e)
    return res.type("application/json").status(500).send(`ERROR: ${e.toString()}`)
    
  }
});


//---------------------------------------------------------------------------------------------
// Applcation init route, created a ROOT admin user which can be used for creating admin.
// Planing is to improve this thing ( In new deployment this api is the only way to create admin, this api has no security checks) 
//---------------------------------------------------------------------------------------------
app.get("/initialize", async (req, res, next) => {
  try {
    const dbClass = require("sap-hdbext-promisfied")
    const utils = require("./utils/database/index.js")();
    let db = new dbClass(req.db);
    const schema = await utils.currentSchema({ db });

    let query = `SELECT * FROM "${schema}"."SCLABS_ALUMNIPORTAL_ADMINAUTH_ADMINLOGIN"`

    let statement = await db.preparePromisified(query)
    let result = await db.statementExecPromisified(statement, [])
    return res.type("application/json").status(200).send(JSON.stringify({ results: result }))
  } catch (e) {
    req.logger.error(e)
    return res.type("application/json").status(500).send(`ERROR: ${e.toString()}`)
  }
})
//---------------------------------------------------------------------------------------------
// Applcation init route, created a ROOT admin user which can be used for creating admin.
// Planing is to improve this thing ( In new deployment this api is the only way to create admin, this api has no security checks) 
//---------------------------------------------------------------------------------------------
app.post("/initialize", async (req, res, next) => {
  try {
    const dbClass = require("sap-hdbext-promisfied")
    const uuid = require("uuid");
    const utils = require("./utils/database/index.js")();
    let db = new dbClass(req.db);
    let createdat = new Date().toISOString();
    let createdby = "admin";
    let modifiedby = "admin";
    let modifiedat = new Date().toISOString();
    let FIRSTNAME = req.body.FIRSTNAME;
    let LASTNAME = req.body.LASTNAME;
    let USERTYPE = req.body.USERTYPE;
    let PASSWORD = req.body.PASSWORD;
    let USERID = uuid();
    let EMAIL = req.body.EMAIL;
    let ID = uuid();
    let schema = await utils.currentSchema({ db });

    const query1 =
							`INSERT INTO "${schema}"."SCLABS_ALUMNIPORTAL_PERSONALINFORMATION_ADMIN_HR_PERSONALINFORMATION" VALUES(
							'${createdat}',
							'${createdby}',
							'${modifiedat}',
							'${modifiedby}',
							'${ID}',	
							'${FIRSTNAME}',
							'${LASTNAME}',
							'${EMAIL}',
							'${USERTYPE}',
							'${USERID}'
							)`
		const statement1 = await db.preparePromisified(query1)
		const results1 = await db.statementExecPromisified(statement1, [])

    if(results1 == 1){
      const HASHPASSWORD = await bcrypt.hash(PASSWORD, saltRounds);
      let query = `INSERT INTO "${schema}"."SCLABS_ALUMNIPORTAL_ADMINAUTH_ADMINLOGIN" VALUES(
                        '${createdat}',
                        '${createdby}',
                        '${modifiedat}',
                        '${modifiedby}',
                        '${ID}'/*ID <NVARCHAR(36)>*/,
                        '${USERID}',
                        '${EMAIL}'/*USERNAME <NVARCHAR(5000)>*/,
                        '${HASHPASSWORD}'/*PASSWORD <NVARCHAR(5000)>*/,
                        '${USERTYPE}',
                        ''
                          )`
  
      let statement = await db.preparePromisified(query)
      let result = await db.statementExecPromisified(statement, [])
      return res.type("application/json").status(200).send(JSON.stringify({ results: result }))
    }else{
      return res.type("application/json").status(200).send(JSON.stringify({ results: "Not able to create superadmin" }))
    }
    
  } catch (e) {
    req.logger.error(e)
    return res.type("application/json").status(500).send(`ERROR: ${e.toString()}`)
  }
})

//---------------------------------------------------------------------------------------------
// Applcation init route, created a ROOT admin user which can be used for creating admin.
// Planing is to improve this thing ( In new deployment this api is the only way to create admin, this api has no security checks) 
//---------------------------------------------------------------------------------------------
app.delete("/initialize", async (req, res, next) => {
  try {
    const dbClass = require("sap-hdbext-promisfied")
    const uuid = require("uuid");
    const utils = require("./utils/database/index.js")();
    let db = new dbClass(req.db);
    let EMAIL = req.body.EMAIL;
    let ID = uuid();
    const schema = await utils.currentSchema({ db });
    let query = `DELETE FROM "${schema}"."SCLABS_ALUMNIPORTAL_ADMINAUTH_ADMINLOGIN" WHERE USERNAME = '${EMAIL}'`
    let statement = await db.preparePromisified(query)
    let result = await db.statementExecPromisified(statement, [])

    query = `DELETE FROM "${schema}"."SCLABS_ALUMNIPORTAL_PERSONALINFORMATION_ADMIN_HR_PERSONALINFORMATION" WHERE EMAIL = '${EMAIL}'`
    statement = await db.preparePromisified(query)
    result = await db.statementExecPromisified(statement, [])
    return res.type("application/json").status(200).send(JSON.stringify({ results: result }))
  } catch (e) {
    req.logger.error(e)
    return res.type("application/json").status(500).send(`ERROR: ${e.toString()}`)
  }
})

//---------------------------------------------------------------------------------------------
// Common Authentication and Authorization routes for User, Admin and HR.
//---------------------------------------------------------------------------------------------
const auth = require('./router/auth/main');
app.use("/auth", auth);
//---------------------------------------------------------------------------------------------
//  Authentication  routes for Integration users.
//---------------------------------------------------------------------------------------------
const integrationAuth = require('./router/auth/integration.auth');
app.use("/integration/auth", integrationAuth);

const bulkjobs = require("./router/job");
app.use("/integration", bulkjobs);

const documentsjobs = require("./router/bulk");
app.use("/integration", documentsjobs);

const ses = require('./router/ses');
app.use("/aws", ses);
app.use(function (req, res, next) {
  if (req.get("x-amz-sns-message-type")) {
    req.headers["content-type"] = "application/json"; //IMPORTANT, otherwise content-type is text for topic confirmation reponse, and body is empty
  }
  next();
});

//---------------------------------------------------------------------------------------------
// Admin Routes that for managing Alumni portal data.
//---------------------------------------------------------------------------------------------
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
const adminsftp = require("./router/sftp/index")

app.use("/admin/auth", adminauthRoutes);
app.use("/admin/action", admintokenchecker, adminactionRoutes);
app.use("/admin/action", admintokenchecker, adminskillsRoutes);
app.use("/admin/action", admintokenchecker, adminjobRoutes);
app.use("/admin/action", admintokenchecker, adminnefRoutes);
app.use("/admin/action", admintokenchecker, adminuseractionRoutes)
app.use("/admin/action", admintokenchecker, admindocumentRoutes);
app.use("/admin/action/search", admintokenchecker, searchRoutes);
app.use("/admin/action", admintokenchecker, successfactorsRoutes);
app.use("/admin/action/askhr", admintokenchecker, askhradminroutes);
app.use("/admin/action/sftp", admintokenchecker, adminsftp);

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

//---------------------------------------------------------------------------------------------
// Reporting and stats routes of application.
//---------------------------------------------------------------------------------------------

const reportingRoutes = require("./router/reporting/index.js");
app.use("/admin/reports", admintokenchecker, reportingRoutes);

module.exports = app.listen(port, () => {
  console.log(`Server listening on port: ${port}`);
});