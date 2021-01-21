/* eslint-disable */
const searchService = require("../../service/search")();
const dbClass = require("sap-hdbext-promisfied");
const utils = require("../../utils/database/index")();
module.exports = {
	user: async (req, res) => {
		try {
			const payload = req.query;
			let db = new dbClass(req.db);
			let response = await searchService.searchUser({
				payload,
				db
			});
			if (response) {
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
					result: response
				});
			}
		} catch (error) {
			req.logger.error(` Error for ${req.logger.getTenantId()} at admin/action/search/user ${error}`);
			res.status(400).send({
				status: "400",
				result: error
			});
		}
	},
	skill: async (req, res) => {
		try {
			const payload = req.query;
			let db = new dbClass(req.db);
			let response = await searchService.searchSkill({
				payload,
				db
			});

			if (response) {
				const LIMIT = payload.LIMIT == undefined ? 10 : payload.LIMIT
				const OFFSET = payload.OFFSET == undefined ? 0 : payload.OFFSET
				tablename = "SCLABS_ALUMNIPORTAL_SKILLS_SKILLS"
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
				res.status(200).send({
					status: "400",
					result: response
				});
			}
		} catch (error) {
			req.logger.error(` Error for ${req.logger.getTenantId()} at admin/action/search/skill ${error}`);
			res.status(200).send({
				status: "400",
				result: error
			});
		}

	},
	admin: async (req, res) => {
		try {
			const payload = req.query;
			let db = new dbClass(req.db);
			let response = await searchService.searchAdmin({
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
			res.status(400).send({
				status: "400",
				result: error
			});
		}

	},
	job: async (req, res) => {
		try {
			const payload = req.query;
			let db = new dbClass(req.db);
			let response = await searchService.searchJob({
				payload,
				db
			});
			if (response) {
				const LIMIT = payload.LIMIT == undefined ? 10 : payload.LIMIT
				const OFFSET = payload.OFFSET == undefined ? 0 : payload.OFFSET
				tablename = "SCLABS_ALUMNIPORTAL_JOB_JOB"
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
					result: response
				});
			}
		} catch (error) {
			req.logger.error(` Error for ${req.logger.getTenantId()} at admin/action/search/job ${error}`);
			res.status(400).send({
				status: "400",
				result: error
			});
		}
	},

	userids: async (req, res) => {
		try {
			const payload = req.query;
			let db = new dbClass(req.db);
			let response = await searchService.searchUserids({
				payload,
				db
			});
			if (response) {
				const LIMIT = payload.LIMIT == undefined ? 10 : payload.LIMIT
				const OFFSET = payload.OFFSET == undefined ? 0 : payload.OFFSET
				tablename = "SCLABS_ALUMNIPORTAL_JOB_JOB"
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
					result: response
				});
			}
		} catch (error) {
			req.logger.error(` Error for ${req.logger.getTenantId()} at admin/action/map/userid ${error}`);
			res.status(400).send({
				status: "400",
				result: error.message
			});
		}
	},

	getMapsProfile: async (req, res) => {
		try {
			const payload = req.query;
			let db = new dbClass(req.db);
			let response = await searchService.getMapsProfile({
				payload,
				db
			});
			if (response) {
				res.status(200).send({
					status: "200",
					result: response,
					pagination: {}
				});
			} else {
				res.status(400).send({
					status: "400",
					result: response
				});
			}

		} catch (error) {
			req.logger.error(` Error for ${req.logger.getTenantId()} at admin/action/map/profile ${error}`);
			res.status(500).send({
				status: "400",
				result: error.message
			});
		}
	}
}