const jobservice = require("../../service/job/index.js")();
const dbClass = require("sap-hdbext-promisfied");
const utils = require("../../utils/database/index")();

module.exports = {
	createjob: async (req, res) => {
		try {
			const payload = req.body;
			let db = new dbClass(req.db);
			let response = await jobservice.createjob({
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
			res.type("application/json").status(500).send({
				status: "500",
				error: error.message
			});
		}

	},
	updatejob: async (req, res) => {
		try {
			const payload = req.body;
			let db = new dbClass(req.db);
			let response = await jobservice.updatejob({
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
			res.type("application/json").status(500).send({
				status: "500",
				error: error
			});
		}
	},
	getjob: async (req, res) => {

		try {
			const payload = req.query;
			let db = new dbClass(req.db);
			let response = await jobservice.getjob({
				payload,
				db
			});
			if (response) {
				if (response.length == 0) response = response

				const LIMIT = payload.LIMIT == undefined ? 10 : payload.LIMIT
				const OFFSET = payload.OFFSET == undefined ? 0 : payload.OFFSET
				tablename = "SCLABS_ALUMNIPORTAL_JOB_JOB"
				const schema = await utils.currentSchema({
					db
				})

				const query =
					` select count(*) as TOTALROWS from (SELECT * FROM "${schema}"."SCLABS_ALUMNIPORTAL_JOB_JOB" WHERE BOARDID = '_external') `

				const statement = await db.preparePromisified(query)
				const pagecount = await db.statementExecPromisified(statement, [])
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
					result: response
				});
			}

		} catch (error) {
			res.status(400).send({
				status: "400",
				result: error
			});
		}

	},
	deletejob: async (req, res) => {
		try {
			const payload = req.body;
			let db = new dbClass(req.db);
			let response = await jobservice.deletejob({
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
	createbulkjob: async (req, res) => {
		try {
			const payload = req.body;
			let db = new dbClass(req.db);
			let response = await jobservice.createbulkjob({
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
			res.type("application/json").status(500).send({
				status: "500",
				error: error
			});
		}

	},

}