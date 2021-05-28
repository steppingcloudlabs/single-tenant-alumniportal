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
                // let enddate   = (payload.enddate == undefined || payload.enddate == "null") ?  0 : payload.enddate;
                let yearly = startdate - 356 * 24 * 60 * 60 * 1000;
                let monthly = startdate - 30 * 24 * 60 * 60 * 1000;
                let weekly = startdate - 7 * 24 * 60 * 60 * 1000;
                console.log(yearly)
                console.log(new Date(startdate).getTime(), new Date(yearly).getTime())

                // let query = `SELECT count("LOGINCOUNT") as YEARCOUNT as COUNT FROM "${schema}"."SCLABS_ALUMNIPORTAL_REPORTING" WHERE CREATEDAT <= '${startdate}' and CREATEDAT >= '${enddate}' and LOGINCOUNT = '1'`
                let query = 
                `
                SELECT YEARCOUNT, MONTHCOUNT, WEEKCOUNT FROM  

                (SELECT COUNT("LOGINCOUNT") as YEARCOUNT FROM "${schema}"."SCLABS_ALUMNIPORTAL_REPORTING" WHERE CREATEDAT <= '${startdate}' and CREATEDAT >= '${yearly}' and LOGINCOUNT = '1') as YEARCOUNT,
	            (SELECT COUNT("LOGINCOUNT") as MONTHCOUNT FROM "${schema}"."SCLABS_ALUMNIPORTAL_REPORTING" WHERE CREATEDAT <= '${startdate}' and CREATEDAT >= '${monthly}' and LOGINCOUNT = '1') as MONTHCOUNT,
	            (SELECT COUNT("LOGINCOUNT") as WEEKCOUNT FROM "${schema}"."SCLABS_ALUMNIPORTAL_REPORTING" WHERE CREATEDAT <= '${startdate}' and CREATEDAT >= '${weekly}' and LOGINCOUNT = '1') as WEEKCOUNT
	
                
                `
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
                // let enddate   = (payload.enddate == undefined || payload.enddate == "null") ?  0 : payload.enddate;
                let yearly = startdate - 356 * 24 * 60 * 60 * 1000;
                let monthly = startdate - 30 * 24 * 60 * 60 * 1000;
                let weekly = startdate - 7 * 24 * 60 * 60 * 1000;
                // let query = `SELECT count("SIGNUPCOUNT") as COUNT FROM "${schema}"."SCLABS_ALUMNIPORTAL_REPORTING" WHERE CREATEDAT <= '${startdate}' and CREATEDAT >= '${enddate}' and SIGNUPCOUNT = '1'`
                let query = 
                `
                SELECT YEARCOUNT, MONTHCOUNT, WEEKCOUNT FROM  

                (SELECT COUNT("SIGNUPCOUNT") as YEARCOUNT FROM "${schema}"."SCLABS_ALUMNIPORTAL_REPORTING" WHERE CREATEDAT <= '${startdate}' and CREATEDAT >= '${yearly}' and SIGNUPCOUNT = '1') as YEARCOUNT,
	            (SELECT COUNT("SIGNUPCOUNT") as MONTHCOUNT FROM "${schema}"."SCLABS_ALUMNIPORTAL_REPORTING" WHERE CREATEDAT <= '${startdate}' and CREATEDAT >= '${monthly}' and SIGNUPCOUNT = '1') as MONTHCOUNT,
	            (SELECT COUNT("SIGNUPCOUNT") as WEEKCOUNT FROM "${schema}"."SCLABS_ALUMNIPORTAL_REPORTING" WHERE CREATEDAT <= '${startdate}' and CREATEDAT >= '${weekly}' and SIGNUPCOUNT = '1') as WEEKCOUNT
	
                
                `
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
                // let enddate   = (payload.enddate == undefined || payload.enddate == "null") ?  0 : payload.enddate;
                let yearly = startdate - 356 * 24 * 60 * 60 * 1000;
                let monthly = startdate - 30 * 24 * 60 * 60 * 1000;
                let weekly = startdate - 7 * 24 * 60 * 60 * 1000;
                // let query = `SELECT count("DOCUMENTDOWNLOADCOUNT") as COUNT FROM "${schema}"."SCLABS_ALUMNIPORTAL_REPORTING" WHERE CREATEDAT <= '${startdate}' and CREATEDAT >= '${enddate}' and DOCUMENTDOWNLOADCOUNT = '1'`
                let query = 
                `
                SELECT YEARCOUNT, MONTHCOUNT, WEEKCOUNT FROM  

                (SELECT COUNT("DOCUMENTDOWNLOADCOUNT") as YEARCOUNT FROM "${schema}"."SCLABS_ALUMNIPORTAL_REPORTING" WHERE CREATEDAT <= '${startdate}' and CREATEDAT >= '${yearly}' and DOCUMENTDOWNLOADCOUNT = '1') as YEARCOUNT,
	            (SELECT COUNT("DOCUMENTDOWNLOADCOUNT") as MONTHCOUNT FROM "${schema}"."SCLABS_ALUMNIPORTAL_REPORTING" WHERE CREATEDAT <= '${startdate}' and CREATEDAT >= '${monthly}' and DOCUMENTDOWNLOADCOUNT = '1') as MONTHCOUNT,
	            (SELECT COUNT("DOCUMENTDOWNLOADCOUNT") as WEEKCOUNT FROM "${schema}"."SCLABS_ALUMNIPORTAL_REPORTING" WHERE CREATEDAT <= '${startdate}' and CREATEDAT >= '${weekly}' and DOCUMENTDOWNLOADCOUNT = '1') as WEEKCOUNT
	
                `
                
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
                // let enddate   = (payload.enddate == undefined || payload.enddate == "null") ?  0 : payload.enddate;
                let yearly = startdate - 356 * 24 * 60 * 60 * 1000;
                let monthly = startdate - 30 * 24 * 60 * 60 * 1000;
                let weekly = startdate - 7 * 24 * 60 * 60 * 1000;
                // let query = `SELECT count("DOCUMENTUPLOADCOUNT") as COUNT FROM "${schema}"."SCLABS_ALUMNIPORTAL_REPORTING" WHERE CREATEDAT <= '${startdate}' and CREATEDAT >= '${enddate}' and DOCUMENTUPLOADCOUNT = '1'`
                let query = 
                `
                SELECT YEARCOUNT, MONTHCOUNT, WEEKCOUNT FROM  

                (SELECT COUNT("DOCUMENTUPLOADCOUNT") as YEARCOUNT FROM "${schema}"."SCLABS_ALUMNIPORTAL_REPORTING" WHERE CREATEDAT <= '${startdate}' and CREATEDAT >= '${yearly}' and DOCUMENTUPLOADCOUNT = '1') as YEARCOUNT,
	            (SELECT COUNT("DOCUMENTUPLOADCOUNT") as MONTHCOUNT FROM "${schema}"."SCLABS_ALUMNIPORTAL_REPORTING" WHERE CREATEDAT <= '${startdate}' and CREATEDAT >= '${monthly}' and DOCUMENTUPLOADCOUNT = '1') as MONTHCOUNT,
	            (SELECT COUNT("DOCUMENTUPLOADCOUNT") as WEEKCOUNT FROM "${schema}"."SCLABS_ALUMNIPORTAL_REPORTING" WHERE CREATEDAT <= '${startdate}' and CREATEDAT >= '${weekly}' and DOCUMENTUPLOADCOUNT = '1') as WEEKCOUNT
	
                `
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
                // let enddate   = (payload.enddate == undefined || payload.enddate == "null") ?  0 : payload.enddate;
                // let query = `SELECT count("TICKETOPENCOUNT") as COUNT FROM "${schema}"."SCLABS_ALUMNIPORTAL_REPORTING" WHERE CREATEDAT <= '${startdate}' and CREATEDAT >= '${enddate}' and TICKETOPENCOUNT = '1'`
                
                let yearly = startdate - 356 * 24 * 60 * 60 * 1000;
                let monthly = startdate - 30 * 24 * 60 * 60 * 1000;
                let weekly = startdate - 7 * 24 * 60 * 60 * 1000;
                let query = 
                `
                SELECT YEARCOUNT, MONTHCOUNT, WEEKCOUNT FROM  

                (SELECT COUNT("TICKETOPENCOUNT") as YEARCOUNT FROM "${schema}"."SCLABS_ALUMNIPORTAL_REPORTING" WHERE CREATEDAT <= '${startdate}' and CREATEDAT >= '${yearly}' and TICKETOPENCOUNT = '1') as YEARCOUNT,
	            (SELECT COUNT("TICKETOPENCOUNT") as MONTHCOUNT FROM "${schema}"."SCLABS_ALUMNIPORTAL_REPORTING" WHERE CREATEDAT <= '${startdate}' and CREATEDAT >= '${monthly}' and TICKETOPENCOUNT = '1') as MONTHCOUNT,
	            (SELECT COUNT("TICKETOPENCOUNT") as WEEKCOUNT FROM "${schema}"."SCLABS_ALUMNIPORTAL_REPORTING" WHERE CREATEDAT <= '${startdate}' and CREATEDAT >= '${weekly}' and TICKETOPENCOUNT = '1') as WEEKCOUNT
	
                `
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
                // let enddate   = (payload.enddate == undefined || payload.enddate == "null") ?  0 : payload.enddate;
                // let query = `SELECT count("TICKETCLOSEDCOUT") as COUNT FROM "${schema}"."SCLABS_ALUMNIPORTAL_REPORTING" WHERE CREATEDAT <= '${startdate}' and CREATEDAT >= '${enddate}' and TICKETCLOSEDCOUT = '1'`
                let yearly = startdate - 356 * 24 * 60 * 60 * 1000;
                let monthly = startdate - 30 * 24 * 60 * 60 * 1000;
                let weekly = startdate - 7 * 24 * 60 * 60 * 1000;
                let query = 
                `
                SELECT YEARCOUNT, MONTHCOUNT, WEEKCOUNT FROM  

                (SELECT COUNT("TICKETCLOSEDCOUT") as YEARCOUNT FROM "${schema}"."SCLABS_ALUMNIPORTAL_REPORTING" WHERE CREATEDAT <= '${startdate}' and CREATEDAT >= '${yearly}' and TICKETCLOSEDCOUT = '1') as YEARCOUNT,
	            (SELECT COUNT("TICKETCLOSEDCOUT") as MONTHCOUNT FROM "${schema}"."SCLABS_ALUMNIPORTAL_REPORTING" WHERE CREATEDAT <= '${startdate}' and CREATEDAT >= '${monthly}' and TICKETCLOSEDCOUT = '1') as MONTHCOUNT,
	            (SELECT COUNT("TICKETCLOSEDCOUT") as WEEKCOUNT FROM "${schema}"."SCLABS_ALUMNIPORTAL_REPORTING" WHERE CREATEDAT <= '${startdate}' and CREATEDAT >= '${weekly}' and TICKETCLOSEDCOUT = '1') as WEEKCOUNT
	
                `
                
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