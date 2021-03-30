/* eslint-disable */
const nefserivce = require("../../service/nef")();
const dbClass = require("sap-hdbext-promisfied");
const utils = require("../../utils/database/index")();
module.exports = {
	// News Controllers
	getnews: async (req, res) => {
		try {
			const payload = req.query;
			const logger = req.logger;
			let db = new dbClass(req.db);
			let response = await nefserivce.viewnews({
				payload,
				logger,
				db
			});

			if (response) {
				if (response.length == 0) response = response

				const LIMIT = payload.LIMIT == undefined ? 10 : payload.LIMIT
				const OFFSET = payload.OFFSET == undefined ? 0 : payload.OFFSET
				tablename = "SCLABS_ALUMNIPORTAL_USERS_USERS"
				const schema = await utils.currentSchema({
					db
				})

				let pagecount = await utils.getPageCount({
					schema,
					tablename,
					db
				})
				paginationobject = {
					'TOTALPAGES': Math.ceil(pagecount[0].TOTALROWS / LIMIT),
					'LIMIT': parseInt(LIMIT),
					'OFFSET': parseInt(OFFSET)
				}
				res.status(200).send({
					status: "200",
					result: response,
					pagination: paginationobject
				});
			} else {
				res.status(400).send({
					status: "400",
					result: `${e.toString()}`
				});
			}
		} catch {
			req.logger.error(` Error for ${req.logger.getTenantId()} at admin/action/index/updatenews ${error}`);
			res.type("application/json").status(400).send({
				status: "400",
				result: response
			})
		}
	},

	createnews: async (req, res) => {
		try {
			const payload = req.body;
			let db = new dbClass(req.db);
			let response = await nefserivce.createnews({
				payload,
				db
			});
			if (response) {
				res.type("application/json").status(200).send({
					status: "200",
					result: response
				});
			} else {
				res.type("application/json").status(200).send({
					status: "400",
					result: response
				});

			}
		} catch (error) {
			res.type("application/json").status(500).send({
				status: "500",
				error: error.message
			});
		}

	},
	updatenews: async (req, res) => {
		try {
			const payload = req.body;
			let db = new dbClass(req.db);
			let response = await nefserivce.updatenews({
				payload,
				db
			});
			if (response) {
				res.type("application/json").status(200).send({
					status: "200",
					result: response
				});
			} else {
				res.type("application/json").status(200).send({
					status: "400",
					result: response
				});

			}

		} catch (error) {
			res.type("application/json").status(200).send({
				status: "500",
				result: error
			});
		}

	},
	deletenews: async (req, res) => {
		try {

			const payload = req.body;
			let db = new dbClass(req.db);

			let response = await nefserivce.deletenews({
				payload,
				db
			});

			if (response) {
				res.type("application/json").status(200).send({
					status: "200",
					result: response
				});
			} else {
				res.type("application/json").status(200).send({
					status: "500",
					result: "Error"
				});

			}
		} catch (error) {
			res.status(200).send({
				status: "400",
				result: "Element Not Found"
			});
		}
	},
	//  FAQ CONTROLLERS 

	getfaq: async (req, res) => {
		try {
			const payload = req.query;
			let db = new dbClass(req.db);
			const logger = req.logger;
			const schema = await utils.currentSchema({
				db
			})
			let response = await nefserivce.viewfaq({
				payload,
				db,
				schema
			});
			if (response) {
				if (response.length == 0) response = response

				const LIMIT = payload.LIMIT == undefined ? 10 : payload.LIMIT
				const OFFSET = payload.OFFSET == undefined ? 0 : payload.OFFSET
				tablename = "SCLABS_ALUMNIPORTAL_FAQ_FAQ"

				let pagecount = await utils.getPageCount({
					schema,
					tablename,
					db
				})
				paginationobject = {
					'TOTALPAGES': Math.ceil(pagecount[0].TOTALROWS / LIMIT),
					'LIMIT': parseInt(LIMIT),
					'OFFSET': parseInt(OFFSET)
				}
				res.type("application/json").status(200).send({
					status: "200",
					result: response,
					pagination: paginationobject
				});
			} else {
				res.type("application/json").status(400).send({
					status: "400",
					result: response
				});
			};
		} catch (error) {
			req.logger.error(` Error for ${req.logger.getTenantId()} at admin/action/index/updatefaq ${error}`);
			res.status(500).send({
				status: "500",
				result: error
			});
		}
	},

	createfaq: async (req, res) => {
		try {
			const payload = req.body;
			let db = new dbClass(req.db);
			let response = await nefserivce.createfaq({
				payload,
				db
			});

			if (response) {
				res.status(200).send({
					status: "200",
					result: response,
				});
			} else {
				res.status(400).send({
					status: "400",
					result: response
				});
			}
		} catch (error) {
			res.status(200).send({
				status: "400",
				result: error
			});
		}

	},
	updatefaq: async (req, res) => {
		try {
			const payload = req.body;
			let db = new dbClass(req.db);
			let response = await nefserivce.updatefaq({
				payload,
				db
			});

			if (response) {
				res.status(200).send({
					status: "200",
					result: response,
				});
			} else {
				res.status(400).send({
					status: "400",
					result: `${e.toString()}`
				});
			}
		} catch (error) {
			res.status(200).send({
				status: "400",
				result: error
			});
		}

	},
	deletefaq: async (req, res) => {
		try {
			const payload = req.body;
			let db = new dbClass(req.db);
			let response = await nefserivce.deletefaq({
				payload,
				db
			});
			if (response) {
				res.status(200).send({
					status: "200",
					result: response,
				});
			}
		} catch (error) {
			res.status(200).send({
				status: "400",
				result: "Element Not Found"
			});
		}
	},
	//Event COntroller
	//Responsibility by Maaz
	getevent: async (req, res) => {
		try {
			const payload = req.query;
			let db = new dbClass(req.db);
			const logger = req.logger;
			let response = await nefserivce.getevent({
				payload,
				logger,
				db
			});
			if (response) {
				if (response.length == 0) response = response

				const LIMIT = payload.LIMIT == undefined ? 10 : payload.LIMIT
				const OFFSET = payload.OFFSET == undefined ? 0 : payload.OFFSET
				tablename = "SCLABS_ALUMNIPORTAL_EVENTS_EVENTS"
				const schema = await utils.currentSchema({
					db
				})

				let pagecount = await utils.getPageCount({
					schema,
					tablename,
					db
				})
				paginationobject = {
					'TOTALPAGES': Math.ceil(pagecount[0].TOTALROWS / LIMIT),
					'LIMIT': parseInt(LIMIT),
					'OFFSET': parseInt(OFFSET)
				}
				res.type("application/json").status(200).send({
					status: "200",
					result: response,
					pagination: paginationobject
				});
			}
		} catch (error) {
			req.logger.error(` Error for ${req.logger.getTenantId()} at admin/action/index/updateevent ${error}`);
			res.type("application/json").status(400).send({
				status: "400",
				result: error
			});
		}
	},

	createevent: async (req, res) => {
		try {
			const payload = req.body;
			let db = new dbClass(req.db);
			let response = await nefserivce.createevent({
				payload,
				db
			});

			if (response) {
				res.type("application/json").status(200).send({
					status: "200",
					result: response
				});
			} else {
				res.type("application/json").status(200).send({
					status: "500",
					result: "Error"
				});

			}
		} catch (error) {
			res.type("application/json").status(200).send({
				status: "500",
				result: error
			});
		}

	},
	updateevent: async (req, res) => {
		try {
			const payload = req.body;
			let db = new dbClass(req.db);
			let response = await nefserivce.updateevent({
				payload,
				db
			});

			if (response) {
				res.type("application/json").status(200).send({
					status: "200",
					result: response
				});
			} else {
				res.type("application/json").status(200).send({
					status: "400",
					result: response
				});

			}

		} catch (error) {
			res.type("application/json").status(500).send({
				status: "500",
				error: error
			});
		}

	},
	deleteevent: async (req, res) => {
		try {
			const payload = req.body;
			let db = new dbClass(req.db);
			let response = await nefserivce.deleteevent({
				payload,
				db
			});
			if (response) {
				res.status(200).send({
					status: "200",
					result: response,
				});
			}
		} catch (error) {
			res.status(200).send({
				status: "400",
				result: "Element Not Found"
			});
		}
	},
}