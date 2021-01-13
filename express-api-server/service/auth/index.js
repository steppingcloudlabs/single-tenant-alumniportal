const uuid = require("uuid");
const nodemailer = require("nodemailer");

const {
    JWT_SECRET
} = require('../../config');
const JWT = require('jsonwebtoken');

const utils = require("../../utils/database/index.js")();
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
                    let query2 = `SELECT * FROM "${schema}"."SCLABS_ALUMNIPORTAL_ADMINAUTH_ADMINLOGIN" WHERE USERNAME = '${EMAIL}' and PASSWORD ='${PASSWORD}'`
                    let statement2 = await db.preparePromisified(query2)
                    let result2 = await db.statementExecPromisified(statement2, [])
                    if (result2.length == 0) {
                        resolve("incorrectpassword")
                    } else {

                        if (result2[0].USERTYPE == 'admin') {
                            let query3 = `SELECT USERNAME, USERTYPE FROM "${schema}"."SCLABS_ALUMNIPORTAL_ADMINAUTH_ADMINLOGIN" where USERNAME='${EMAIL}' AND PASSWORD ='${PASSWORD}'`
                            let statement3 = await db.preparePromisified(query3)
                            let result3 = await db.statementExecPromisified(statement3, [])
                            resolve(result3)
                        } else if (result2[0].USERTYPE == 'hr') {
                            query3 = `SELECT USERTYPE FROM "${schema}"."SCLABS_ALUMNIPORTAL_ADMINAUTH_ADMINLOGIN" WHERE USERNAME='${EMAIL}' AND PASSWORD='${PASSWORD}'`
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

                if (result1.length != 0) {

                    const token = JWT.sign({
                        iss: 'steppingcloudforpasswordreset',
                        sub: EMAIL,
                        jwtKey: 'steppingcloudsecret',
                        algorithm: 'HS256',
                        iat: new Date().getTime(),
                        exp: new Date().setDate(new Date().getDate() + 1),
                    },
                        JWT_SECRET
                    );
                    let html = `
					<p>You are receiving this because you (or someone else) have requested the reset of the PASSWORD for your account.</p>
					
                    <p>Please click on the following link, or paste this into your browser to complete the process: https://org-dev-sclabs-space-test-single-tenant-alumniportal-sap-srv.cfapps.eu10.hana.ondemand.com/auth/reset/'${token}</p>
                    <p>If you did not request this, please ignore this EMAIL and your PASSWORD will remain unchanged. Please note that the token will get expired in 24hrs </p>
                    `
                    var transporter = nodemailer.createTransport({
                        service: 'gmail',
                        auth: {
                            user: 'prakritidev@steppingcloud.com',
                            pass: 'SteppingCloud'
                        }
                    });

                    let info = await transporter.sendMail({
                        from: '"support@alumniportal" <prakritidev@steppingcloud.com>', // sender address
                        to: EMAIL, // list of receivers
                        subject: "Hello ✔", // Subject line
                        text: "Hello world?", // plain text body
                        html: html, // html body
                    });
                    resolve("tokensent");
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
                } = payload.payload;

                const resettokenforpass = resettoken.token

                const decoderesettoken = JWT.verify(resettokenforpass, JWT_SECRET);

                if (Date.now() > decoderesettoken.exp) {
                    resolve('ResetTokenExpired');
                } else {
                    // the payload body contains new PASSWORD to be reset
                    const EMAIL = decoderesettoken.sub;

                    const query = `UPDATE "${schema}"."SCLABS_ALUMNIPORTAL_ADMINAUTH_ADMINLOGIN"
					SET "PASSWORD" = '${NEWPASSWORD}' where USERNAME='${EMAIL}'`
                    const statement = await db.preparePromisified(query)
                    const result = await db.statementExecPromisified(statement, [])
                    if (result) {
                        resolve('updated');
                    } else {
                        resolve('Updation Failed, Please Check');
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