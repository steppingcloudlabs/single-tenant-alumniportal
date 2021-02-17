const uuid = require("uuid");
const utils = require("../../utils/database/index.js")();
module.exports = () => {
    const getCredentials = ({ db }) => {
        return new Promise(async (resolve, reject) => {
            try {
                let schema = await utils.currentSchema({
                    db
                });
                let statement = await db.preparePromisified(
                    `SELECT TOP 1 * FROM "${schema}"."SFTP" ORDER BY CREATEDAT DESC`
                )
                let results = await db.statementExecPromisified(statement, [])
                resolve(results);
            } catch (error) {
                reject(error)
            }
        });
    }

    const createCredentials = ({ payload, db }) => {
        return new Promise(async (resolve, reject) => {
            try {
                let schema = await utils.currentSchema({
                    db
                });

                let ID = uuid();
                let url = payload.payload.URL
                let username = payload.payload.USERNAME
                let password = payload.payload.PASSWORD
                let port = payload.payload.PORT
                let token = payload.payload.TOKEN == undefined ? " " : payload.payload.TOKEN;
                let createdat = new Date().toISOString();
                let path = payload.payload.PATH;
                let query = `INSERT INTO "${schema}"."SFTP" VALUES(
	                        '${createdat}'/*CREATEDAT <TIMESTAMP>*/,
                            '${ID}'/*ID <NVARCHAR(36)>*/,
                            '${url}'/*URL <NVARCHAR(5000)>*/,
                            '${username}'/*USERNAME <NVARCHAR(5000)>*/,
                            '${password}'/*PASSWORD <NVARCHAR(5000)>*/,
                            '${port}'/*PORT <NVARCHAR(5000)>*/,
                            '${path}'/*PATH <NVARCHAR(5000)>*/
                        )`
                let statement = await db.preparePromisified(query)
                let results = await db.statementExecPromisified(statement, [])
                resolve(results);
            } catch (error) {
                reject(error)
            }
        });
    }

    const deleteCredentials = ({ payload, db }) => {
        return new Promise(async (resolve, reject) => {
            try {
                let schema = await utils.currentSchema({
                    db
                });
                let statement = await db.preparePromisified(
                    `SELECT "ID",
					"TITLE",
					"CONTENT",
					"PHOTO",
					"DATE" FROM "${schema}"."SCLABS_ALUMNIPORTAL_NEWS_NEWS" ORDER BY MODIFIEDAT DESC LIMIT ${LIMIT} offset ${offset}`
                )
                let results = await db.statementExecPromisified(statement, [])
                resolve(undoEscape(results));
            } catch (error) {
                reject(error)
            }
        });
    }

    return {
        getCredentials,
        createCredentials,
        deleteCredentials
    }
}