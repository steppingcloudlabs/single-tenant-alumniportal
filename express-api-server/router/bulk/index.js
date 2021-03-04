const expressrouter = require("express").Router();
const objectstorcontroller = require("../../controller/bulk/index");

expressrouter
    .route("/document/objectstore/etl")
    .post((req, res, next) => objectstorcontroller.createETLJob(req, res, next));
module.exports = expressrouter;