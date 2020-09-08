const uuid = require("uuid");
const utils = require("../../utils/database/index.js")();
module.exports = () => {
	const login = ({
		payload,
		db
	}) => {
		return new Promise(async(resolve, reject) => {
			try {
				console.log("hello world")
				// const schema = await utils.currentSchema({db})
				// 	// TODO: add pagination using [to, from] clauses in statement.
			
				// const limit = payload.limit == undefined ? 10 : payload.limit
				// const offset = payload.offset == undefined ? 0 : payload.offset
				// const statement = await db.preparePromisified(
				// 	`SELECT "ID", "USER_ID", "GENDER", "DATE_OF_BIRTH", "DATE_OF_RESIGNATION", "LAST_WORKING_DAY_AS_PER_NOTICE_PERIOD", "PERSONAL_EMAIL_ID","FIRST_NAME_PERSONAL_INFORMATION","LAST_NAME_PERSONAL_INFORMATION","MIDDLE_NAME_PERSONAL_INFORMATION","NATIONALITY_PERSONAL_INFORMATION","SALUTATION_PERSONAL_INFORMATION","CITY_ADDRESSES","PHONE_NUMBER_PHONE_INFORMATION","MANAGER_JOB_INFORMATION","DESIGNATION_JOB_INFORMATION" FROM "${schema}"."SCLABS_ALUMNIPORTAL_MASTERDATA_MASTERDATA" rows limit ${limit} offset ${offset}`
				// )
				// const results = await db.statementExecPromisified(statement, [])
				// resolve(results);

			} catch (error) {
				reject(error);
			}
		});
	};

	const signup = ({
		payload,
		db
	}) => {
		return new Promise(async(resolve, reject) => {
			try {
				const {date_of_relieving,user_id,date_of_resignation,last_working_day_as_per_notice_period,personal_email_id,first_name_personal_information,last_name_personal_information,middle_name_personal_information,nationality_personal_information,salutation_personal_information,city_addresses,phone_number_phone_information,manager_job_information,designation_job_information,skill,gender,date_of_birth}=payload.payload;
				//console.log(date_of_relieving,user_id,date_of_resignation,last_working_day_as_per_notice_period,personal_email_id,first_name_personal_information,middle_name_personal_information,nationality_personal_information,salutation_personal_information,city_addresses,phone_number_phone_information,manager_job_information,designation_job_information,skill,gender,date_of_birth)
				const schema = await utils.currentSchema({db});
				console.log(schema)
				const createdat = new Date().toISOString();
				const createdby = "admin";
				const modifiedby = "admin";
				const modifiedat = new Date().toISOString();
				const date = new Date().toISOString();
				const id = uuid()
				const query = `INSERT INTO "${schema}"."SCLABS_ALUMNIPORTAL_MASTERDATA_MASTERDATA" VALUES(	
				        '${createdat}',
						'${createdby}',
						'${modifiedat}',
						'${modifiedby}',
						'${id}',
						'${user_id}',
						'${gender}',
						'${date_of_birth}',
						'${date_of_resignation}',
						'${last_working_day_as_per_notice_period}',
						'${personal_email_id}',
					    '${first_name_personal_information}',
						'${last_name_personal_information}',
						'${middle_name_personal_information}',
						'${nationality_personal_information}',
						'${salutation_personal_information}',
						'${city_addresses}',
						'${phone_number_phone_information}',
						'${manager_job_information}',
						'${designation_job_information}')`
				console.log(query);
				
				 const statement = await db.preparePromisified(query)
			
				 const results = await db.statementExecPromisified(statement, [])
                
				 resolve(results);
			} catch (error) {
				reject(error);
			}
		});
	};

	const updateuser= ({
		payload,
		db
	}) => {
		return new Promise(async(resolve, reject) => {
			try {
				const schema = currentSchema(db)
				const createdat = new Date().toISOString();
				const createdby = "admin";
				const modifiedby = "admin";
				const modifiedat = new Date().toISOString();
				const date = new Date().toISOString();
				const id = uuid();
				const user_id = payload.user_id;
				const _gender = payload._gender;
			//	const _date_of_birth = payload.date_of_birth
			//	const _date_of_resignation = payload.date_of_resignation
			//	const _last_working_day_as_per_notice_period =payload.last_working_day_as_per_notice_period
				const _personal_email_id = payload.personal_email_id 
				const _first_name_personal_information =payload.first_name_personal_information
				const _last_name_personal_information =payload.last_name_personal_information
				const _middle_name_personal_information = payload.middle_name_personal_information
				const _nationality_personal_information = payload.nationality_personal_information
				const _salutation_personal_information =payload.salutation_personal_information
				const _city_addresses =payload.city_addresses
				const _phone_number_phone_information =payload.phone_number_phone_information
				const _manager_job_information=payload.manager_job_informatio
				const _designation_job_information = payload.designation_job_information
				const statement = await db.preparePromisified(
					`UPDATE "${schema}"."SCLABS_ALUMNIPORTAL_MASTER_MASTER"
					SET "USER_ID" = CASE 
					WHEN '${payload.document}' != 'undefined' THEN '${payload.document}'
					ELSE (select "USER_ID" FROM "${schema}"."SCLABS_ALUMNIPORTAL_MASTER_MASTER" where "ID"='${payload.id}')
					END,
					"MODIFIEDBY" = '${modifiedby}',
    				"MODIFIEDAT" = '${modifiedat}'
    				where
    				"ID" = '${payload.id}'`
				)
				const results = await db.statementExecPromisified(statement, [])
				resolve(results)

			} catch (error) {
				reject(error);
			}
		});
	};

	const deleteuser = ({
		payload,
		db
	}) => {
		return new Promise(async(resolve, reject) => {
			try {
				/*console.log(
					`DELETE FROM "${schema}"."SCLABS_ALUMNIPORTAL_NEWS_NEWS"  WHERE ID = '${payload.id}'`
				)*/
				const schema = await utils.currentSchema({db})
				const query = `DELETE FROM "${schema}"."SCLABS_ALUMNIPORTAL_MASTERDATA_MASTERDATA"  WHERE ID = '${payload.payload.id}'`
				const statement = await db.preparePromisified(query);
				const results = await db.statementExecPromisified(statement, [])
				resolve(results);
			} catch (error) {
				reject(error);
			}
		});
	};

	return {
		login,
		signup,
	
	};

};