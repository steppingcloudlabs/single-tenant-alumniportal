"use strict";

const express = require('express')
const bodyParser = require("body-parser");
const compression = require("compression");
const app = express()
const port = 3000
const helmet = require('helmet');
const cors = require("cors");
const log = require("cf-nodejs-logging-support");
//---------------------------------------------------------------------------------------------
// middlewares for CORS, bodyParser, helmet, compress responses.
//---------------------------------------------------------------------------------------------

app.use(cors());
app.disable('x-powered-by');
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

const routes = require("./routes/index.js");
app.use("/jobscheduler", routes);

app.listen(port, () => console.log(`Example app listening on port port!`))