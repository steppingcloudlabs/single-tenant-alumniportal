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
                let startdate = payload.startdate
                let enddate   = payload.enddate;
                let query = `SELECT count("LOGINCOUNT") as COUNT FROM "${schema}"."SCLABS_ALUMNIPORTAL_REPORTING" WHERE CREATEDAT >= '${startdate}' and CREATEDAT <= '${enddate}' and LOGINCOUNT = 1`
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
            
        })
    } 
    const documentdownloadcount = ({payload, db}) =>{
        return new Promise(async(resolve, reject) =>{
            
        })
    } 
    const documentuploadcount = ({payload, db}) =>{
        return new Promise(async(resolve, reject) =>{
            
        })
    } 
    const ticketopencount = ({payload, db}) =>{
        return new Promise(async(resolve, reject) =>{
            
        })
    } 
    const ticketclosedcout = ({payload, db}) =>{
        return new Promise(async(resolve, reject) =>{
            
        })
    } 
    return {
        getActiveUserStats,
        getRegisteredUsers,
        logincount
    }
}