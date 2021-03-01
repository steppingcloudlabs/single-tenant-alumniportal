const AWS = require("aws-sdk");
const uuid = require("uuid");
const xsenv = require("@sap/xsenv");
// const utils = require("../../utils/database/index.js")();

module.exports = () => {

    const createETLJob = ({ payload, db }) => {
        return new Promise(async (resolve, reject) => {
            try {
                let response = await ETLJob({ payload, db });
                resolve(response)
            } catch (error) {
                reject(error)
            }
        })
    }

    // Worker Thread will be userd here to CPU intensive work 
    const ETLJob = ({ payload, db }) => {
        return new Promise(async (resolve, reject) => {
            try {
                const response = await toDatabase({ payload, db });
                resolve(response);
            } catch (error) {
                reject(error)
            }
        });
    }
    const createdocuments = ({
        payload,
        db
    }) => {
        return new Promise(async (resolve, reject) => {
            try {

                const schema = await utils.currentSchema({
                    db
                })
                const createdat = new Date().toISOString();
                const createdby = "admin";
                const modifiedby = "admin";
                const modifiedat = new Date().toISOString();
                const ID = uuid()
                const file_name = payload.DOCUMENT;
                const stream = payload.FILE;
                const userid = payload.USERID
                const statement = await db.preparePromisified(
                    `INSERT INTO "${schema}"."SCLABS_ALUMNIPORTAL_DOCUMENTS_DOCUMENTS" VALUES(
						'${createdat}',
						'${createdby}',
						'${modifiedat}',
						'${modifiedby}',
						'${ID}',
						'${stream}',
						'${userid}',
						'${file_name}')`)

                const results = await db.statementExecPromisified(statement, [])

                resolve(results);

            } catch (error) {
                reject(error);
            }
        });
    };

    const toDatabase = ({ payload, db }) => {
        return new Promise(async (resolve, reject) => {
            try {
                let response = await toDatabase({ payload, db });
            } catch (error) {
                reject(error)
            }
        });
    }



    return {
        createETLJob
    }
}