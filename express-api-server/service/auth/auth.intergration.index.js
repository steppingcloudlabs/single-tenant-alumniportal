const uuid = require("uuid");
const bcrypt = require('bcryptjs');
const {
    JWT_SECRET
} = require('../../config');
const JWT = require('jsonwebtoken');
const config = require('../../config');
const utils = require("../../utils/database/index.js")();
module.exports = () => {
    const addIntegrationUser = ({ payload, logger, db }) => {
        return new Promise(async (resolve, reject) => {
            try {
                const schema = await utils.currentSchema({
                    db
                });
                const {
                    EMAIL,
                    PASSWORD,
                    USERTYPE
                } = payload;

                /**
                 * Check if Integration user is already added to the system ?
                 */
                let query = `SELECT * FROM "${schema}"."SCLABS_ALUMNIPORTAL_ADMINAUTH_ADMINLOGIN" where EMAIL='${EMAIL}'`

                let statement = await db.preparePromisified(query)

                let result = await db.statementExecPromisified(statement, [])
                if (result.length > 0) {
                    let createdat = new Date().toISOString();
                    let createdby = "admin";
                    let modifiedby = "admin";
                    let modifiedat = new Date().toISOString();
                    let ID = uuid();
                    let USERID = ID;
                    query4 = `INSERT INTO "${schema}"."SCLABS_ALUMNIPORTAL_ADMINAUTH_ADMINLOGIN" VALUES(
	                    '${createdat}',
	                    '${createdby}',
	                    '${modifiedat}',
	                    '${modifiedby}',
                        '${ID}'/*ID <NVARCHAR(36)>*/,
                        '${USERID}',
	                    '${EMAIL}'/*USERNAME <NVARCHAR(5000)>*/,
                        '${PASSWORD}'/*PASSWORD <NVARCHAR(5000)>*/,
                        '${USERTYPE}'
                        )`
                    let statement4 = await db.preparePromisified(query4)
                    let result4 = await db.statementExecPromisified(statement4, [])
                    resolve(result4)

                } else {
                    resolve("exists")
                }
            } catch (error) {
                reject(error);
            }
        });

    }

    const loginIntegrationUser = ({ payload, db }) => {
        return new Promise(async (resolve, reject) => {
            try {
                const schema = await utils.currentSchema({
                    db
                });
                const {
                    EMAIL,
                    PASSWORD,
                } = payload;
                let query = `SELECT * FROM "${schema}"."SCLABS_ALUMNIPORTAL_ADMINAUTH_ADMINLOGIN" where USERNAME='${EMAIL}'`
                let statement = await db.preparePromisified(query)
                let result = await db.statementExecPromisified(statement, [])
                if (result.length == 0) {
                    resolve("incorrectuser")
                } else {
                    let query2 = `SELECT * FROM "${schema}"."SCLABS_ALUMNIPORTAL_ADMINAUTH_ADMINLOGIN" WHERE USERNAME = '${EMAIL}' and PASSWORD ='${PASSWORD}'`
                    let statement2 = await db.preparePromisified(query2)
                    let result2 = await db.statementExecPromisified(statement2, [])
                    if (result2.length == 0) {
                        resolve("incorrectpassword")
                    } else {
                        if (result2[0].USERTYPE == 'integrationuser') {
                            let query3 = `SELECT USERNAME, USERTYPE FROM "${schema}"."SCLABS_ALUMNIPORTAL_ADMINAUTH_ADMINLOGIN" where USERNAME='${EMAIL}' AND PASSWORD ='${PASSWORD}'`
                            let statement3 = await db.preparePromisified(query3)
                            let result3 = await db.statementExecPromisified(statement3, [])
                            resolve(result3)
                        } else {
                            resolve("notadded");
                        }
                    }
                }
            } catch (error) {
                reject(error);
            }
        });
    }
    return {
        addIntegrationUser,
        loginIntegrationUser
    }
}