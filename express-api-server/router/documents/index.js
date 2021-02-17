const expressrouter = require("express").Router();
const documentcontroller = require("../../controller/documents/index");
//document routers
expressrouter
	.route("/documents/get")
	.get((req, res, next) => documentcontroller.getdocuments(req, res, next));
expressrouter
	.route("/documents/create")
	.post((req, res, next) => documentcontroller.createdocuments(req, res, next));
expressrouter
	.route("/documents/update")
	.post((req, res, next) => documentcontroller.updatedocuments(req, res, next));
expressrouter
	.route("/documents/delete")
	.post((req, res, next) => documentcontroller.deletedocuments(req, res, next));
expressrouter
	.route("/documents/status")
	.get((req, res, next) => documentcontroller.statusdocuments(req, res, next));
expressrouter
	.route("/documents/create/sftp/count")
	.get((req, res, next) => documentcontroller.triggersftpdownload(req, res, next));
expressrouter
	.route("/documents/create/sftp/trigger")
	.get((req, res, next) => documentcontroller.triggerbulkupload(req, res, next));
expressrouter
	.route("/documents/create/sftp/status")
	.get((req, res, next) => documentcontroller.bulkuploadstatus(req, res, next));

module.exports = expressrouter;