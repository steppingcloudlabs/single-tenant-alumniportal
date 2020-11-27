const uuid = require("uuid");
const utils = require("../../utils/database/index.js")();
module.exports = () => {
	const getuser = ({
		payload,
		logger,
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
					`SELECT "ID", "USER_ID", "GENDER", "DATE_OF_BIRTH", "DATE_OF_RESIGNATION", "LAST_WORKING_DAY_AS_PER_NOTICE_PERIOD", "PERSONAL_EMAIL_ID","FIRST_NAME_PERSONAL_INFORMATION","LAST_NAME_PERSONAL_INFORMATION","MIDDLE_NAME_PERSONAL_INFORMATION","NATIONALITY_PERSONAL_INFORMATION","SALUTATION_PERSONAL_INFORMATION","CITY_ADDRESSES","PHONE_NUMBER_PHONE_INFORMATION","MANAGER_JOB_INFORMATION","DESIGNATION_JOB_INFORMATION" FROM "${schema}"."SCLABS_ALUMNIPORTAL_MASTERDATA_MASTERDATA" rows LIMIT ${LIMIT} offset ${offset}`
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
					DATE_OF_BIRTH
				} = payload.payload;
				DATE_OF_RELIEVING = DATE_OF_RELIEVING == undefined ? " " : Date.parse(DATE_OF_RELIEVING);
				USER_ID = USER_ID == undefined ? " " : USER_ID;

				DATE_OF_RESIGNATION = DATE_OF_RESIGNATION == undefined ? " " : Date.parse(DATE_OF_RESIGNATION);

				LAST_WORKING_DAY_AS_PER_NOTICE_PERIOD = LAST_WORKING_DAY_AS_PER_NOTICE_PERIOD == undefined ? " " : Date.parse(LAST_WORKING_DAY_AS_PER_NOTICE_PERIOD);
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
				DATE_OF_BIRTH = DATE_OF_BIRTH == undefined ? " " : Date.parse(DATE_OF_BIRTH);
				const schema = await utils.currentSchema({
					db
				});

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
					console.log(results1)
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
						'${DESIGNATION_JOB_INFORMATION}'
						)`

					const statement = await db.preparePromisified(query)
					let results = await db.statementExecPromisified(statement, [])
					resolve(results);
				}

			} catch (error) {
				console.log(error)
				reject(error);
			}
		});
	};

	const updateuser = ({
		payload,
		db
	}) => {
		return new Promise(async (resolve, reject) => {
			try {
				const schema = currentSchema(db)
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
					`UPDATE "${schema}"."SCLABS_ALUMNIPORTAL_MASTER_MASTER"
					SET "USER_ID" = CASE 
					WHEN '${payload.DOCUMENT}' != 'undefined' THEN '${payload.DOCUMENT}'
					ELSE (select "USER_ID" FROM "${schema}"."SCLABS_ALUMNIPORTAL_MASTERDATA_MASTERDATA" where "ID"='${payload.payload.ID}')
					END,
					"MODIFIEDBY" = '${modifiedby}',
    				"MODIFIEDAT" = '${modifiedat}'
    				where
    				"ID" = '${payload.payload.ID}'`
				)
				const results = await db.statementExecPromisified(statement, [])
				resolve("Functionality Not available")

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

	return {
		createuser,
		updateuser,
		getuser,
		deleteuser,
	};

};