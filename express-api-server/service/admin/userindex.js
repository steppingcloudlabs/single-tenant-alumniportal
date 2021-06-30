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

	/**
	 * Function returns list of user or a user 
	 * @params payload
	 * @params db
	 */
	
	const getuser = ({
		payload,
		db
	}) => {
		return new Promise(async (resolve, reject) => {
			try {
				// Get the schema name or database name for this request. 
				const schema = await utils.currentSchema({
					db
				})
				//  pagination manual set, same configration as of controller.
				const LIMIT = payload.LIMIT == undefined ? 10 : payload.LIMIT
				const offset = payload.OFFSET == undefined ? 0 : payload.OFFSET
				// userId checks. 
				const USERID = (payload.USERID == undefined || payload.USERID == null || payload.USERID == "null") ? false : payload.USERID
				// ----- Promisied SAP Hana Query execution. 
				// IFNULL (Read the SAP HANA SQL Reference )
				if (USERID) {
					const statement = await db.preparePromisified(
						`SELECT "ID", "USER_ID", "GENDER", "DATE_OF_BIRTH", "DATE_OF_RESIGNATION", "LAST_WORKING_DAY_AS_PER_NOTICE_PERIOD", "PERSONAL_EMAIL_ID","FIRST_NAME_PERSONAL_INFORMATION","LAST_NAME_PERSONAL_INFORMATION","MIDDLE_NAME_PERSONAL_INFORMATION","NATIONALITY_PERSONAL_INFORMATION","SALUTATION_PERSONAL_INFORMATION","CITY_ADDRESSES","PHONE_NUMBER_PHONE_INFORMATION","MANAGER_JOB_INFORMATION","DESIGNATION_JOB_INFORMATION", IFNULL(STATE, '') "STATE",
					IFNULL(COUNTRY, '') "COUNTRY", "ISACTIVE" FROM "${schema}"."SCLABS_ALUMNIPORTAL_MASTERDATA_MASTERDATA" WHERE USER_ID = '${USERID}' LIMIT ${LIMIT} offset ${offset} `
					)
					const results = await db.statementExecPromisified(statement, [])
					resolve(results);
				} else {
					const statement = await db.preparePromisified(
						`SELECT "ID", "USER_ID", "GENDER", "DATE_OF_BIRTH", "DATE_OF_RESIGNATION", "LAST_WORKING_DAY_AS_PER_NOTICE_PERIOD", "PERSONAL_EMAIL_ID","FIRST_NAME_PERSONAL_INFORMATION","LAST_NAME_PERSONAL_INFORMATION","MIDDLE_NAME_PERSONAL_INFORMATION","NATIONALITY_PERSONAL_INFORMATION","SALUTATION_PERSONAL_INFORMATION","CITY_ADDRESSES","PHONE_NUMBER_PHONE_INFORMATION","MANAGER_JOB_INFORMATION","DESIGNATION_JOB_INFORMATION", IFNULL(STATE, '') "STATE",
					IFNULL(COUNTRY, '') "COUNTRY", "ISACTIVE" FROM "${schema}"."SCLABS_ALUMNIPORTAL_MASTERDATA_MASTERDATA" rows LIMIT ${LIMIT} offset ${offset}`
					)
					const results = await db.statementExecPromisified(statement, [])
					resolve(results);
				}

			} catch (error) {
				reject(error);
			}
		});
	};

	/**
	 * Function creating a user in database as well as sending the emails to the user 
	 * Also update the user if ID exists in the paylaod.
	 * @params payload 
	 * @params db 
	 */
	
	const createuser = ({
		payload,
		db
	}) => {
		return new Promise(async (resolve, reject) => {
			`
			Below code does 2 things 
			1. update user if there is any ID in the payload. 
			2. Insert the user id there is no ID in the payload. 

			This is very dumb implementation, a lot of room for refactor. Need to checkout hana UPSERT Statement for this thing.  
			`

			try {
				//  Check for ID and udpate user 
				if (payload.payload.ID) {
					try {
						let response = await updateuser({
							payload,
							db
						});
						resolve(response);
					} catch (error) {
						reject(error)
					}
				} 
				// Insert user to database
				else {
					try {
						// simple way to extract values from a json object. 
						// we are writing payload.payload because we are using "paylaod" in our apis as well.
						// # Important: use different language for naming convention. 
						let {
							USER_ID,
							DATE_OF_RELIEVING,
							DATE_OF_RESIGNATION,
							LAST_WORKING_DAY_AS_PER_NOTICE_PERIOD,
							PERSONAL_EMAIL_ID,
							FIRST_NAME_PERSONAL_INFORMATION,
							LAST_NAME_PERSONAL_INFORMATION,
							MIDDLE_NAME_PERSONAL_INFORMATION,
							NATIONALITY_PERSONAL_INFORMATION,
							SALUTATION_PERSONAL_INFORMATION,
							CITY_ADDRESSES,
							PHONE_NUMBER_PHONE_INFORMATION,
							MANAGER_JOB_INFORMATION,
							DESIGNATION_JOB_INFORMATION,
							GENDER,
							DATE_OF_BIRTH,
							STATE,
							COUNTRY,
							URL
						} = payload.payload;

						
						// Handling the cases for the data comming in payload. A simple terary satement. 
						
						DATE_OF_RELIEVING = DATE_OF_RELIEVING == undefined ? " " : DATE_OF_RELIEVING;
						USER_ID = USER_ID == undefined ? " " : USER_ID;
						DATE_OF_RESIGNATION = DATE_OF_RESIGNATION == undefined ? " " : DATE_OF_RESIGNATION;
						LAST_WORKING_DAY_AS_PER_NOTICE_PERIOD = LAST_WORKING_DAY_AS_PER_NOTICE_PERIOD == undefined ? " " : LAST_WORKING_DAY_AS_PER_NOTICE_PERIOD;
						PERSONAL_EMAIL_ID = PERSONAL_EMAIL_ID == undefined ? " " : PERSONAL_EMAIL_ID;
						FIRST_NAME_PERSONAL_INFORMATION = FIRST_NAME_PERSONAL_INFORMATION == undefined ? " " : FIRST_NAME_PERSONAL_INFORMATION;
						LAST_NAME_PERSONAL_INFORMATION = LAST_NAME_PERSONAL_INFORMATION == undefined ? " " : LAST_NAME_PERSONAL_INFORMATION;
						MIDDLE_NAME_PERSONAL_INFORMATION = MIDDLE_NAME_PERSONAL_INFORMATION == undefined ? " " : MIDDLE_NAME_PERSONAL_INFORMATION;
						NATIONALITY_PERSONAL_INFORMATION = NATIONALITY_PERSONAL_INFORMATION == undefined ? " " : NATIONALITY_PERSONAL_INFORMATION;
						SALUTATION_PERSONAL_INFORMATION = SALUTATION_PERSONAL_INFORMATION == undefined ? " " : SALUTATION_PERSONAL_INFORMATION;
						CITY_ADDRESSES = CITY_ADDRESSES == undefined ? " " : CITY_ADDRESSES;
						PHONE_NUMBER_PHONE_INFORMATION = PHONE_NUMBER_PHONE_INFORMATION == undefined ? " " : PHONE_NUMBER_PHONE_INFORMATION;
						MANAGER_JOB_INFORMATION = MANAGER_JOB_INFORMATION == undefined ? " " : MANAGER_JOB_INFORMATION;
						DESIGNATION_JOB_INFORMATION = DESIGNATION_JOB_INFORMATION == undefined ? " " : DESIGNATION_JOB_INFORMATION;
						GENDER = GENDER == undefined ? " " : GENDER;
						DATE_OF_BIRTH = DATE_OF_BIRTH == undefined ? " " : DATE_OF_BIRTH;
						STATE = STATE == undefined ? " " : STATE;
						COUNTRY = COUNTRY == undefined ? " " : COUNTRY;
						ISACTIVE = "unregistered";
						const schema = await utils.currentSchema({
							db
						});

						//  Handling the NaNs in data of successfactors. 

						DATE_OF_BIRTH = new Date(DATE_OF_BIRTH).getTime().toString() == "NaN" ? DATE_OF_BIRTH : new Date(DATE_OF_BIRTH).getTime();
						DATE_OF_RESIGNATION = new Date(DATE_OF_RESIGNATION).getTime().toString() == "NaN" ? DATE_OF_RESIGNATION : new Date(DATE_OF_RESIGNATION).getTime();
						LAST_WORKING_DAY_AS_PER_NOTICE_PERIOD = new Date(LAST_WORKING_DAY_AS_PER_NOTICE_PERIOD).getTime().toString() == "NaN" ? LAST_WORKING_DAY_AS_PER_NOTICE_PERIOD : new Date(LAST_WORKING_DAY_AS_PER_NOTICE_PERIOD).getTime();
						DATE_OF_RELIEVING = new Date(DATE_OF_RELIEVING).getTime().toString() == "NaN" ? DATE_OF_RELIEVING : new Date(DATE_OF_RELIEVING).getTime();

						// preparing the data we want to insert in table. 
						const createdat = new Date().toISOString();
						const createdby = "admin";
						const modifiedby = "admin";
						const modifiedat = new Date().toISOString();
						const date = new Date().toISOString();
						const ID = uuid()

						// checking if user exists or not. 
						const query1 = `SELECT USER_ID FROM "${schema}"."SCLABS_ALUMNIPORTAL_MASTERDATA_MASTERDATA" WHERE USER_ID='${USER_ID}'`

						const statement1 = await db.preparePromisified(query1)

						const results1 = await db.statementExecPromisified(statement1, [])
						if (results1.length != 0) {
							//  sending the status to controller level. It will send the respose cdoe and relecant message in the API. 
							resolve("userexists")
						} else {
							// Query Preperation and execution. 
							const query =
								`INSERT INTO "${schema}"."SCLABS_ALUMNIPORTAL_MASTERDATA_MASTERDATA" VALUES(	
									'${createdat}',
									'${createdby}',
									'${modifiedat}',
									'${modifiedby}',
									'${ID}',
									'${USER_ID}',
									'${GENDER}',
									'${DATE_OF_BIRTH}',
									'${DATE_OF_RELIEVING}',
									'${DATE_OF_RESIGNATION}',
									'${LAST_WORKING_DAY_AS_PER_NOTICE_PERIOD}',
									'${PERSONAL_EMAIL_ID}',
									'${FIRST_NAME_PERSONAL_INFORMATION}',
									'${LAST_NAME_PERSONAL_INFORMATION}',
									'${MIDDLE_NAME_PERSONAL_INFORMATION}',
									'${NATIONALITY_PERSONAL_INFORMATION}',
									'${SALUTATION_PERSONAL_INFORMATION}',
									'${CITY_ADDRESSES}',
									'${PHONE_NUMBER_PHONE_INFORMATION}',
									'${MANAGER_JOB_INFORMATION}',
									'${DESIGNATION_JOB_INFORMATION}',
									'${STATE}',
									'${COUNTRY}',
									'${ISACTIVE}'
								)`

							const statement = await db.preparePromisified(query)
							let results = await db.statementExecPromisified(statement, [])

							// If the above query fails the email will not trigger. 
							// Send the email to the user for signup/
							let res = await emailservice.sendEmail({ PERSONAL_EMAIL_ID, FIRST_NAME_PERSONAL_INFORMATION, URL });
							if (res) {
								resolve(results)
							} else {
								// if there is a problem while sending the email, delelte the user from database. 
								const query =
									`DELETE FROM  "${schema}"."SCLABS_ALUMNIPORTAL_MASTERDATA_MASTERDATA"  WHERE USER_ID = '${USER_ID}'`
								const statement = await db.preparePromisified(query)
								let results = await db.statementExecPromisified(statement, [])
								// reject the request. 
								reject(res)
							}
						}

					} catch (error) {
						reject(error);
					}
				}
			} catch (error) {
				reject(error)
			}


		});
	};

	/**
	 * Function update user in Masterdata. As we can't update multiple columns normally we have to write case statements for each colmns and check if it needs to be update or not.
	 * @params payload 
	 * @params db
	 */
	

	const updateuser = ({
		payload,
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
				const modifiedat = new Date().toISOString();
				const date = new Date().toISOString();
				const ID = uuid();
				const USER_ID = payload.USER_ID;
				const GENDER = payload._GENDER;
				const DATE_OF_BIRTH = payload.DATE_OF_BIRTH
				const DATE_OF_RESIGNATION = payload.DATE_OF_RESIGNATION
				const LAST_WORKING_DAY_AS_PER_NOTICE_PERIOD = payload.LAST_WORKING_DAY_AS_PER_NOTICE_PERIOD
				const PERSONAL_EMAIL_ID = payload.PERSONAL_EMAIL_ID
				const FIRST_NAME_PERSONAL_INFORMATION = payload.FIRST_NAME_PERSONAL_INFORMATION
				const LAST_NAME_PERSONAL_INFORMATION = payload.LAST_NAME_PERSONAL_INFORMATION
				const MIDDLE_NAME_PERSONAL_INFORMATION = payload.MIDDLE_NAME_PERSONAL_INFORMATION
				const NATIONALITY_PERSONAL_INFORMATION = payload.NATIONALITY_PERSONAL_INFORMATION
				const SALUTATION_PERSONAL_INFORMATION = payload.SALUTATION_PERSONAL_INFORMATION
				const CITY_ADDRESSES = payload.CITY_ADDRESSES
				const PHONE_NUMBER_PHONE_INFORMATION = payload.PHONE_NUMBER_PHONE_INFORMATION
				const MANAGER_JOB_INFORMATION = payload.manager_job_informatio
				const DESIGNATION_JOB_INFORMATION = payload.DESIGNATION_JOB_INFORMATION

				// CASE Statements for handling each case, 
				const statement = await db.preparePromisified(
					`UPDATE "${schema}"."SCLABS_ALUMNIPORTAL_MASTERDATA_MASTERDATA"
					SET "USER_ID" = CASE 
						WHEN '${payload.payload.USER_ID}' != 'undefined' THEN '${payload.payload.USER_ID}'
						ELSE (select "USER_ID" FROM "${schema}"."SCLABS_ALUMNIPORTAL_MASTERDATA_MASTERDATA" where "ID"='${payload.payload.ID}')
						END,
						"GENDER" = CASE
						WHEN '${payload.payload.GENDER}' != 'undefined' THEN '${payload.payload.GENDER}'
						ELSE (select "GENDER" FROM "${schema}"."SCLABS_ALUMNIPORTAL_MASTERDATA_MASTERDATA" where "ID"='${payload.payload.ID}')
						END,
						"DATE_OF_BIRTH" = CASE
						WHEN '${payload.payload.DATE_OF_BIRTH}' != 'undefined' THEN '${payload.payload.DATE_OF_BIRTH}'
						ELSE (select "DATE_OF_BIRTH" FROM "${schema}"."SCLABS_ALUMNIPORTAL_MASTERDATA_MASTERDATA" where "ID"='${payload.payload.ID}')
						END,
						"DATE_OF_RESIGNATION" = CASE
						WHEN '${payload.payload.DATE_OF_RESIGNATION}' != 'undefined' THEN '${payload.payload.DATE_OF_RESIGNATION}'
						ELSE (select "DATE_OF_RESIGNATION" FROM "${schema}"."SCLABS_ALUMNIPORTAL_MASTERDATA_MASTERDATA" where "ID"='${payload.payload.ID}')
						END,
						"LAST_WORKING_DAY_AS_PER_NOTICE_PERIOD" = CASE
						WHEN '${payload.payload.LAST_WORKING_DAY_AS_PER_NOTICE_PERIOD}' != 'undefined' THEN '${payload.payload.LAST_WORKING_DAY_AS_PER_NOTICE_PERIOD}'
						ELSE (select "LAST_WORKING_DAY_AS_PER_NOTICE_PERIOD" FROM "${schema}"."SCLABS_ALUMNIPORTAL_MASTERDATA_MASTERDATA" where "ID"='${payload.payload.ID}')
						END,
						"PERSONAL_EMAIL_ID" = CASE
						WHEN '${payload.payload.PERSONAL_EMAIL_ID}' != 'undefined' THEN '${payload.payload.PERSONAL_EMAIL_ID}'
						ELSE (select "PERSONAL_EMAIL_ID" FROM "${schema}"."SCLABS_ALUMNIPORTAL_MASTERDATA_MASTERDATA" where "ID"='${payload.payload.ID}')
						END,
						"FIRST_NAME_PERSONAL_INFORMATION" = CASE
						WHEN '${payload.payload.FIRST_NAME_PERSONAL_INFORMATION}' != 'undefined' THEN '${payload.payload.FIRST_NAME_PERSONAL_INFORMATION}'
						ELSE (select "FIRST_NAME_PERSONAL_INFORMATION" FROM "${schema}"."SCLABS_ALUMNIPORTAL_MASTERDATA_MASTERDATA" where "ID"='${payload.payload.ID}')
						END,
						"LAST_NAME_PERSONAL_INFORMATION" = CASE
						WHEN '${payload.payload.LAST_NAME_PERSONAL_INFORMATION}' != 'undefined' THEN '${payload.payload.LAST_NAME_PERSONAL_INFORMATION}'
						ELSE (select "LAST_NAME_PERSONAL_INFORMATION" FROM "${schema}"."SCLABS_ALUMNIPORTAL_MASTERDATA_MASTERDATA" where "ID"='${payload.payload.ID}')
						END,
						"MIDDLE_NAME_PERSONAL_INFORMATION" = CASE
						WHEN '${payload.payload.MIDDLE_NAME_PERSONAL_INFORMATION}' != 'undefined' THEN '${payload.payload.MIDDLE_NAME_PERSONAL_INFORMATION}'
						ELSE (select "MIDDLE_NAME_PERSONAL_INFORMATION" FROM "${schema}"."SCLABS_ALUMNIPORTAL_MASTERDATA_MASTERDATA" where "ID"='${payload.payload.ID}')
						END,
						"NATIONALITY_PERSONAL_INFORMATION" = CASE
						WHEN '${payload.payload.NATIONALITY_PERSONAL_INFORMATION}' != 'undefined' THEN '${payload.payload.NATIONALITY_PERSONAL_INFORMATION}'
						ELSE (select "NATIONALITY_PERSONAL_INFORMATION" FROM "${schema}"."SCLABS_ALUMNIPORTAL_MASTERDATA_MASTERDATA" where "ID"='${payload.payload.ID}')
						END,
						"SALUTATION_PERSONAL_INFORMATION" = CASE
						WHEN '${payload.payload.SALUTATION_PERSONAL_INFORMATION}' != 'undefined' THEN '${payload.payload.SALUTATION_PERSONAL_INFORMATION}'
						ELSE (select "SALUTATION_PERSONAL_INFORMATION" FROM "${schema}"."SCLABS_ALUMNIPORTAL_MASTERDATA_MASTERDATA" where "ID"='${payload.payload.ID}')
						END,
						"CITY_ADDRESSES" = CASE
						WHEN '${payload.payload.CITY_ADDRESSES}' != 'undefined' THEN '${payload.payload.CITY_ADDRESSES}'
						ELSE (select "CITY_ADDRESSES" FROM "${schema}"."SCLABS_ALUMNIPORTAL_MASTERDATA_MASTERDATA" where "ID"='${payload.payload.ID}')
						END,
						"PHONE_NUMBER_PHONE_INFORMATION" = CASE
						WHEN '${payload.payload.PHONE_NUMBER_PHONE_INFORMATION}' != 'undefined' THEN '${payload.payload.PHONE_NUMBER_PHONE_INFORMATION}'
						ELSE (select "PHONE_NUMBER_PHONE_INFORMATION" FROM "${schema}"."SCLABS_ALUMNIPORTAL_MASTERDATA_MASTERDATA" where "ID"='${payload.payload.ID}')
						END,
						"MANAGER_JOB_INFORMATION" = CASE
						WHEN '${payload.payload.MANAGER_JOB_INFORMATION}' != 'undefined' THEN '${payload.payload.MANAGER_JOB_INFORMATION}'
						ELSE (select "MANAGER_JOB_INFORMATION" FROM "${schema}"."SCLABS_ALUMNIPORTAL_MASTERDATA_MASTERDATA" where "ID"='${payload.payload.ID}')
						END,
						"DESIGNATION_JOB_INFORMATION" = CASE
						WHEN '${payload.payload.DESIGNATION_JOB_INFORMATION}' != 'undefined' THEN '${payload.payload.DESIGNATION_JOB_INFORMATION}'
						ELSE (select "DESIGNATION_JOB_INFORMATION" FROM "${schema}"."SCLABS_ALUMNIPORTAL_MASTERDATA_MASTERDATA" where "ID"='${payload.payload.ID}')
						END,
						"STATE" = CASE
						WHEN '${payload.payload.STATE}' != 'undefined' THEN '${payload.payload.STATE}'
						ELSE (select "STATE" FROM "${schema}"."SCLABS_ALUMNIPORTAL_MASTERDATA_MASTERDATA" where "ID"='${payload.payload.ID}')
						END,
						"COUNTRY" = CASE
						WHEN '${payload.payload.STATE}' != 'undefined' THEN '${payload.payload.STATE}'
						ELSE (select "STATE" FROM "${schema}"."SCLABS_ALUMNIPORTAL_MASTERDATA_MASTERDATA" where "ID"='${payload.payload.ID}')
						END,

					"MODIFIEDBY" = '${modifiedby}',
    				"MODIFIEDAT" = '${modifiedat}'
    				where
    				"ID" = '${payload.payload.ID}'`
				)
				const results = await db.statementExecPromisified(statement, [])
				if (results == 1) {
					let statement = await db.preparePromisified(
						`SELECT "ID", "USER_ID", "GENDER", "DATE_OF_BIRTH", "DATE_OF_RESIGNATION", "LAST_WORKING_DAY_AS_PER_NOTICE_PERIOD", "PERSONAL_EMAIL_ID","FIRST_NAME_PERSONAL_INFORMATION","LAST_NAME_PERSONAL_INFORMATION","MIDDLE_NAME_PERSONAL_INFORMATION","NATIONALITY_PERSONAL_INFORMATION","SALUTATION_PERSONAL_INFORMATION","CITY_ADDRESSES","PHONE_NUMBER_PHONE_INFORMATION","MANAGER_JOB_INFORMATION","DESIGNATION_JOB_INFORMATION", IFNULL(STATE, '') "STATE",
					IFNULL(COUNTRY, '') "COUNTRY" FROM "${schema}"."SCLABS_ALUMNIPORTAL_MASTERDATA_MASTERDATA" WHERE "ID" = '${payload.payload.ID}'`
					)
					let data = await db.statementExecPromisified(statement, [])
					data.ID = payload.payload.ID
					resolve(data);
				} else {
					reject(results)
				}
			} catch (error) {
				reject(error);
			}
		});
	};

	/**
	 * Fucntion delete user from database 
	 * @params payload 
	 * @params db
	 */

	const deleteuser = ({
		payload,
		db
	}) => {
		return new Promise(async (resolve, reject) => {
			try {

				const schema = await utils.currentSchema({
					db
				})

				// get USER_ID from Payload ID
				let query = `SELECT USER_ID FROM "${schema}"."SCLABS_ALUMNIPORTAL_MASTERDATA_MASTERDATA"  WHERE ID = '${payload.payload.ID}'`
				let statement = await db.preparePromisified(query);
				let user_id = await db.statementExecPromisified(statement, [])
				if (user_id.length == 0) {
					resolve("Invalid ID")
				} else {
					user_id = user_id[0].USER_ID
					// DELETE all the data of USER_ID from the system except askhr. 

					query = `DELETE FROM "${schema}"."SCLABS_ALUMNIPORTAL_AUTH_LOGIN"  WHERE USERID = '${user_id}'`
					statement = await db.preparePromisified(query);
					results = await db.statementExecPromisified(statement, [])


					query = `DELETE FROM "${schema}"."SCLABS_ALUMNIPORTAL_USERS_USERS"  WHERE USER_ID = '${user_id}'`
					statement = await db.preparePromisified(query);
					results = await db.statementExecPromisified(statement, [])


					query = `DELETE FROM "${schema}"."SCLABS_ALUMNIPORTAL_MASTERDATA_MASTERDATA"  WHERE USER_ID = '${user_id}'`
					statement = await db.preparePromisified(query);
					results = await db.statementExecPromisified(statement, [])

					resolve(results);
				}

			} catch (error) {

				reject(error);
			}
		});
	};

	/**
	 * Function upload the users in bulk if a csv is uplaoded. 
	 * @param {payload, db}  
	 *  Not sure if we are using this as well, delete on your own risk.
	 */

	const createuserbulk = ({ payload, db }) => {
		return new Promise(async (resolve, reject) => {
			try {

				if (payload.files) {
					let file = payload.files.filename,
						filename = file.name;
					file.mv("./uploads/" + filename, function (err) {
						if (err) {
							console.log(err);
							reject(err);
						}
					})


					// for (let i = 0; i < array.length; i++) {
					// 	console.log(array[i]);
					// 	const createdat = new Date().toISOString();
					// 	const createdby = "admin";
					// 	const modifiedby = "admin";
					// 	const modifiedat = new Date().toISOString();
					// 	array[i].ID = uuid();
					// 	array[i].createdat = createdat;
					// 	array[i].createdby = createdby;
					// 	array[i].modifiedat = modifiedat;
					// 	array[i].modifiedby = modifiedby;
					// }
					// console.log(array);

					// df.asCSV().writeFileSync("./uploads/" + filename);

					// array = csv().fromFile("./uploads/" + filename);
					let array = await csv().fromFile("./uploads/" + filename);
					// df = new dataForge.DataFrame(array);
					// console.log(array.length);
					for (let i = 0; i < array.length; i++) {

						payload = array[i];
						// console.log(payload)
						let { USER_ID, DATE_OF_RELIEVING, DATE_OF_RESIGNATION, LAST_WORKING_DAY_AS_PER_NOTICE_PERIOD, PERSONAL_EMAIL_ID, FIRST_NAME_PERSONAL_INFORMATION, LAST_NAME_PERSONAL_INFORMATION, MIDDLE_NAME_PERSONAL_INFORMATION, NATIONALITY_PERSONAL_INFORMATION, SALUTATION_PERSONAL_INFORMATION, CITY_ADDRESSES, PHONE_NUMBER_PHONE_INFORMATION, MANAGER_JOB_INFORMATION, DESIGNATION_JOB_INFORMATION, GENDER, DATE_OF_BIRTH, STATE, COUNTRY } = payload;
						DATE_OF_RELIEVING = DATE_OF_RELIEVING == undefined ? " " : DATE_OF_RELIEVING;
						USER_ID = USER_ID == undefined ? " " : USER_ID;
						DATE_OF_RESIGNATION = DATE_OF_RESIGNATION == undefined ? " " : DATE_OF_RESIGNATION;
						LAST_WORKING_DAY_AS_PER_NOTICE_PERIOD = LAST_WORKING_DAY_AS_PER_NOTICE_PERIOD == undefined ? " " : LAST_WORKING_DAY_AS_PER_NOTICE_PERIOD;
						PERSONAL_EMAIL_ID = PERSONAL_EMAIL_ID == undefined ? " " : PERSONAL_EMAIL_ID;
						FIRST_NAME_PERSONAL_INFORMATION = FIRST_NAME_PERSONAL_INFORMATION == undefined ? " " : FIRST_NAME_PERSONAL_INFORMATION;
						LAST_NAME_PERSONAL_INFORMATION = LAST_NAME_PERSONAL_INFORMATION == undefined ? " " : LAST_NAME_PERSONAL_INFORMATION;
						MIDDLE_NAME_PERSONAL_INFORMATION = MIDDLE_NAME_PERSONAL_INFORMATION == undefined ? " " : MIDDLE_NAME_PERSONAL_INFORMATION;
						NATIONALITY_PERSONAL_INFORMATION = NATIONALITY_PERSONAL_INFORMATION == undefined ? " " : NATIONALITY_PERSONAL_INFORMATION;
						SALUTATION_PERSONAL_INFORMATION = SALUTATION_PERSONAL_INFORMATION == undefined ? " " : SALUTATION_PERSONAL_INFORMATION;
						CITY_ADDRESSES = CITY_ADDRESSES == undefined ? " " : CITY_ADDRESSES;
						PHONE_NUMBER_PHONE_INFORMATION = PHONE_NUMBER_PHONE_INFORMATION == undefined ? " " : PHONE_NUMBER_PHONE_INFORMATION;
						MANAGER_JOB_INFORMATION = MANAGER_JOB_INFORMATION == undefined ? " " : MANAGER_JOB_INFORMATION;
						DESIGNATION_JOB_INFORMATION = DESIGNATION_JOB_INFORMATION == undefined ? " " : DESIGNATION_JOB_INFORMATION;
						GENDER = GENDER == undefined ? " " : GENDER;
						DATE_OF_BIRTH = DATE_OF_BIRTH == undefined ? " " : DATE_OF_BIRTH;
						STATE = STATE == undefined ? " " : STATE;
						COUNTRY = COUNTRY == undefined ? " " : COUNTRY;
						const schema = await utils.currentSchema({
							db
						});

						DATE_OF_BIRTH = new Date(DATE_OF_BIRTH).getTime().toString() == "NaN" ? DATE_OF_BIRTH : new Date(DATE_OF_BIRTH).getTime();
						DATE_OF_RESIGNATION = new Date(DATE_OF_RESIGNATION).getTime().toString() == "NaN" ? DATE_OF_RESIGNATION : new Date(DATE_OF_RESIGNATION).getTime();
						LAST_WORKING_DAY_AS_PER_NOTICE_PERIOD = new Date(LAST_WORKING_DAY_AS_PER_NOTICE_PERIOD).getTime().toString() == "NaN" ? LAST_WORKING_DAY_AS_PER_NOTICE_PERIOD : new Date(LAST_WORKING_DAY_AS_PER_NOTICE_PERIOD).getTime();
						DATE_OF_RELIEVING = new Date(DATE_OF_RELIEVING).getTime().toString() == "NaN" ? DATE_OF_RELIEVING : new Date(DATE_OF_RELIEVING).getTime();

						const createdat = new Date().toISOString();
						const createdby = "admin";
						const modifiedby = "admin";
						const modifiedat = new Date().toISOString();
						const date = new Date().toISOString();
						const ID = uuid()
						const query1 = `SELECT USER_ID FROM "${schema}"."SCLABS_ALUMNIPORTAL_MASTERDATA_MASTERDATA" WHERE USER_ID='${USER_ID}'`

						const statement1 = await db.preparePromisified(query1)

						const results1 = await db.statementExecPromisified(statement1, [])
						if (results1.length != 0) {
							array[i].status = "duplicate"
						} else {
							const query =
								`INSERT INTO "${schema}"."SCLABS_ALUMNIPORTAL_MASTERDATA_MASTERDATA" VALUES(	
				        '${createdat}',
						'${createdby}',
						'${modifiedat}',
						'${modifiedby}',
						'${ID}',
						'${USER_ID}',
						'${GENDER}',
						'${DATE_OF_BIRTH}',
						'${DATE_OF_RELIEVING}',
						'${DATE_OF_RESIGNATION}',
						'${LAST_WORKING_DAY_AS_PER_NOTICE_PERIOD}',
						'${PERSONAL_EMAIL_ID}',
					    '${FIRST_NAME_PERSONAL_INFORMATION}',
						'${LAST_NAME_PERSONAL_INFORMATION}',
						'${MIDDLE_NAME_PERSONAL_INFORMATION}',
						'${NATIONALITY_PERSONAL_INFORMATION}',
						'${SALUTATION_PERSONAL_INFORMATION}',
						'${CITY_ADDRESSES}',
						'${PHONE_NUMBER_PHONE_INFORMATION}',
						'${MANAGER_JOB_INFORMATION}',
						'${DESIGNATION_JOB_INFORMATION}',
						'${STATE}',
						'${COUNTRY}'
						)`

							const statement = await db.preparePromisified(query)
							let results = await db.statementExecPromisified(statement, [])
							// console.log("results: " + results)
							if (results == 1) {
								array[i].status = 'success';
							} else {
								array[i].status = "failed";
							}
							// console.log(array[i]);
						}
					}
					df = new dataForge.DataFrame(array);
					// df.asCSV().writeFileSync("./uploads/" + filename);
					// console.log(JSON.parse(new dataForge.DataFrame(array).toJSON()))
					resolve(JSON.parse(new dataForge.DataFrame(array).toJSON()));
				}
				else {
					resolve("Not Uploaded, csv file expected");
				}

			} catch (error) {
				reject(error);
			}

		})
	}

	// ---------------Below function are not used anywhere as far as I know, delete them on your own risk.--------------------------------

	const bounces = () => {

	}

	const sendEmail = ({ payload, db }) => {
		return new Promise(async (resolve, reject) => {
			try {

				AWS.config.update({
					accessKeyId: process.env.accessKeyId,
					secretAccessKey: process.env.secretAccessKey,
					region: "us-east-1"
				});
			} catch (error) {
				reject(error);
			}
		});
	}
	return {
		createuser,
		updateuser,
		getuser,
		deleteuser,
		createuserbulk
	};

};