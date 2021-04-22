/* eslint-disable */
const searchService = require("../../service/search/adminindex")();
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
    masterdata: async (req, res) => {
        try {
            const payload = req.query;
            let db = new dbClass(req.db);
            let response = await searchService.searchmasterdata({
                payload,
                db
            });
            if (response) {
                const LIMIT = (payload.LIMIT == undefined || payload.LIMIT == '') ? 10 : payload.LIMIT
                const OFFSET = (payload.OFFSET == undefined || payload.OFFSET == '') ? 0 : payload.OFFSET
                tablename = "SCLABS_ALUMNIPORTAL_MASTERDATA_MASTERDATA"
                const schema = await utils.currentSchema({
                    db
                })
                if (payload.QUERY == "null" || payload.QUERY == "undefined" || payload.QUERY == undefined || payload.QUERY == "" || payload.QUERY.length == 0) {
                    let query = `
                    SELECT COUNT(*) as TOTALROWS FROM (Select  "USER_ID", "FIRST_NAME_PERSONAL_INFORMATION", "MIDDLE_NAME_PERSONAL_INFORMATION", "LAST_NAME_PERSONAL_INFORMATION"
                    FROM "${schema}"."SCLABS_ALUMNIPORTAL_MASTERDATA_MASTERDATA")`
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
                    let query = `
                    SELECT COUNT(*) as TOTALROWS FROM (Select  "USER_ID", "FIRST_NAME_PERSONAL_INFORMATION", "MIDDLE_NAME_PERSONAL_INFORMATION", "LAST_NAME_PERSONAL_INFORMATION"
                    FROM "${schema}"."SCLABS_ALUMNIPORTAL_MASTERDATA_MASTERDATA" 
					WHERE CONTAINS (("USER_ID", "FIRST_NAME_PERSONAL_INFORMATION", "MIDDLE_NAME_PERSONAL_INFORMATION", "LAST_NAME_PERSONAL_INFORMATION"),'${payload.QUERY}', FUZZY(0.6)))`
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
                }

            } else {
                res.status(400).send({
                    status: "400",
                    result: response
                });
            }
        } catch (error) {
            res.status(500).send({
                status: "500",
                result: error.message
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
            req.logger.error(` Error for ${req.logger.getTenantId()} at admin/action/search/job ${error}`);
            res.status(400).send({
                status: "400",
                result: error
            });
        }
    }
}