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

                if(result[0].STATUS == "unregistered"){
                    let response = [
                        {
                            "STATUS": result[0].STATUS,
                            "COUNT": result[0].COUNT,
                        },
                        {
                            "STATUS": result[1].STATUS,
                            "COUNT": result[1].COUNT,
                        },
                    
                    ];

                    resolve(response);
                }else{
                    let response = [
                        {
                            "STATUS": "unregistered",
                            "COUNT": 0,
                        },
                        {
                            "STATUS": result[0].STATUS,
                            "COUNT": result[0].COUNT,
                        },
                    
                    ];
                    resolve(response)
                }

                
                
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

    const logincount = ({payload, db}) =>{
        return new Promise(async(resolve, reject) =>{
            try {
                const schema = await utils.currentSchema({
                    db
                });
                let startdate = (payload.startdate == undefined || payload.startdate == "null") ? new Date().getTime() : payload.startdate
                let enddate   = (payload.enddate == undefined || payload.enddate == "null") ?  0 : payload.enddate;
                let query = `SELECT count("LOGINCOUNT") as COUNT FROM "${schema}"."SCLABS_ALUMNIPORTAL_REPORTING" WHERE CREATEDAT <= '${startdate}' and CREATEDAT >= '${enddate}' and LOGINCOUNT = '1'`
                
                let statement = await db.preparePromisified(query);
                let result = await db.statementExecPromisified(statement);
                resolve(result)
            } catch (error) {
                reject(error)
            }
        })
    } 

    const signupcount = ({payload, db}) =>{
        return new Promise(async(resolve, reject) =>{
            try {
                const schema = await utils.currentSchema({
                    db
                });
                let startdate = (payload.startdate == undefined || payload.startdate == "null") ? new Date().getTime() : payload.startdate
                let enddate   = (payload.enddate == undefined || payload.enddate == "null") ?  0 : payload.enddate;
                let query = `SELECT count("SIGNUPCOUNT") as COUNT FROM "${schema}"."SCLABS_ALUMNIPORTAL_REPORTING" WHERE CREATEDAT <= '${startdate}' and CREATEDAT >= '${enddate}' and SIGNUPCOUNT = '1'`
                let statement = await db.preparePromisified(query);
                let result = await db.statementExecPromisified(statement);
                resolve(result)
            } catch (error) {
                reject(error)
            }
        })
    } 
    const documentdownloadcount = ({payload, db}) =>{
        return new Promise(async(resolve, reject) =>{
            try {
                const schema = await utils.currentSchema({
                    db
                });
                let startdate = (payload.startdate == undefined || payload.startdate == "null") ? new Date().getTime() : payload.startdate
                let enddate   = (payload.enddate == undefined || payload.enddate == "null") ?  0 : payload.enddate;
                let query = `SELECT count("DOCUMENTDOWNLOADCOUNT") as COUNT FROM "${schema}"."SCLABS_ALUMNIPORTAL_REPORTING" WHERE CREATEDAT <= '${startdate}' and CREATEDAT >= '${enddate}' and DOCUMENTDOWNLOADCOUNT = '1'`
                let statement = await db.preparePromisified(query);
                let result = await db.statementExecPromisified(statement);
                resolve(result)
            } catch (error) {
                reject(error)
            }
        })
    } 
    const documentuploadcount = ({payload, db}) =>{
        return new Promise(async(resolve, reject) =>{
            try {
                const schema = await utils.currentSchema({
                    db
                });
                let startdate = (payload.startdate == undefined || payload.startdate == "null") ? new Date().getTime() : payload.startdate
                let enddate   = (payload.enddate == undefined || payload.enddate == "null") ?  0 : payload.enddate;
                let query = `SELECT count("DOCUMENTUPLOADCOUNT") as COUNT FROM "${schema}"."SCLABS_ALUMNIPORTAL_REPORTING" WHERE CREATEDAT <= '${startdate}' and CREATEDAT >= '${enddate}' and DOCUMENTUPLOADCOUNT = '1'`
                let statement = await db.preparePromisified(query);
                let result = await db.statementExecPromisified(statement);
                resolve(result)
            } catch (error) {
                reject(error)
            }
        })
    } 
    const ticketopencount = ({payload, db}) =>{
        return new Promise(async(resolve, reject) =>{
            try {
                const schema = await utils.currentSchema({
                    db
                });
                let startdate = (payload.startdate == undefined || payload.startdate == "null") ? new Date().getTime() : payload.startdate
                let enddate   = (payload.enddate == undefined || payload.enddate == "null") ?  0 : payload.enddate;
                let query = `SELECT count("TICKETOPENCOUNT") as COUNT FROM "${schema}"."SCLABS_ALUMNIPORTAL_REPORTING" WHERE CREATEDAT <= '${startdate}' and CREATEDAT >= '${enddate}' and TICKETOPENCOUNT = '1'`
                let statement = await db.preparePromisified(query);
                let result = await db.statementExecPromisified(statement);
                resolve(result)
            } catch (error) {
                reject(error)
            }
        })
    } 
    const ticketclosecount = ({payload, db}) =>{
        return new Promise(async(resolve, reject) =>{
            try {
                const schema = await utils.currentSchema({
                    db
                });
                let startdate = (payload.startdate == undefined || payload.startdate == "null") ? new Date().getTime() : payload.startdate
                let enddate   = (payload.enddate == undefined || payload.enddate == "null") ?  0 : payload.enddate;
                let query = `SELECT count("TICKETCLOSEDCOUT") as COUNT FROM "${schema}"."SCLABS_ALUMNIPORTAL_REPORTING" WHERE CREATEDAT <= '${startdate}' and CREATEDAT >= '${enddate}' and TICKETCLOSEDCOUT = '1'`
                let statement = await db.preparePromisified(query);
                let result = await db.statementExecPromisified(statement);
                resolve(result)
            } catch (error) {
                reject(error)
            }
        })
    } 
    return {
        getActiveUserStats,
        getRegisteredUsers,
        logincount,
        signupcount,
        documentdownloadcount,
        documentuploadcount,
        ticketopencount,
        ticketclosecount
    }
}