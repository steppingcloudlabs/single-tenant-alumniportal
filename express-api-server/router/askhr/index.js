/**
 * ASKHR routes for admin with reporting middleware.
 */
const expressrouter = require("express").Router();
const askhradmincontroller = require("../../controller/askhr/index.js");
const {ticketclosedcout, ticketopencount} = require("../../middleware/reportingcollector/index")();

// Middlware that counts opend and close ticket.
expressrouter
	.route("/ticket/create")
	.post((req, res, next) =>{ticketopencount(req, res, next)},(req, res, next) => askhradmincontroller.createticket(req, res, next));
expressrouter
	.route("/ticket/update")
	.post((req, res, next) =>{ticketclosedcout(req, res, next)}, (req, res, next) => askhradmincontroller.updateticket(req, res, next));
expressrouter
	.route("/ticket/get")
	.get((req, res, next) => askhradmincontroller.getticket(req, res, next));
expressrouter
	.route("/ticket/delete")
	.post((req, res, next) => askhradmincontroller.deleteticket(req, res, next));

//  message routes
expressrouter
	.route("/ticket/message/get")
	.get((req, res, next) => askhradmincontroller.getmessage(req, res, next));
expressrouter
	.route("/ticket/message/create")
	.post((req, res, next) => askhradmincontroller.createmessage(req, res, next));
expressrouter
	.route("/ticket/message/update")
	.post((req, res, next) => askhradmincontroller.updatemessage(req, res, next));
expressrouter
	.route("/ticket/message/delete")
	.post((req, res, next) => askhradmincontroller.deletemessage(req, res, next));


//  Manager routes
expressrouter
	.route("/manager/create")
	.post((req, res, next) => askhradmincontroller.createmanager(req, res, next));
expressrouter
	.route("/manager/update")
	.post((req, res, next) => askhradmincontroller.updatemanager(req, res, next));
expressrouter
	.route("/manager/get")
	.get((req, res, next) => askhradmincontroller.getmanager(req, res, next));
expressrouter
	.route("/manager/profile/get")
	.get((req, res, next) => askhradmincontroller.getmanagerprofile(req, res, next));
expressrouter
	.route("/manager/delete")
	.post((req, res, next) => askhradmincontroller.deletemanager(req, res, next));

module.exports = expressrouter;