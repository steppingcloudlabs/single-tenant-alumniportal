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
app.use(bodyParser.urlencoded());
app.use(bodyParser.json());
app.use(bodyParser.json({ limit: '1024mb' }));
app.use(bodyParser.urlencoded({ limit: '1024mb', extended: true, parameterLimit: Infinity }));
app.use(express.json({ limit: '1024mb' }));
app.use(express.urlencoded({ limit: '1024mb' }));
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

app.listen(port, () => console.log(`Example app listening on port port!`))