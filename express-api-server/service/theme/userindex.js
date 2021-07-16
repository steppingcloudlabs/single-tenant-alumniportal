/**
 * Service layer of admin actions for user 
 */
 
 const uuid = require("uuid");
 const utils = require("../../utils/database/index.js")();
 const emailservice = require("../ses/index")();
 require('data-forge-fs');
 const csv = require('csvtojson')
 const dataForge = require('data-forge');
 const AWS = require('aws-sdk');
 module.exports = () => {
     
    AWS.config.update({ accessKeyId: process.env.ACCESS_KEY_ID, secretAccessKey: process.env.SECRET_ACCESS_KEY,region:process.env.AWS_REGION });
    const s3= new AWS.S3()
     /**
      * Function returns list of user or a user 
      * @params payload
      * @params db
      */
     
      const getcolor = ({
        payload,
        logger,
        db
    }) => {
        return new Promise(async (resolve, reject) => {
            try {

                `
                Schema is the database name we need for execuing the query. 

                Improvement : We can inject the database(schema) name at controller level by extracting from the db credentials. 
                This change might improve the response time of the API.  
                `
                const schema = await utils.currentSchema({
                    db
                })
                // Setting Limit and offeset if present in the request. 
                const LIMIT = 1
               // const offset = payload.OFFSET == undefined ? 0 : payload.OFFSET
                //  SAP Hana Query promisified for non blocking code. 
                const query =
                    `SELECT 	"PRIMARY",
                    "SECONDARY",
                    "ACCENT",
                    "ERROR",
                    "INFO",
                    "SUCCESS",
                    "WARNING" FROM "${schema}"."SCLABS_ALUMNIPORTAL_ADMIN_COLORTHEME" rows LIMIT ${LIMIT}`
                // Preparing Query.
                const statement = await db.preparePromisified(query)
                // Executing Query. 
                const results = await db.statementExecPromisified(statement, [])
                // resolve the response from SAP Hana. 
                console.log(results)
                resolve(results);
            } catch (error) {
                // log the detialed error with error stack.
                logger.error(`Error for ${logger.getTenantId()} at getcolor function: ${error.message}`)
                // reject the promise.
                reject(error);
            }
        });
    };

    const getDynamicImage = ({
        payload,
        logger,
        db
    }) => {
        return new Promise(async (resolve, reject) => {
            try {

                `
                Schema is the database name we need for execuing the query. 

                Improvement : We can inject the database(schema) name at controller level by extracting from the db credentials. 
                This change might improve the response time of the API.  
                `
                const schema = await utils.currentSchema({
                    db
                })
                // Setting Limit and offeset if present in the request. 
                const myKey = payload.query
                const signedUrlExpireSeconds = 60*60*24*7
                
                const url = s3.getSignedUrl('getObject', {
                    Bucket: process.env.AWS_BUCKET_NAME,
                    Key: myKey,
                    Expires: signedUrlExpireSeconds
                   
                })

                let data={"key":myKey,"url":url}
                resolve(data)
            } catch (error) {
                // log the detialed error with error stack.
                logger.error(`Error for ${logger.getTenantId()} at getDynamicImage function: ${error.message}`)
                // reject the promise.
                reject(error);
            }
        });
    };

    
     
   
     return {
         
         getcolor,
         getDynamicImage
         
     };
 
 };