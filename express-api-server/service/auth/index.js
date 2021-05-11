const uuid = require("uuid");
const AWS = require('aws-sdk');
const {
    JWT_SECRET
} = require('../../config');
const JWT = require('jsonwebtoken');
const config = require('../../config');
const utils = require("../../utils/database/index.js")();
const emailservice = require("../ses/index")();
// hashing algo.
const bcrypt = require('bcryptjs');
const saltRounds = 10;

module.exports = () => {
    const login = ({
        payload,
        db
    }) => {
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
                    let query2 = `SELECT * FROM "${schema}"."SCLABS_ALUMNIPORTAL_ADMINAUTH_ADMINLOGIN" WHERE USERNAME = '${EMAIL}'`
                    let statement2 = await db.preparePromisified(query2)
                    let result2 = await db.statementExecPromisified(statement2, [])

                    const match = await bcrypt.compare(PASSWORD, result2[0].PASSWORD);

                    if (!match) {
                        resolve("incorrectpassword")
                    } else {
                        if (result2[0].USERTYPE == 'admin') {
                            let query3 = `SELECT USERNAME, USERTYPE FROM "${schema}"."SCLABS_ALUMNIPORTAL_ADMINAUTH_ADMINLOGIN" where USERNAME='${EMAIL}'`
                            let statement3 = await db.preparePromisified(query3)
                            let result3 = await db.statementExecPromisified(statement3, [])
                            let query4 = `SELECT "USERID", "FIRSTNAME", "LASTNAME", "EMAIL" FROM "${schema}"."SCLABS_ALUMNIPORTAL_PERSONALINFORMATION_ADMIN_HR_PERSONALINFORMATION" where EMAIL = '${EMAIL}'`
                            let statement4 = await db.preparePromisified(query4)
                            let result4 = await db.statementExecPromisified(statement4, [])
                            result4[0].USERTYPE = result3[0].USERTYPE
                            resolve(result4)
                        } else if (result2[0].USERTYPE == 'hr') {
                            query3 = `SELECT USERTYPE FROM "${schema}"."SCLABS_ALUMNIPORTAL_ADMINAUTH_ADMINLOGIN" WHERE USERNAME='${EMAIL}'`
                            statement3 = await db.preparePromisified(query3)
                            result3 = await db.statementExecPromisified(statement3, [])
                            let query4 = `SELECT "ID", "FIRSTNAME", "LASTNAME", "EMAIL", "LEVELMANAGER" FROM "${schema}"."SCLABS_ALUMNIPORTAL_MANAGER_MANAGER" where EMAIL = '${EMAIL}'`
                            let statement4 = await db.preparePromisified(query4)
                            let result4 = await db.statementExecPromisified(statement4, [])
                            result4[0].USERTYPE = result3[0].USERTYPE

                            resolve(result4)
                        }
                    }
                }
            } catch (error) {
                reject(error);
            }
        });
    };

    const signup = ({
        payload,
        db
    }) => {
        return new Promise(async (resolve, reject) => {
            try {

                const schema = await utils.currentSchema({
                    db
                });
                const {
                    EMAIL,
                    PASSWORD,
                    USERTYPE,
                    USERID
                } = payload;

                if (USERTYPE != 'hr' && USERTYPE != 'admin') {
                    resolve("onlyhrsandadmins");
                } else if (USERTYPE == "hr") {
                    /**
                     * Check if HR is already added to the system?
                     */
                    let query = `SELECT * FROM "${schema}"."SCLABS_ALUMNIPORTAL_MANAGER_MANAGER" where EMAIL='${EMAIL}'`

                    let statement = await db.preparePromisified(query)

                    let result = await db.statementExecPromisified(statement, [])
                    if (result.length > 0) {
                        // other duplicate checks 
                        let query = `SELECT * FROM "${schema}"."SCLABS_ALUMNIPORTAL_ADMINAUTH_ADMINLOGIN" where USERNAME='${EMAIL}'`

                        let statement = await db.preparePromisified(query)

                        let result = await db.statementExecPromisified(statement, [])

                        if (result.length == 0) {
                            let query2 = `SELECT * FROM "${schema}"."SCLABS_ALUMNIPORTAL_ADMINAUTH_ADMINLOGIN" where USERID='${USERID}'`
                            let statement2 = await db.preparePromisified(query2)
                            let result2 = await db.statementExecPromisified(statement2, [])
                            if (result2.length == 0) {
                                let createdat = new Date().toISOString();
                                let createdby = "admin";
                                let modifiedby = "admin";
                                let modifiedat = new Date().toISOString();
                                let ID = uuid();
                                // computing hash of the password.
                                const HASHPASSWORD = await bcrypt.hash(PASSWORD, saltRounds);

                                query4 = `INSERT INTO "${schema}"."SCLABS_ALUMNIPORTAL_ADMINAUTH_ADMINLOGIN" VALUES(
	                    '${createdat}',
	                    '${createdby}',
	                    '${modifiedat}',
	                    '${modifiedby}',
                        '${ID}'/*ID <NVARCHAR(36)>*/,
                        '${USERID}',
	                    '${EMAIL}'/*USERNAME <NVARCHAR(5000)>*/,
                        '${HASHPASSWORD}'/*PASSWORD <NVARCHAR(5000)>*/,
                        '${USERTYPE}'
                        )`

                                let statement4 = await db.preparePromisified(query4)
                                let result4 = await db.statementExecPromisified(statement4, [])
                                resolve(result4)
                            } else {
                                resolve("founduserid")
                            }
                        } else {
                            resolve("foundemail");
                        }
                    } else {
                        resolve("nothr")
                    }
                } else {
                    let query = `SELECT * FROM "${schema}"."SCLABS_ALUMNIPORTAL_ADMINAUTH_ADMINLOGIN" where USERNAME='${EMAIL}'`

                    let statement = await db.preparePromisified(query)

                    let result = await db.statementExecPromisified(statement, [])

                    if (result.length == 0) {
                        let query2 = `SELECT * FROM "${schema}"."SCLABS_ALUMNIPORTAL_ADMINAUTH_ADMINLOGIN" where USERID='${USERID}'`
                        let statement2 = await db.preparePromisified(query2)
                        let result2 = await db.statementExecPromisified(statement2, [])
                        if (result2.length == 0) {
                            let createdat = new Date().toISOString();
                            let createdby = "admin";
                            let modifiedby = "admin";
                            let modifiedat = new Date().toISOString();
                            let ID = uuid();
                            // computing hash of the password.
                            const HASHPASSWORD = await bcrypt.hash(PASSWORD, saltRounds);

                            query4 = `INSERT INTO "${schema}"."SCLABS_ALUMNIPORTAL_ADMINAUTH_ADMINLOGIN" VALUES(
	                    '${createdat}',
	                    '${createdby}',
	                    '${modifiedat}',
	                    '${modifiedby}',
                        '${ID}'/*ID <NVARCHAR(36)>*/,
                        '${USERID}',
	                    '${EMAIL}'/*USERNAME <NVARCHAR(5000)>*/,
                        '${HASHPASSWORD}'/*PASSWORD <NVARCHAR(5000)>*/,
                        '${USERTYPE}'
                        )`
                            let statement4 = await db.preparePromisified(query4)
                            let result4 = await db.statementExecPromisified(statement4, [])
                            resolve(result4)
                        } else {
                            resolve("founduserid")
                        }
                    } else {
                        resolve("foundemail");
                    }
                }

            } catch (error) {
                reject(error);
            }
        });
    };

    const forgetpassword = ({
        payload,
        db
    }) => {
        return new Promise(async (resolve, reject) => {
            try {
                const schema = await utils.currentSchema({
                    db
                });
                const {
                    EMAIL
                } = payload.payload;

                const query1 = `SELECT * FROM "${schema}"."SCLABS_ALUMNIPORTAL_ADMINAUTH_ADMINLOGIN" where USERNAME='${EMAIL}'`
                const statement1 = await db.preparePromisified(query1)
                const result1 = await db.statementExecPromisified(statement1, [])

                let FIRST_NAME_PERSONAL_INFORMATION = result1[0].USERNAME
                if (result1.length != 0) {

                    const token = JWT.sign({
                        iss: 'steppingcloudforpasswordreset',
                        sub: EMAIL,
                        jwtKey: 'steppingcloudsecret',
                        algorithm: 'HS256',
                        iat: new Date().getTime(),
                        exp: new Date().setDate(new Date().getDate() + 1)
                    },
                        JWT_SECRET
                    );

                    console.log(token);

                    let res = await emailservice.sendForgetPasswordEmail({ EMAIL, FIRST_NAME_PERSONAL_INFORMATION, token });
                    if (res) {
                        resolve("tokensent");
                    } else {
                        reject(res);
                    }
                } else {
                    resolve("notfounduser");
                }
            } catch (error) {
                reject(error);
            }
        });
    };

    const resetpassword = ({
        payload,
        resettoken,
        db
    }) => {
        return new Promise(async (resolve, reject) => {
            try {
                const schema = await utils.currentSchema({
                    db
                });
                const {
                    NEWPASSWORD,
                    OLDPASSWORD,
                    EMAIL
                } = payload.payload;


                if (EMAIL) {
                    const query1 = `SELECT PASSWORD FROM "${schema}"."SCLABS_ALUMNIPORTAL_ADMINAUTH_ADMINLOGIN" where USERNAME='${EMAIL}'`
                    const statement1 = await db.preparePromisified(query1)
                    const result1 = await db.statementExecPromisified(statement1, [])

                    if (result1[0].PASSWORD == OLDPASSWORD) {
                        // computing hash of the password.
                        const HASHPASSWORD = await bcrypt.hash(NEWPASSWORD, saltRounds);

                        const query = `UPDATE "${schema}"."SCLABS_ALUMNIPORTAL_ADMINAUTH_ADMINLOGIN"
					SET "PASSWORD" = '${HASHPASSWORD}' where USERNAME='${EMAIL}'`
                        const statement = await db.preparePromisified(query)
                        const result = await db.statementExecPromisified(statement, [])
                        if (result) {
                            resolve('updated');
                        } else {
                            resolve('Updation Failed, Current Password Not matched');
                        }
                    }
                    else {
                        resolve('Updation Failed');
                    }
                } else {
                    const resettokenforpass = resettoken.TOKEN
                    const decoderesettoken = JWT.verify(resettokenforpass, JWT_SECRET);
                    if (Date.now() > decoderesettoken.exp) {
                        resolve('ResetTokenExpired');
                    } else {
                        // the payload body contains new PASSWORD to be reset
                        const EMAIL = decoderesettoken.sub;
                        // computing hash of the password.
                        const HASHPASSWORD = await bcrypt.hash(NEWPASSWORD, saltRounds);
                        const query = `UPDATE "${schema}"."SCLABS_ALUMNIPORTAL_ADMINAUTH_ADMINLOGIN"
					SET "PASSWORD" = '${HASHPASSWORD}' where USERNAME='${EMAIL}'`
                        const statement = await db.preparePromisified(query)
                        const result = await db.statementExecPromisified(statement, [])
                        if (result) {
                            resolve('updated');
                        } else {
                            resolve('Updation Failed, Please Check');
                        }
                    }
                }


            } catch (error) {
                reject(error);
            }
        });
    };

    return {
        login,
        signup,
        forgetpassword,
        resetpassword

    };

};