const uuid = require("uuid");
const utils = require("../../utils/database/index.js")();
require('data-forge-fs');
const csv = require('csvtojson')
const dataForge = require('data-forge');
module.exports = () => {
	const getuser = ({
		payload,
		db
	}) => {
		return new Promise(async (resolve, reject) => {
			try {
				const schema = await utils.currentSchema({
					db
				})

				const LIMIT = payload.LIMIT == undefined ? 10 : payload.LIMIT
				const offset = payload.OFFSET == undefined ? 0 : payload.OFFSET
				const statement = await db.preparePromisified(
					`SELECT "ID", "USER_ID", "GENDER", "DATE_OF_BIRTH", "DATE_OF_RESIGNATION", "LAST_WORKING_DAY_AS_PER_NOTICE_PERIOD", "PERSONAL_EMAIL_ID","FIRST_NAME_PERSONAL_INFORMATION","LAST_NAME_PERSONAL_INFORMATION","MIDDLE_NAME_PERSONAL_INFORMATION","NATIONALITY_PERSONAL_INFORMATION","SALUTATION_PERSONAL_INFORMATION","CITY_ADDRESSES","PHONE_NUMBER_PHONE_INFORMATION","MANAGER_JOB_INFORMATION","DESIGNATION_JOB_INFORMATION", IFNULL(STATE, '') "STATE",
					IFNULL(COUNTRY, '') "COUNTRY" FROM "${schema}"."SCLABS_ALUMNIPORTAL_MASTERDATA_MASTERDATA" rows LIMIT ${LIMIT} offset ${offset}`
				)
				const results = await db.statementExecPromisified(statement, [])
				resolve(results);
			} catch (error) {
				reject(error);
			}
		});
	};

	const createuser = ({
		payload,
		db
	}) => {
		return new Promise(async (resolve, reject) => {
			console.log('creae user:' + payload)
			try {
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
				} else {
					try {
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
							COUNTRY
						} = payload.payload;
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
							resolve("userexists")
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
							resolve(results);
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

	const deleteuser = ({
		payload,
		db
	}) => {
		return new Promise(async (resolve, reject) => {
			try {

				const schema = await utils.currentSchema({
					db
				})
				const query = `DELETE FROM "${schema}"."SCLABS_ALUMNIPORTAL_MASTERDATA_MASTERDATA"  WHERE ID = '${payload.payload.ID}'`

				const statement = await db.preparePromisified(query);
				const results = await db.statementExecPromisified(statement, [])

				resolve(results);
			} catch (error) {
				reject(error);
			}
		});
	};

	const createuserbulk = ({ payload, db }) => {
		return new Promise(async (resolve, reject) => {
			try {
				if (payload.files && payload.files.filename.mimetype == 'text/csv') {
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
							console.log("results: " + results)
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
	return {
		createuser,
		updateuser,
		getuser,
		deleteuser,
		createuserbulk
	};

};