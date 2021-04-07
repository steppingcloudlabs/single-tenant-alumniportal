const objectStoreSerice = require("./objectstore");
const jobsc = require('@sap/jobs-client');
const xsenv = require("@sap/xsenv");
const utils = require("../../../utils/database/index.js")();

module.exports = () => {


    const getAllJobs = ({ payload, db }) => {
        return new Promise(async (resolve, reject) => {
            try {
                const schema = await utils.currentSchema({
                    db
                })
                const statement = await db.preparePromisified(`SELECT * from "${schema}"."UPLOADDOCUMENTJOBSTATUS"`)
                const results = await db.statementExecPromisified(statement, [])
                resolve(results);
            } catch (error) {
                reject(error)
            }
        })
    }

    const getJobLogs = ({ payload, db }) => {
        return new Promise(async (resolve, reject) => {
            try {
                const schema = await utils.currentSchema({
                    db
                })

                if (payload.jobid.length <= 0 || payload === undefined) {
                    console.log(payload)
                    const statement = await db.preparePromisified(`SELECT * from "${schema}"."JOBSCHEDULDER"`)
                    const results = await db.statementExecPromisified(statement, [])
                    resolve(results);
                } else {
                    let query = `SELECT * from "${schema}"."JOBSCHEDULDER" where JOBID = '${payload.jobid}'`
                    const statement = await db.preparePromisified(query)
                    const results = await db.statementExecPromisified(statement, [])
                    resolve(results);
                }

            } catch (error) {
                reject(error)
            }
        })
    }

    return {
        getAllJobs,
        getJobLogs
    }
}