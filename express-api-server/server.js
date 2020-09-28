  /*eslint no-console: 0*/
  "use strict";
  const express = require("express");

  const bodyParser = require("body-parser");
  const compression = require("compression");
  const xsenv = require("@sap/xsenv");
  const xssec = require("@sap/xssec");
  const xsHDBConn = require("@sap/hdbext");
  const JWTtoken = require("./middleware/JWTtoken/tokenchecks")()
  const passport = require("passport");
  const port = process.env.PORT || 3000;
  const lib = require('./library');
  const hdbext = require('@sap/hdbext');
  const cfenv = require('cfenv');
  const logging = require("@sap/logging");
  const appEnv = cfenv.getAppEnv();
  const appContext = logging.createAppContext();
  const helmet = require("helmet");
  // if using local envs
  xsenv.loadEnv();

  // getting credentionals of sap cloudfoundry services 
  const services = xsenv.getServices({
  	uaa: {
  		tag: 'xsuaa'
  	},
  	registry: {
  		tag: 'SaaS'
  	},
  	sm: {
  		label: 'service-manager'
  	},
  	dest: {
  		tag: 'destination'
  	}
  });

  //Initialize Express App.
  const app = express();

  //   Middleware injection to express app

  app.use(bodyParser.json());
  app.use(
  	bodyParser.json({
  		limit: "200mb"
  	})
  );
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


  app.use(
  	passport.authenticate("JWT", {
  		session: false
  	})
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
  //    HANA DATABASE CONNECTION WITH SM FOR MULTI_TENANT 
  app.use(function (req, res, next) {
  	if (req.authInfo.checkScope('$XSAPPNAME.User')) {
  		lib.getSMInstance(services.sm, services.registry.appName + '-' + req.authInfo.identityZone).then(
  			function (serviceBinding) {
  				if (!serviceBinding.hasOwnProperty('error')) {
  					let hanaOptions = serviceBinding.credentials;
  					hanaOptions.hana.pooling = true;
  					xsHDBConn.middleware(hanaOptions.hana)
  					next()
  				} else {
  					res.status(500).send(serviceBinding);
  				}
  			})
  	} else {
  		res.status(403).send('Forbidden');
  	}

  })

  //Multi-tenant SaaS registry endpoints 
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
  app.put('/callback/v1.0/tenants/*', function (req, res) {
  	let tenantHost = req.body.subscribedSubdomain + '-' + appEnv.app.space_name.toLowerCase().replace(/_/g, '-') + '-' + services.registry
  		.appName.toLowerCase().replace(/_/g, '-');
  	let tenantURL = 'https:\/\/' + tenantHost + /\.(.*)/gm.exec(appEnv.app.application_uris[0])[0];
  	console.log('Subscribe: ', req.body.subscribedSubdomain, req.body.subscribedTenantId, tenantHost, tenantURL);
  	lib.createRoute(tenantHost, services.registry.appName).then(
  		function (result) {
  			lib.createSMInstance(services.sm, services.registry.appName + '-' + req.body.subscribedTenantId).then(
  				async function (result) {
  						res.status(200).send(tenantURL);
  					},
  					function (err) {
  						console.log(err.stack);
  						res.status(500).send(err.message);
  					});
  		},
  		function (err) {
  			console.log(err.stack);
  			res.status(500).send(err.message);
  		});
  });
  // unsubscribe/offboard a subscriber tenant
  app.delete('/callback/v1.0/tenants/*', function (req, res) {
  	let tenantHost = req.body.subscribedSubdomain + '-' + appEnv.app.space_name.toLowerCase().replace(/_/g, '-') + '-' + services.registry
  		.appName.toLowerCase().replace(/_/g, '-');
  	console.log('Unsubscribe: ', req.body.subscribedSubdomain, req.body.subscribedTenantId, tenantHost);
  	lib.deleteRoute(tenantHost, services.registry.appName).then(
  		function (result) {
  			lib.deleteSMInstance(services.sm, services.registry.appName + '-' + req.body.subscribedTenantId).then(
  				function (result) {
  					res.status(200).send('');
  				},
  				function (err) {
  					console.log(err.stack);
  					res.status(500).send(err.message);
  				});
  		},
  		function (err) {
  			console.log(err.stack);
  			res.status(500).send(err.message);
  		});
  });
  // get reuse service dependencies
  app.get('/callback/v1.0/dependencies', function (req, res) {
  	let tenantId = req.params.tenantId;
  	let dependencies = [{
  		'xsappname': services.dest.xsappname
  	}];
  	console.log('Dependencies: ', tenantId, dependencies);
  	res.status(200).json(dependencies);
  });

  // app user info
  app.get('/srv/info', function (req, res) {
  	if (req.authInfo.checkScope('$XSAPPNAME.User')) {
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

  // app subscriptions
  app.get('/srv/subscriptions', function (req, res) {
  	if (req.authInfo.checkScope('$XSAPPNAME.Administrator')) {
  		lib.getSubscriptions(services.registry).then(
  			function (result) {
  				res.status(200).json(result);
  			},
  			function (err) {
  				console.log(err.stack);
  				res.status(500).send(err.message);
  			});
  	} else {
  		res.status(403).send('Forbidden');
  	}
  });

  // app database
  app.get('/srv/database', function (req, res) {
  	if (req.authInfo.checkScope('$XSAPPNAME.User')) {
  		// get DB instance
  		lib.getSMInstance(services.sm, services.registry.appName + '-' + req.authInfo.identityZone).then(
  			function (serviceBinding) {
  				if (!serviceBinding.hasOwnProperty('error')) {
  					// connect to DB instance
  					let hanaOptions = serviceBinding.credentials;
  					hdbext.createConnection(hanaOptions, function (err, db) {
  						if (err) {
  							console.log(err.message);
  							res.status(500).send(err.message);
  							return;
  						}
  						// insert
  						let sqlstmt = `INSERT INTO "test.db::tenantInfo" ("tenant", "timeStamp") VALUES('` + services.registry.appName + `-` + req.authInfo
  							.subdomain + `-` + req.authInfo.identityZone + `', CURRENT_TIMESTAMP)`;
  						db.exec(sqlstmt, function (err, results) {
  							if (err) {
  								console.log(err.message);
  								res.status(500).send(err.message);
  								return;
  							}
  							// query
  							sqlstmt = 'SELECT * FROM "test.db::tenantInfo"';
  							db.exec(sqlstmt, function (err, results) {
  								if (err) {
  									console.log(err.message);
  									res.status(500).send(err.message);
  									return;
  								}
  								res.status(200).json(results);
  							});
  						});
  					});
  				} else {
  					res.status(500).send(serviceBinding);
  				}
  			},
  			function (err) {
  				console.log(err.stack);
  				res.status(500).send(err.message);
  			});
  	} else {
  		res.status(403).send('Forbidden');
  	}
  });

  // destination reuse service
  app.get('/srv/destinations', function (req, res) {
  	if (req.authInfo.checkScope('$XSAPPNAME.User')) {
  		lib.getDestination(services.dest, req.authInfo.subdomain, req.query.destination).then(
  			function (result) {
  				// result contains the destination information for use in REST calls
  				res.status(200).json(result);
  			},
  			function (err) {
  				console.log(err.stack);
  				res.status(500).send(err.message);
  			});
  	} else {
  		res.status(403).send('Forbidden');
  	}
  });

  // Agency portal application routes    
  //user authorization routes
  const userauthRoutes = require("./router/auth/userindex.js");
  app.use("/user/auth", userauthRoutes);
  //tokenization: tokens check middleware
  app.use(JWTtoken)
  // Functional ROUTES
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
  // news, events and faq 
  const adminnefRoutes = require("./router/nef");
  const usernefRoutes = require("./router/nef");
  app.use("/admin/action", adminnefRoutes);
  app.use("/user/action", usernefRoutes);
  // documents 
  const admindocumentRoutes = require("./router/documents");
  const userdocumentRoutes = require("./router/documents/userindex.js");
  app.use("/admin/action", admindocumentRoutes);
  app.use("/user/action", userdocumentRoutes);
  // admin actions
  const adminactionRoutes = require("./router/admin");
  app.use("/admin/action", adminactionRoutes);
  //const adminuseractionRoutes = require("./router/users");
  // User actions
  const useractionRoutes = require("./router/users/index.js");
  app.use("/user/action", useractionRoutes);
  //search engine
  const searchRoutes = require("./router/search");
  app.use("/search", searchRoutes);

  app.listen(port, () => {
  	console.log(`Server listening on port: ${port}`);
  });
  module.exports = express;