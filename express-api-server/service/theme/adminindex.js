/**
 * Service layer for Admin
 */

 const AWS = require("aws-sdk");
 
 const xsenv = require("@sap/xsenv");
 const uuid = require("uuid");
 const generator = require('generate-password');
 // importing Util functions for database. 
 const utils = require("../../utils/database/index.js")();
 const authservice = require("../auth/index")();
 const emailservice = require("../ses/index")();
 module.exports = () => {
    AWS.config.update({ accessKeyId: process.env.ACCESS_KEY_ID, secretAccessKey: process.env.SECRET_ACCESS_KEY });
    const s3= new AWS.S3()
     
     /** Function get admin list from the system. 
      * @params payload | Payload contains the data from the request 
      * @params logger  | Logger is for logging object for SAP 
      * @params db 		| db is HANA db credentials for this 
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
                 resolve(results);
             } catch (error) {
                 // log the detialed error with error stack.
                 logger.error(`Error for ${logger.getTenantId()} at getcolor function: ${error.message}`)
                 // reject the promise.
                 reject(error);
             }
         });
     };
 
     /**
      * Function creates a admin in the system. 
      * @params payload | Payload contains the data from the request 
      * @params logger  | Logger is for logging object for SAP 
      * @params db 		| db is HANA db credentials for this 
      */
 
     const updatecolor = ({
         payload,
         logger,
         db
     }) => {
         return new Promise(async (resolve, reject) => {
             try {
                 const schema = await utils.currentSchema({
                     db
                 });
                 const createdat = new Date().toISOString();
                 const createdby = "admin";
                 const modifiedby = "admin";
                 const modifiedat = new Date().toISOString();;
                 const ID = uuid();
                 const primary = payload.payload.primary;
                 const secondary = payload.payload.secondary;
                 const info = payload.payload.info;
                 const error = payload.payload.error;
                 const warning= payload.payload.warning
                 const success= payload.payload.success
                 const accent= payload.payload.accent
                 
                 // Check if the request is for admin or not.
                 
                
                     // Checking if the admin already exists or not by fetching data from DB.
                     const query = `SELECT COUNT(ID) FROM "${schema}"."SCLABS_ALUMNIPORTAL_ADMIN_COLORTHEME"`
                     const statement = await db.preparePromisified(query);
                     const results = await db.statementExecPromisified(statement, [])
                     console.log(results[0]['COUNT(ID)'])
                     //  IF no results then it's not in the db continue the insertion process.
                     if (results[0]['COUNT(ID)'] == 0) {
 
                         // admin user added in SCLABS_ALUMNIPORTAL_PERSONALINFORMATION_ADMIN_HR_PERSONALINFORMATION table 
                         const query1 =
                             `INSERT INTO "${schema}"."SCLABS_ALUMNIPORTAL_ADMIN_COLORTHEME" VALUES(
                             '${createdat}',
                             '${createdby}',
                             '${modifiedat}',
                             '${modifiedby}',
                             '${ID}',	
                             '${primary}',
                             '${secondary}',
                             '${accent}',
                             '${error}',
                             '${info}',
                             '${success}',
                             '${warning}'
                             )`
                        console.log(query1)
                         const statement1 = await db.preparePromisified(query1)
                         const results1 = await db.statementExecPromisified(statement1, [])
                        resolve(results1)
                        
                             
                         } else {
                             const query1=`UPDATE "${schema}"."SCLABS_ALUMNIPORTAL_ADMIN_COLORTHEME" 
                             SET "MODIFIEDAT"='${modifiedat}',
                                 "MODIFIEDBY"='${modifiedby}',
                                 "PRIMARY"='${primary}',
                                 "SECONDARY"='${secondary}',
                                 "ACCENT"='${accent}',
                                 "ERROR"='${error}',
                                 "INFO"='${info}',
                                 "SUCCESS"='${success}',
                                 "WARNING"='${warning}'
                             WHERE 
                             "ID" =(SELECT ID FROM "${schema}"."SCLABS_ALUMNIPORTAL_ADMIN_COLORTHEME"  ORDER BY ID LIMIT 1)`
                             
                             const statement1 = await db.preparePromisified(query1)
                             const results1 = await db.statementExecPromisified(statement1, [])
                             resolve(results1)
                         }
                     // Otherwise send the message to controller that user already exists, controller will take nexessary steps based on the reply 
                     // We used the resolve() instead of reject() because it will give me 500 intenal server error if we use reject() which is wrong.  
                    
 
             } catch (error) {
                 //  logging the message
                 logger.error(`Error for ${logger.getTenantId()} at updatecolor function: ${error.message}`)
                 //  Reject the request, this will send 500 Internal server error.
                 reject(error.message);
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
                
               
                const myKey = payload.query
                const signedUrlExpireSeconds = 60*60*24*7
                
                const url = s3.getSignedUrl('getObject', {
                    Bucket: process.env.AWS_BUCKET_NAME,
                    Key: myKey,
                    Expires: signedUrlExpireSeconds
                   
                })

                let data={"key":myKey,"url":url}
                
                
                resolve(data);
            } catch (error) {
                // log the detialed error with error stack.
                logger.error(`Error for ${logger.getTenantId()} at getDynamicImage function: ${error.message}`)
                // reject the promise.
                reject(error);
            }
        });
    };

    /**
     * Function creates a admin in the system. 
     * @params payload | Payload contains the data from the request 
     * @params logger  | Logger is for logging object for SAP 
     * @params db 		| db is HANA db credentials for this 
     */

    const updateDynamicImage = ({
        payload,
        logger,
        db
    }) => {
        return new Promise(async (resolve, reject) => {
            try {
                const schema = await utils.currentSchema({
                    db
                });
                const createdat = new Date().toISOString();
                const createdby = "admin";
                const modifiedby = "admin";
                const modifiedat = new Date().toISOString();;
                const ID = uuid();
                const key=payload.payload.KEY
                var datum={}
              //  const key = payload.payload.KEY;
                // const landingImg1 = payload.payload.LANDINGIMAGE1;
                // const landingImg2 = payload.payload.LANDINGIMAGE2;
                // const landingImg3 = payload.payload.LANDINGIMAGE3;
                // const landingImg4= payload.payload.LANDINGIMAGE4
                const buf = Buffer.from(payload.payload.FILE.replace(/^data:image\/\w+;base64,/, ""),'base64')
                AWS.config.update({ accessKeyId: process.env.ACCESS_KEY_ID, secretAccessKey: process.env.SECRET_ACCESS_KEY });
                const s3= new AWS.S3()
                var upload = new AWS.S3.ManagedUpload({
                    params:{
                        Bucket: process.env.AWS_BUCKET_NAME,
                        Key: payload.payload.KEY,
                        Body:buf,
                        ContentEncoding: 'base64',
                        ContentType: 'image/png',
                        
                    }
                  });
                  var promise = upload.promise();
                  promise.then(
                   async function(data) {
                      
                      console.log(data)
                    
                      resolve(data)
                    },
                    function(err) {
                      return console.log("There was an error uploading your photo: ", err.message);
                    }
                  );
              
                    

            } catch (error) {
                //  logging the message
                logger.error(`Error for ${logger.getTenantId()} at updateDynamicImage function: ${error.message}`)
                //  Reject the request, this will send 500 Internal server error.
                reject(error.message);
            }
        });
    };

 
     
 
    
 
     return {
         updatecolor,
         getcolor,
         updateDynamicImage,
         getDynamicImage
         
     };
 
 };