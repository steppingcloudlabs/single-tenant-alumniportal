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


    return {
        getAllJobs,
    }
}