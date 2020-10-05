const express = require("express");
const app = express();
const xsHDBConn = require("@sap/hdbext");
const JWTtoken = require("./middleware/JWTtoken/tokenchecks")()

const logging = require("@sap/logging");
const appContext = logging.createAppContext();
const bodyParser = require('body-parser');

const cfenv = require('cfenv');
const appEnv = cfenv.getAppEnv();
const xsenv = require('@sap/xsenv');
xsenv.loadEnv();
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

const xssec = require('@sap/xssec');
const passport = require('passport');
passport.use('JWT', new xssec.JWTStrategy(services.uaa));
app.use(passport.initialize());
app.use(passport.authenticate('JWT', {
  session: false
}));

app.use(bodyParser.json());

const lib = require('./library');

const hdbext = require('@sap/hdbext');

// subscribe/onboard a subscriber tenant
app.put('/callback/v1.0/tenants/*', function (req, res) {
  let tenantHost = req.body.subscribedSubdomain + '-' + appEnv.app.space_name.toLowerCase().replace(/_/g, '-') + '-' + services.registry.appName.toLowerCase().replace(/_/g, '-');
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
  let tenantHost = req.body.subscribedSubdomain + '-' + appEnv.app.space_name.toLowerCase().replace(/_/g, '-') + '-' + services.registry.appName.toLowerCase().replace(/_/g, '-');
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
            let sqlstmt = `INSERT INTO "dev-alumniportal.db::tenantInfo" ("tenant", "timeStamp") VALUES('` + services.registry.appName + `-` + req.authInfo.subdomain + `-` + req.authInfo.identityZone + `', CURRENT_TIMESTAMP)`;
            db.exec(sqlstmt, function (err, results) {
              if (err) {
                console.log(err.message);
                res.status(500).send(err.message);
                return;
              }
              // query
              sqlstmt = 'SELECT * FROM "dev-alumniportal.db::tenantInfo"';
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

const environment = process.env.NODE_ENV || 'production';
/**
 * {RED COLOR} DO NO SKIP THIS {RED COLOR}:
 * 
 * While working in development environment, you need to create a HDI container which will be connected to this server, if its already created then attach that container to your deployed server. Based on the environment varibable 
 * the applcation will connect with either service-manager(multi-tenant) or a single container. 
 */
if (environment == 'production') {
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
} else {
  let hanaOptions = xsenv.getServices({
    hana: {
      tag: "hana"
    }
  });
  hanaOptions.hana.pooling = true;
  app.use(
    xsHDBConn.middleware(hanaOptions.hana)
  );
}

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


const port = process.env.PORT || 5001;
app.listen(port, function () {
  console.info('Listening on http://localhost:' + port);
});