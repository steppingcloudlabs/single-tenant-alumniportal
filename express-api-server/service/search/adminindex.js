const uuid = require("uuid");
const utils = require("../../utils/database/index.js")();
const jobService = require("../job/index")();

module.exports = () => {
    const searchUser = ({
        payload,
        db
    }) => {
        return new Promise(async (resolve, reject) => {
            try {
                const schema = await utils.currentSchema({
                    db
                })
                const LIMIT = payload.LIMIT == undefined ? 10 : payload.LIMIT
                const offset = payload.OFFSET == undefined ? 0 : payload.OFFSET
                const searchquery = payload.QUERY == "null" || payload.QUERY == undefined ? "" : payload.QUERY
                if (searchquery == "") {
                    let response = await searchUserids({
                        payload,
                        db
                    });
                    resolve(response);
                } else {
                    const query =
                        `SELECT 
				    A1."ID",
				    A1."USER_ID",
					A1."GENDER",
					A1."DATE_OF_BIRTH",
					A1."DATE_OF_RESIGNATION",
					A1."LAST_WORKING_DAY_AS_PER_NOTICE_PERIOD",
					A1."PERSONAL_EMAIL_ID",
					A1."FIRST_NAME_PERSONAL_INFORMATION",
					A1."LAST_NAME_PERSONAL_INFORMATION",
					A1."MIDDLE_NAME_PERSONAL_INFORMATION",
					A1."NATIONALITY_PERSONAL_INFORMATION",
					A1."SALUTATION_PERSONAL_INFORMATION",
					IFNULL(A1.CITY_ADDRESSES,'') "CITY_ADDRESSES",
					IFNULL(A1.PHONE_NUMBER_PHONE_INFORMATION, '') "PHONE_NUMBER_PHONE_INFORMATION",
					IFNULL(A1.MANAGER_JOB_INFORMATION, '') "MANAGER_JOB_INFORMATION",
					IFNULL(A1.DESIGNATION_JOB_INFORMATION, '') "DESIGNATION_JOB_INFORMATION",
					IFNULL(A1.STATE, '') "STATE", 
					IFNULL(A1.COUNTRY, '') "COUNTRY"
					FROM "${schema}"."SCLABS_ALUMNIPORTAL_MASTERDATA_MASTERDATA" as A1 WHERE CONTAINS (("USER_ID", "FIRST_NAME_PERSONAL_INFORMATION", "MIDDLE_NAME_PERSONAL_INFORMATION", "LAST_NAME_PERSONAL_INFORMATION"),'${searchquery}', FUZZY(0.7)) LIMIT ${LIMIT} offset ${offset}`
                    const statement = await db.preparePromisified(query)
                    const obj = await db.statementExecPromisified(statement, [])
                    resolve(obj)
                    // if (obj.length == 0) {
                    // 	resolve(obj)
                    // } else {
                    // 	var results = [];
                    // 	var l = obj.length;
                    // 	var a = [];
                    // 	var g = 0;
                    // 	if (1 < l) {
                    // 		for (var i = 0; i < l; i++) {
                    // 			results[i] = obj[i];
                    // 			a[g] = obj[i].SKILL;
                    // 			for (var j = (i + 1); j < l; j++) {
                    // 				if (results[i].USER_ID == obj[j].USER_ID) {
                    // 					a[++g] = obj[j].SKILL;
                    // 					for (var k = j; k < (l - 1); k++) {
                    // 						obj[k] = obj[k + 1];
                    // 					}
                    // 					l = l - 1;
                    // 					obj.length = l;
                    // 				}
                    // 			}
                    // 			results[i].SKILL = a;
                    // 			g = 0;
                    // 			a = [];
                    // 		}
                    // 	} else {
                    // 		results = obj[0];
                    // 		a[0] = obj[0].SKILL;
                    // 		results.SKILL = a
                    // 	}
                    // 	resolve(results);
                    // }
                }
            } catch (error) {
                reject(error);
            }
        });
    };

    const searchSkill = ({
        payload,
        db
    }) => {
        return new Promise(async (resolve, reject) => {
            try {
                const schema = await utils.currentSchema({
                    db
                })
                const LIMIT = payload.LIMIT == undefined ? 10 : payload.LIMIT
                const offset = payload.OFFSET == undefined ? 0 : payload.OFFSET
                const query =
                    `SELECT ID, SKILL FROM "${schema}"."SCLABS_ALUMNIPORTAL_SKILLS_SKILLS" WHERE CONTAINS ((SKILL),'${payload.QUERY}', FUZZY(0.2)) LIMIT ${LIMIT} offset ${offset}`
                const statement = await db.preparePromisified(query)
                const results = await db.statementExecPromisified(statement, [])

                resolve(results);
            } catch (error) {
                console.log(error);
                reject(error);
            }
        });
    };
    const searchmasterdata = ({
        payload,
        db
    }) => {
        return new Promise(async (resolve, reject) => {
            try {
                const schema = await utils.currentSchema({
                    db
                })

                const LIMIT = (payload.LIMIT == undefined || payload.LIMIT == '') ? 10 : payload.LIMIT
                const OFFSET = (payload.OFFSET == undefined || payload.OFFSET == '') ? 0 : payload.OFFSET
                const query =
                    `SELECT
				    	"ID",
	                    "USER_ID",
                        "GENDER",
                        "DATE_OF_BIRTH",
                        "DATE_OF_RELIEVING",
                        "DATE_OF_RESIGNATION",
                        "LAST_WORKING_DAY_AS_PER_NOTICE_PERIOD",
                        "PERSONAL_EMAIL_ID",
                        "FIRST_NAME_PERSONAL_INFORMATION",
                        "LAST_NAME_PERSONAL_INFORMATION",
                        "MIDDLE_NAME_PERSONAL_INFORMATION",
                        "NATIONALITY_PERSONAL_INFORMATION",
                        "SALUTATION_PERSONAL_INFORMATION",
                        IFNULL(CITY_ADDRESSES,'') "CITY_ADDRESSES",
                        IFNULL(PHONE_NUMBER_PHONE_INFORMATION, '') "PHONE_NUMBER_PHONE_INFORMATION",
                        IFNULL(MANAGER_JOB_INFORMATION, '') "MANAGER_JOB_INFORMATION",
                        IFNULL(DESIGNATION_JOB_INFORMATION, '') "DESIGNATION_JOB_INFORMATION",
                        IFNULL(STATE, '') "STATE",
                        IFNULL(COUNTRY, '') "COUNTRY",
                        "ISACTIVE"
					FROM "${schema}"."SCLABS_ALUMNIPORTAL_MASTERDATA_MASTERDATA" 
					WHERE CONTAINS (("USER_ID", "FIRST_NAME_PERSONAL_INFORMATION", "MIDDLE_NAME_PERSONAL_INFORMATION", "LAST_NAME_PERSONAL_INFORMATION"),'${payload.QUERY}', FUZZY(0.6)) LIMIT ${LIMIT} offset ${OFFSET}`

                const statement = await db.preparePromisified(query)
                const results = await db.statementExecPromisified(statement, [])
                resolve(results);
            } catch (error) {
                reject(error);
            }
        });
    };

    const searchJob = ({
        payload,
        db
    }) => {
        return new Promise(async (resolve, reject) => {
            try {
                const schema = await utils.currentSchema({
                    db
                })
                const LIMIT = payload.LIMIT == undefined ? 10 : payload.LIMIT
                const offset = payload.OFFSET == undefined ? 0 : payload.OFFSET
                let country = (payload.COUNTRY == "null" || payload.COUNTRY == undefined) ? "" : payload.COUNTRY
                let searchquery = (payload.QUERY == "null" || payload.QUERY == undefined) ? "" : payload.QUERY
                searchquery = searchquery + " " + country
                if (searchquery == " ") {
                    let results = await jobService.getjob({
                        payload,
                        db
                    });
                    resolve(results);
                } else {
                    const query =
                        `SELECT "ID", "COUNTRY", "DEPARTMENT", "JOBDESCRIPTION", "JOBPOSTINGID", "JOBREQID", "JOBTITLE", "LOCATION", "POSTINGSTATUS", "POSTINGSTARTDATE", "POSTINGENDDATE" FROM "${schema}". "SCLABS_ALUMNIPORTAL_JOB_JOB" WHERE CONTAINS((jobTitle, location, country, jobDescription), '${searchquery}', FUZZY(0.5))  ORDER BY POSTINGSTARTDATE DESC LIMIT ${LIMIT} offset ${offset}`

                    const statement = await db.preparePromisified(query)
                    const results = await db.statementExecPromisified(statement, [])
                    resolve(results);
                }

            } catch (error) {
                reject(error);
            }
        });
    };

    const searchUserids = ({
        payload,
        db
    }) => {
        return new Promise(async (resolve, reject) => {
            try {
                const schema = await utils.currentSchema({
                    db
                })
                const LIMIT = payload.LIMIT == undefined ? 10 : payload.LIMIT
                const offset = payload.OFFSET == undefined ? 0 : payload.OFFSET
                let country = payload.COUNTRY == undefined ? "" : payload.COUNTRY
                const query =
                    `SELECT 
				    A1."ID",
				    A1."USER_ID",
					A1."GENDER",
					A1."DATE_OF_BIRTH",
					A1."DATE_OF_RESIGNATION",
					A1."LAST_WORKING_DAY_AS_PER_NOTICE_PERIOD",
					A1."PERSONAL_EMAIL_ID",
					A1."FIRST_NAME_PERSONAL_INFORMATION",
					A1."LAST_NAME_PERSONAL_INFORMATION",
					A1."MIDDLE_NAME_PERSONAL_INFORMATION",
					A1."NATIONALITY_PERSONAL_INFORMATION",
					A1."SALUTATION_PERSONAL_INFORMATION",
					IFNULL(A1.CITY_ADDRESSES,'') "CITY_ADDRESSES",
					IFNULL(A1.PHONE_NUMBER_PHONE_INFORMATION, '') "PHONE_NUMBER_PHONE_INFORMATION",
					IFNULL(A1.MANAGER_JOB_INFORMATION, '') "MANAGER_JOB_INFORMATION",
					IFNULL(A1.DESIGNATION_JOB_INFORMATION, '') "DESIGNATION_JOB_INFORMATION",
					IFNULL(A1.STATE, '') "STATE", 
					IFNULL(A1.COUNTRY, '') "COUNTRY"
					FROM "${schema}"."SCLABS_ALUMNIPORTAL_MASTERDATA_MASTERDATA" as A1  LIMIT ${LIMIT} offset ${offset}`
                console.log(query)
                const statement = await db.preparePromisified(query)
                const results = await db.statementExecPromisified(statement, [])
                resolve(results);
            } catch (error) {
                reject(error);
            }
        });
    };
    return {
        searchUser,
        searchSkill,
        searchmasterdata,
        searchJob,
        searchUserids
    }
};