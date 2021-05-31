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
                // let enddate   = (payload.enddate == undefined || payload.enddate == "null") ?  new Date('1/1/'+new Date().getFullYear()).getTime() : payload.enddate;
                let yearly = 0;
                let monthly = new Date('1/1/'+new Date().getFullYear()).getTime();
                let weekly = startdate - 7 * 24 * 60 * 60 * 1000;
                // console.log(yearly)
                // console.log(new Date(startdate).getTime(), new Date(yearly).getTime())

                // let query = `SELECT count("LOGINCOUNT") as YEARCOUNT as COUNT FROM "${schema}"."SCLABS_ALUMNIPORTAL_REPORTING" WHERE CREATEDAT <= '${startdate}' and CREATEDAT >= '${enddate}' and LOGINCOUNT = '1'`
                //----------------------------------------------------- WEEKLY query-----------------------------------------
                let query = 
                `
                SELECT DAYNAME(ADD_SECONDS(TO_TIMESTAMP('1970-01-01 00:00:00'), cast("CREATEDAT" as bigint)/1000)) DAYNAME, 
                COUNT(DAYNAME(ADD_SECONDS(TO_TIMESTAMP('1970-01-01 00:00:00'), cast("CREATEDAT" as bigint)/1000))) as TOTALCOUNT
                FROM "${schema}"."SCLABS_ALUMNIPORTAL_REPORTING" 
                WHERE CREATEDAT <= '${startdate}'  and CREATEDAT >= '${weekly}' AND LOGINCOUNT = '1' 
                GROUP BY DAYNAME(ADD_SECONDS(TO_TIMESTAMP('1970-01-01 00:00:00'), cast("CREATEDAT" as bigint)/1000))
                `
                let statement = await db.preparePromisified(query);
                let weeklyresult = await db.statementExecPromisified(statement);
                
                // ---------------------------------------------------Monthly Count ------------------------------------------
                query = 
                `
                SELECT MONTH(ADD_SECONDS(TO_TIMESTAMP('1970-01-01 00:00:00'), cast("CREATEDAT" as bigint)/1000)) MONTHASNUMBER, 
                COUNT(MONTH(ADD_SECONDS(TO_TIMESTAMP('1970-01-01 00:00:00'), cast("CREATEDAT" as bigint)/1000))) as TOTALCOUNT
                FROM "${schema}"."SCLABS_ALUMNIPORTAL_REPORTING" 
                WHERE CREATEDAT <= '${startdate}'  and CREATEDAT >= '${monthly}' AND LOGINCOUNT = '1' 
                GROUP BY MONTH(ADD_SECONDS(TO_TIMESTAMP('1970-01-01 00:00:00'), cast("CREATEDAT" as bigint)/1000))
                `
                statement = await db.preparePromisified(query);
                let monthlyresult = await db.statementExecPromisified(statement);


                // ---------------------------------------------------Yearly Count ------------------------------------------
                query = 
                `
                SELECT YEAR(ADD_SECONDS(TO_TIMESTAMP('1970-01-01 00:00:00'), cast("CREATEDAT" as bigint)/1000)) YEARASNUMBER, 
                COUNT(YEAR(ADD_SECONDS(TO_TIMESTAMP('1970-01-01 00:00:00'), cast("CREATEDAT" as bigint)/1000))) as TOTALCOUNT
                FROM "${schema}"."SCLABS_ALUMNIPORTAL_REPORTING" 
                WHERE CREATEDAT <= '${startdate}'  and CREATEDAT >= '${yearly}' AND LOGINCOUNT = '1' 
                GROUP BY YEAR(ADD_SECONDS(TO_TIMESTAMP('1970-01-01 00:00:00'), cast("CREATEDAT" as bigint)/1000))
                `
                statement = await db.preparePromisified(query);
                let yearlyresult = await db.statementExecPromisified(statement);

                let response = [{
                    "WEEKCOUNT" : weeklyresult,
                    "MONTHCOUNT": monthlyresult,
                    "YEARLYCOUNT": yearlyresult
                }]
                
                resolve(response)
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

                let yearly = 0;
                let monthly = new Date('1/1/'+new Date().getFullYear()).getTime();
                let weekly = startdate - 7 * 24 * 60 * 60 * 1000;
                // let query = `SELECT count("LOGINCOUNT") as YEARCOUNT as COUNT FROM "${schema}"."SCLABS_ALUMNIPORTAL_REPORTING" WHERE CREATEDAT <= '${startdate}' and CREATEDAT >= '${enddate}' and LOGINCOUNT = '1'`
                //----------------------------------------------------- WEEKLY query-----------------------------------------
                let query = 
                `
                SELECT DAYNAME(ADD_SECONDS(TO_TIMESTAMP('1970-01-01 00:00:00'), cast("CREATEDAT" as bigint)/1000)) DAYNAME, 
                COUNT(DAYNAME(ADD_SECONDS(TO_TIMESTAMP('1970-01-01 00:00:00'), cast("CREATEDAT" as bigint)/1000))) as TOTALCOUNT
                FROM "${schema}"."SCLABS_ALUMNIPORTAL_REPORTING" 
                WHERE CREATEDAT <= '${startdate}'  and CREATEDAT >= '${weekly}' AND SIGNUPCOUNT = '1' 
                GROUP BY DAYNAME(ADD_SECONDS(TO_TIMESTAMP('1970-01-01 00:00:00'), cast("CREATEDAT" as bigint)/1000))
                `
                let statement = await db.preparePromisified(query);
                let weeklyresult = await db.statementExecPromisified(statement);
                
                // ---------------------------------------------------Monthly Count ------------------------------------------
                query = 
                `
                SELECT MONTH(ADD_SECONDS(TO_TIMESTAMP('1970-01-01 00:00:00'), cast("CREATEDAT" as bigint)/1000)) MONTHASNUMBER, 
                COUNT(MONTH(ADD_SECONDS(TO_TIMESTAMP('1970-01-01 00:00:00'), cast("CREATEDAT" as bigint)/1000))) as TOTALCOUNT
                FROM "${schema}"."SCLABS_ALUMNIPORTAL_REPORTING" 
                WHERE CREATEDAT <= '${startdate}'  and CREATEDAT >= '${monthly}' AND SIGNUPCOUNT = '1' 
                GROUP BY MONTH(ADD_SECONDS(TO_TIMESTAMP('1970-01-01 00:00:00'), cast("CREATEDAT" as bigint)/1000))
                `
                statement = await db.preparePromisified(query);
                let monthlyresult = await db.statementExecPromisified(statement);


                // ---------------------------------------------------Yearly Count ------------------------------------------
                query = 
                `
                SELECT YEAR(ADD_SECONDS(TO_TIMESTAMP('1970-01-01 00:00:00'), cast("CREATEDAT" as bigint)/1000)) YEARASNUMBER, 
                COUNT(YEAR(ADD_SECONDS(TO_TIMESTAMP('1970-01-01 00:00:00'), cast("CREATEDAT" as bigint)/1000))) as TOTALCOUNT
                FROM "${schema}"."SCLABS_ALUMNIPORTAL_REPORTING" 
                WHERE CREATEDAT <= '${startdate}'  and CREATEDAT >= '${yearly}' AND SIGNUPCOUNT = '1' 
                GROUP BY YEAR(ADD_SECONDS(TO_TIMESTAMP('1970-01-01 00:00:00'), cast("CREATEDAT" as bigint)/1000))
                `
                statement = await db.preparePromisified(query);
                let yearlyresult = await db.statementExecPromisified(statement);

                let response = [{
                    "WEEKCOUNT" : weeklyresult,
                    "MONTHCOUNT": monthlyresult,
                    "YEARLYCOUNT": yearlyresult
                }]
                
                resolve(response)
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
                let yearly = 0;
                let monthly = new Date('1/1/'+new Date().getFullYear()).getTime();
                let weekly = startdate - 7 * 24 * 60 * 60 * 1000;
                // let query = `SELECT count("LOGINCOUNT") as YEARCOUNT as COUNT FROM "${schema}"."SCLABS_ALUMNIPORTAL_REPORTING" WHERE CREATEDAT <= '${startdate}' and CREATEDAT >= '${enddate}' and LOGINCOUNT = '1'`
                //----------------------------------------------------- WEEKLY query-----------------------------------------
                let query = 
                `
                SELECT DAYNAME(ADD_SECONDS(TO_TIMESTAMP('1970-01-01 00:00:00'), cast("CREATEDAT" as bigint)/1000)) DAYNAME, 
                COUNT(DAYNAME(ADD_SECONDS(TO_TIMESTAMP('1970-01-01 00:00:00'), cast("CREATEDAT" as bigint)/1000))) as TOTALCOUNT
                FROM "${schema}"."SCLABS_ALUMNIPORTAL_REPORTING" 
                WHERE CREATEDAT <= '${startdate}'  and CREATEDAT >= '${weekly}' AND DOCUMENTDOWNLOADCOUNT = '1' 
                GROUP BY DAYNAME(ADD_SECONDS(TO_TIMESTAMP('1970-01-01 00:00:00'), cast("CREATEDAT" as bigint)/1000))
                `
                let statement = await db.preparePromisified(query);
                let weeklyresult = await db.statementExecPromisified(statement);
                
                // ---------------------------------------------------Monthly Count ------------------------------------------
                query = 
                `
                SELECT MONTH(ADD_SECONDS(TO_TIMESTAMP('1970-01-01 00:00:00'), cast("CREATEDAT" as bigint)/1000)) MONTHASNUMBER, 
                COUNT(MONTH(ADD_SECONDS(TO_TIMESTAMP('1970-01-01 00:00:00'), cast("CREATEDAT" as bigint)/1000))) as TOTALCOUNT
                FROM "${schema}"."SCLABS_ALUMNIPORTAL_REPORTING" 
                WHERE CREATEDAT <= '${startdate}'  and CREATEDAT >= '${monthly}' AND DOCUMENTDOWNLOADCOUNT = '1' 
                GROUP BY MONTH(ADD_SECONDS(TO_TIMESTAMP('1970-01-01 00:00:00'), cast("CREATEDAT" as bigint)/1000))
                `
                statement = await db.preparePromisified(query);
                let monthlyresult = await db.statementExecPromisified(statement);


                // ---------------------------------------------------Yearly Count ------------------------------------------
                query = 
                `
                SELECT YEAR(ADD_SECONDS(TO_TIMESTAMP('1970-01-01 00:00:00'), cast("CREATEDAT" as bigint)/1000)) YEARASNUMBER, 
                COUNT(YEAR(ADD_SECONDS(TO_TIMESTAMP('1970-01-01 00:00:00'), cast("CREATEDAT" as bigint)/1000))) as TOTALCOUNT
                FROM "${schema}"."SCLABS_ALUMNIPORTAL_REPORTING" 
                WHERE CREATEDAT <= '${startdate}'  and CREATEDAT >= '${yearly}' AND DOCUMENTDOWNLOADCOUNT = '1' 
                GROUP BY YEAR(ADD_SECONDS(TO_TIMESTAMP('1970-01-01 00:00:00'), cast("CREATEDAT" as bigint)/1000))
                `
                statement = await db.preparePromisified(query);
                let yearlyresult = await db.statementExecPromisified(statement);

                let response = [{
                    "WEEKCOUNT" : weeklyresult,
                    "MONTHCOUNT": monthlyresult,
                    "YEARLYCOUNT": yearlyresult
                }]
                
                resolve(response)
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
                let yearly = 0;
                let monthly = new Date('1/1/'+new Date().getFullYear()).getTime();
                let weekly = startdate - 7 * 24 * 60 * 60 * 1000;
                // let query = `SELECT count("LOGINCOUNT") as YEARCOUNT as COUNT FROM "${schema}"."SCLABS_ALUMNIPORTAL_REPORTING" WHERE CREATEDAT <= '${startdate}' and CREATEDAT >= '${enddate}' and LOGINCOUNT = '1'`
                //----------------------------------------------------- WEEKLY query-----------------------------------------
                let query = 
                `
                SELECT DAYNAME(ADD_SECONDS(TO_TIMESTAMP('1970-01-01 00:00:00'), cast("CREATEDAT" as bigint)/1000)) DAYNAME, 
                COUNT(DAYNAME(ADD_SECONDS(TO_TIMESTAMP('1970-01-01 00:00:00'), cast("CREATEDAT" as bigint)/1000))) as TOTALCOUNT
                FROM "${schema}"."SCLABS_ALUMNIPORTAL_REPORTING" 
                WHERE CREATEDAT <= '${startdate}'  and CREATEDAT >= '${weekly}' AND DOCUMENTUPLOADCOUNT = '1' 
                GROUP BY DAYNAME(ADD_SECONDS(TO_TIMESTAMP('1970-01-01 00:00:00'), cast("CREATEDAT" as bigint)/1000))
                `
                let statement = await db.preparePromisified(query);
                let weeklyresult = await db.statementExecPromisified(statement);
                
                // ---------------------------------------------------Monthly Count ------------------------------------------
                query = 
                `
                SELECT MONTH(ADD_SECONDS(TO_TIMESTAMP('1970-01-01 00:00:00'), cast("CREATEDAT" as bigint)/1000)) MONTHASNUMBER, 
                COUNT(MONTH(ADD_SECONDS(TO_TIMESTAMP('1970-01-01 00:00:00'), cast("CREATEDAT" as bigint)/1000))) as TOTALCOUNT
                FROM "${schema}"."SCLABS_ALUMNIPORTAL_REPORTING" 
                WHERE CREATEDAT <= '${startdate}'  and CREATEDAT >= '${monthly}' AND DOCUMENTUPLOADCOUNT = '1' 
                GROUP BY MONTH(ADD_SECONDS(TO_TIMESTAMP('1970-01-01 00:00:00'), cast("CREATEDAT" as bigint)/1000))
                `
                statement = await db.preparePromisified(query);
                let monthlyresult = await db.statementExecPromisified(statement);


                // ---------------------------------------------------Yearly Count ------------------------------------------
                query = 
                `
                SELECT YEAR(ADD_SECONDS(TO_TIMESTAMP('1970-01-01 00:00:00'), cast("CREATEDAT" as bigint)/1000)) YEARASNUMBER, 
                COUNT(YEAR(ADD_SECONDS(TO_TIMESTAMP('1970-01-01 00:00:00'), cast("CREATEDAT" as bigint)/1000))) as TOTALCOUNT
                FROM "${schema}"."SCLABS_ALUMNIPORTAL_REPORTING" 
                WHERE CREATEDAT <= '${startdate}'  and CREATEDAT >= '${yearly}' AND DOCUMENTUPLOADCOUNT = '1' 
                GROUP BY YEAR(ADD_SECONDS(TO_TIMESTAMP('1970-01-01 00:00:00'), cast("CREATEDAT" as bigint)/1000))
                `
                statement = await db.preparePromisified(query);
                let yearlyresult = await db.statementExecPromisified(statement);

                let response = [{
                    "WEEKCOUNT" : weeklyresult,
                    "MONTHCOUNT": monthlyresult,
                    "YEARLYCOUNT": yearlyresult
                }]
                
                resolve(response)
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
                let yearly = 0;
                let monthly = new Date('1/1/'+new Date().getFullYear()).getTime();
                let weekly = startdate - 7 * 24 * 60 * 60 * 1000;
                // let query = `SELECT count("LOGINCOUNT") as YEARCOUNT as COUNT FROM "${schema}"."SCLABS_ALUMNIPORTAL_REPORTING" WHERE CREATEDAT <= '${startdate}' and CREATEDAT >= '${enddate}' and LOGINCOUNT = '1'`
                //----------------------------------------------------- WEEKLY query-----------------------------------------
                let query = 
                `
                SELECT DAYNAME(ADD_SECONDS(TO_TIMESTAMP('1970-01-01 00:00:00'), cast("CREATEDAT" as bigint)/1000)) DAYNAME, 
                COUNT(DAYNAME(ADD_SECONDS(TO_TIMESTAMP('1970-01-01 00:00:00'), cast("CREATEDAT" as bigint)/1000))) as TOTALCOUNT
                FROM "${schema}"."SCLABS_ALUMNIPORTAL_REPORTING" 
                WHERE CREATEDAT <= '${startdate}'  and CREATEDAT >= '${weekly}' AND TICKETOPENCOUNT = '1' 
                GROUP BY DAYNAME(ADD_SECONDS(TO_TIMESTAMP('1970-01-01 00:00:00'), cast("CREATEDAT" as bigint)/1000))
                `
                let statement = await db.preparePromisified(query);
                let weeklyresult = await db.statementExecPromisified(statement);
                
                // ---------------------------------------------------Monthly Count ------------------------------------------
                query = 
                `
                SELECT MONTH(ADD_SECONDS(TO_TIMESTAMP('1970-01-01 00:00:00'), cast("CREATEDAT" as bigint)/1000)) MONTHASNUMBER, 
                COUNT(MONTH(ADD_SECONDS(TO_TIMESTAMP('1970-01-01 00:00:00'), cast("CREATEDAT" as bigint)/1000))) as TOTALCOUNT
                FROM "${schema}"."SCLABS_ALUMNIPORTAL_REPORTING" 
                WHERE CREATEDAT <= '${startdate}'  and CREATEDAT >= '${monthly}' AND TICKETOPENCOUNT = '1' 
                GROUP BY MONTH(ADD_SECONDS(TO_TIMESTAMP('1970-01-01 00:00:00'), cast("CREATEDAT" as bigint)/1000))
                `
                statement = await db.preparePromisified(query);
                let monthlyresult = await db.statementExecPromisified(statement);


                // ---------------------------------------------------Yearly Count ------------------------------------------
                query = 
                `
                SELECT YEAR(ADD_SECONDS(TO_TIMESTAMP('1970-01-01 00:00:00'), cast("CREATEDAT" as bigint)/1000)) YEARASNUMBER, 
                COUNT(YEAR(ADD_SECONDS(TO_TIMESTAMP('1970-01-01 00:00:00'), cast("CREATEDAT" as bigint)/1000))) as TOTALCOUNT
                FROM "${schema}"."SCLABS_ALUMNIPORTAL_REPORTING" 
                WHERE CREATEDAT <= '${startdate}'  and CREATEDAT >= '${yearly}' AND TICKETOPENCOUNT = '1' 
                GROUP BY YEAR(ADD_SECONDS(TO_TIMESTAMP('1970-01-01 00:00:00'), cast("CREATEDAT" as bigint)/1000))
                `
                statement = await db.preparePromisified(query);
                let yearlyresult = await db.statementExecPromisified(statement);

                let response = [{
                    "WEEKCOUNT" : weeklyresult,
                    "MONTHCOUNT": monthlyresult,
                    "YEARLYCOUNT": yearlyresult
                }]
                
                resolve(response)
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
                let yearly = 0;
                let monthly = new Date('1/1/'+new Date().getFullYear()).getTime();
                let weekly = startdate - 7 * 24 * 60 * 60 * 1000;
                // let query = `SELECT count("LOGINCOUNT") as YEARCOUNT as COUNT FROM "${schema}"."SCLABS_ALUMNIPORTAL_REPORTING" WHERE CREATEDAT <= '${startdate}' and CREATEDAT >= '${enddate}' and LOGINCOUNT = '1'`
                //----------------------------------------------------- WEEKLY query-----------------------------------------
                let query = 
                `
                SELECT DAYNAME(ADD_SECONDS(TO_TIMESTAMP('1970-01-01 00:00:00'), cast("CREATEDAT" as bigint)/1000)) DAYNAME, 
                COUNT(DAYNAME(ADD_SECONDS(TO_TIMESTAMP('1970-01-01 00:00:00'), cast("CREATEDAT" as bigint)/1000))) as TOTALCOUNT
                FROM "${schema}"."SCLABS_ALUMNIPORTAL_REPORTING" 
                WHERE CREATEDAT <= '${startdate}'  and CREATEDAT >= '${weekly}' AND TICKETCLOSEDCOUT = '1' 
                GROUP BY DAYNAME(ADD_SECONDS(TO_TIMESTAMP('1970-01-01 00:00:00'), cast("CREATEDAT" as bigint)/1000))
                `
                let statement = await db.preparePromisified(query);
                let weeklyresult = await db.statementExecPromisified(statement);
                
                // ---------------------------------------------------Monthly Count ------------------------------------------
                query = 
                `
                SELECT MONTH(ADD_SECONDS(TO_TIMESTAMP('1970-01-01 00:00:00'), cast("CREATEDAT" as bigint)/1000)) MONTHASNUMBER, 
                COUNT(MONTH(ADD_SECONDS(TO_TIMESTAMP('1970-01-01 00:00:00'), cast("CREATEDAT" as bigint)/1000))) as TOTALCOUNT
                FROM "${schema}"."SCLABS_ALUMNIPORTAL_REPORTING" 
                WHERE CREATEDAT <= '${startdate}'  and CREATEDAT >= '${monthly}' AND TICKETCLOSEDCOUT = '1' 
                GROUP BY MONTH(ADD_SECONDS(TO_TIMESTAMP('1970-01-01 00:00:00'), cast("CREATEDAT" as bigint)/1000))
                `
                statement = await db.preparePromisified(query);
                let monthlyresult = await db.statementExecPromisified(statement);


                // ---------------------------------------------------Yearly Count ------------------------------------------
                query = 
                `
                SELECT YEAR(ADD_SECONDS(TO_TIMESTAMP('1970-01-01 00:00:00'), cast("CREATEDAT" as bigint)/1000)) YEARASNUMBER, 
                COUNT(YEAR(ADD_SECONDS(TO_TIMESTAMP('1970-01-01 00:00:00'), cast("CREATEDAT" as bigint)/1000))) as TOTALCOUNT
                FROM "${schema}"."SCLABS_ALUMNIPORTAL_REPORTING" 
                WHERE CREATEDAT <= '${startdate}'  and CREATEDAT >= '${yearly}' AND TICKETCLOSEDCOUT = '1' 
                GROUP BY YEAR(ADD_SECONDS(TO_TIMESTAMP('1970-01-01 00:00:00'), cast("CREATEDAT" as bigint)/1000))
                `
                statement = await db.preparePromisified(query);
                let yearlyresult = await db.statementExecPromisified(statement);

                let response = [{
                    "WEEKCOUNT" : weeklyresult,
                    "MONTHCOUNT": monthlyresult,
                    "YEARLYCOUNT": yearlyresult
                }]
                
                resolve(response)
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