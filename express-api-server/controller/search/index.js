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
				const searchquery = payload.QUERY == "null" || payload.QUERY == undefined ? "" : payload.QUERY
				tablename = "SCLABS_ALUMNIPORTAL_USERS_USERS"
				const schema = await utils.currentSchema({
					db
				})

				const query =
					`
					SELECT COUNT(*) as TOTALROWS FROM
					(SELECT
						A1."ID",
						A1."USER_ID",
						A1."GENDER",
						A1."DATE_OF_BIRTH",
						A1."DATE_OF_RESIGNATION",
						A1."LAST_WORKING_DAY_AS_PER_NOTICE_PERIOD",
						A1."PERSONAL_EMAIL_ID",
						A1."FIRST_NAME_PERSONAL_INFORMATION",
						A1."LAST_NAME_PERSONAL_INFORMATION",
						IFNULL(A1.MIDDLE_NAME_PERSONAL_INFORMATION,'') "MIDDLE_NAME_PERSONAL_INFORMATION",
						A1."NATIONALITY_PERSONAL_INFORMATION",
						A1."SALUTATION_PERSONAL_INFORMATION",
						IFNULL(A1.CITY_ADDRESSES,'') "CITY_ADDRESSES",
						IFNULL(A1.PHONE_NUMBER_PHONE_INFORMATION, '') "PHONE_NUMBER_PHONE_INFORMATION",
						IFNULL(A1.MANAGER_JOB_INFORMATION, '') "MANAGER_JOB_INFORMATION",
						IFNULL(A1.DESIGNATION_JOB_INFORMATION, '') "DESIGNATION_JOB_INFORMATION",
						IFNULL(A1.STATE, '') "STATE", 
						IFNULL(A1.COUNTRY, '') "COUNTRY",
						IFNULL(A1.PROFILEIMAGE, '') "PROFILEIMAGE",
						IFNULL(LINKEDIN, '') "LINKEDIN"
					FROM "${schema}"."SCLABS_ALUMNIPORTAL_USERS_USERS" as A1 WHERE CONTAINS (("USER_ID", "FIRST_NAME_PERSONAL_INFORMATION", "MIDDLE_NAME_PERSONAL_INFORMATION", "LAST_NAME_PERSONAL_INFORMATION"),'${searchquery}', FUZZY(0.8)))`
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

				const query =
					` SELECT count (*) as TOTALROWS FROM ( SELECT ID, SKILL FROM "${schema}"."SCLABS_ALUMNIPORTAL_SKILLS_SKILLS" WHERE CONTAINS ((SKILL),'${payload.QUERY}', FUZZY(0.2)))`
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
				res.status(200).send({
					status: "400",
					result: response.message
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
				tablename = "SCLABS_ALUMNIPORTAL_MASTERDATA_MASTERDATA"
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
				status: "500",
				result: error.message
			});
		}
	}
}