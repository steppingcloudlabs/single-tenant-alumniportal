const expressrouter = require("express").Router();
const documentcontroller = require("../../controller/documents/index");
const {documentuploadcount} = require("../../middleware/reportingcollector/index")();

//document routers
expressrouter
	.route("/documents/get")
	.get((req, res, next) => documentcontroller.getdocuments(req, res, next));
expressrouter
	.route("/documents/create")
	.post((req, res, next) =>{documentuploadcount(req, res, next)}, (req, res, next) => documentcontroller.createdocuments(req, res, next));
expressrouter
	.route("/documents/update")
	.post((req, res, next) => documentcontroller.updatedocuments(req, res, next));
expressrouter
	.route("/documents/delete")
	.post((req, res, next) => documentcontroller.deletedocuments(req, res, next));
expressrouter
	.route("/documents/status")
	.get((req, res, next) => documentcontroller.statusdocuments(req, res, next));
// <----------------------BULK UPLOAD ROUTES ----------------------------->

// These routes required for uploading zip file on S3.
expressrouter
	.route("/documents/create/_bulk/getuploadid")
	.get((req, res, next) => documentcontroller.getuploadid(req, res, next));
expressrouter
	.route("/documents/create/_bulk/getuploadurl")
	.get((req, res, next) => documentcontroller.getuploadurl(req, res, next));
expressrouter
	.route("/documents/create/_bulk/complete")
	.post((req, res, next) => documentcontroller.complete(req, res, next));
// This routes triggers a function which run the extraction and insertion job in the background.
expressrouter
	.route("/documents/create/jobs/trigger")
	.post((req, res, next) => documentcontroller.trigger(req, res, next));

// These are reporting routes for Document bulk upload.
expressrouter
	.route("/documents/create/jobs/get")
	.get((req, res, next) => documentcontroller.getAllJobs(req, res, next));
expressrouter
	.route("/documents/create/jobs/logs")
	.get((req, res, next) => documentcontroller.getJobLogs(req, res, next));

module.exports = expressrouter;