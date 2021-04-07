const utils = require("../../utils/database/index.js")();

module.exports = () => {
    const getRegisteredUsers = ({ payload, db }) => {
        return new Promise(async (resolve, reject) => {
            try {
                const schema = await utils.currentSchema({
                    db
                });
                let query = `SELECT "ISACTIVE" as STATUS , COUNT(ISACTIVE) as COUNT FROM "${schema}"."SCLABS_ALUMNIPORTAL_MASTERDATA_MASTERDATA" GROUP BY ISACTIVE`
                let statement = await db.preparePromisified(query);

                let result = await db.statementExecPromisified(statement);
                resolve(result);
            } catch (error) {
                reject(error);
            }
        })
    }

    const getActiveUserStats = ({ payload, db }) => {
        return new Promise(async (resolve, reject) => {
            try {

            } catch (error) {
                reject(error);
            }
        })
    }

    return {
        getActiveUserStats,
        getRegisteredUsers
    }
}