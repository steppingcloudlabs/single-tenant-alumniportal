const uuid = require("uuid");
const utils = require("../../utils/database/index.js")();
module.exports = () => {
	const getuser = ({
		payload,
		db
	}) => {
		return new Promise(async(resolve, reject) => {
			try {
			
				const schema = await utils.currentSchema({db})
				// TODO: add pagination using [to, from] clauses in statement.
				const limit = payload.limit == undefined ? 10 : payload.limit
				const offset = payload.offset == undefined ? 0 : payload.offset
				const query =
					`SELECT "ID", "USER_ID", "GENDER", "DATE_OF_BIRTH", "DATE_OF_RESIGNATION", "LAST_WORKING_DAY_AS_PER_NOTICE_PERIOD", "PERSONAL_EMAIL_ID","FIRST_NAME_PERSONAL_INFORMATION","LAST_NAME_PERSONAL_INFORMATION","MIDDLE_NAME_PERSONAL_INFORMATION","NATIONALITY_PERSONAL_INFORMATION","SALUTATION_PERSONAL_INFORMATION","CITY_ADDRESSES","PHONE_NUMBER_PHONE_INFORMATION","MANAGER_JOB_INFORMATION","DESIGNATION_JOB_INFORMATION" FROM "${schema}"."SCLABS_ALUMNIPORTAL_MASTERDATA_MASTERDATA" rows limit ${limit} offset ${offset}`
				const statement = await db.preparePromisified(query)
				const results = await db.statementExecPromisified(statement, [])
				resolve(results);
			}
			 catch (error) {
				reject(error);
			}
		});
	};

	const createuser = ({
		payload,
		db
	}) => {
		return new Promise(async(resolve, reject) => {
			try {
				const {
					date_of_relieving,
					user_id,
					date_of_resignation,
					last_working_day_as_per_notice_period,
					personal_email_id,
					first_name_personal_information,
					last_name_personal_information,
					middle_name_personal_information,
					nationality_personal_information,
					salutation_personal_information,
					city_addresses,
					phone_number_phone_information,
					manager_job_information,
					designation_job_information,
					skill,
					gender,
					date_of_birth
				} = payload.payload;
				//console.log(date_of_relieving,user_id,date_of_resignation,last_working_day_as_per_notice_period,personal_email_id,first_name_personal_information,middle_name_personal_information,nationality_personal_information,salutation_personal_information,city_addresses,phone_number_phone_information,manager_job_information,designation_job_information,skill,gender,date_of_birth)
				const schema = await utils.currentSchema({db});
				const createdat = new Date().toISOString();
				const createdby = "admin";
				const modifiedby = "admin";
				const modifiedat = new Date().toISOString();
				const date = new Date().toISOString();
				const id = uuid()
				const query1=`SELECT USER_ID FROM "${schema}"."SCLABS_ALUMNIPORTAL_MASTERDATA_MASTERDATA" WHERE USER_ID='${user_id}'`
	    		const statement1 = await db.preparePromisified(query1)
				const results1 = await db.statementExecPromisified(statement1, [])
				if(results1.length !=0){
					resolve("userexists")
				}
				else{
				    const query =
					`INSERT INTO "${schema}"."SCLABS_ALUMNIPORTAL_MASTERDATA_MASTERDATA" VALUES(	
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
				const statement = await db.preparePromisified(query)
				const results = await db.statementExecPromisified(statement, [])
				resolve(results);
				}
			} catch (error) {
				reject(error);
			}
		});
	};

	const updateuser = ({
		payload,
		db
	}) => {
		return new Promise(async(resolve, reject) => {
			try {
				const schema = await utils.currentSchema({db})
				const modifiedby = "admin";
				const modifiedat = new Date().toISOString();
				const query =
					`UPDATE "${schema}"."SCLABS_ALUMNIPORTAL_MASTERDATA_MASTERDATA"
					SET "PERSONAL_EMAIL_ID" = CASE
								WHEN '${payload.payload.personal_email_id}' != 'undefined' THEN '${payload.payload.personal_email_id}'
								ELSE (select "PERSONAL_EMAIL_ID" FROM "${schema}"."SCLABS_ALUMNIPORTAL_MASTERDATA_MASTERDATA" where "ID"='${payload.payload.id}')
								END,
					   "CITY_ADDRESSES" = CASE
								WHEN '${payload.payload.city_addresses}' != 'undefined' THEN '${payload.payload.city_addresses}'
								ELSE (select "CITY_ADDRESSES" FROM "${schema}"."SCLABS_ALUMNIPORTAL_MASTERDATA_MASTERDATA" where "ID"='${payload.payload.id}')
								END,
						"PHONE_NUMBER_PHONE_INFORMATION" = case
								WHEN '${payload.payload.phone_number_phone_information}' != 'undefined' THEN '${payload.payload.phone_number_phone_information}'
								ELSE (select "PHONE_NUMBER_PHONE_INFORMATION" FROM "${schema}"."SCLABS_ALUMNIPORTAL_MASTERDATA_MASTERDATA" where "ID"='${payload.payload.id}')
								END,
					"MODIFIEDBY" = '${modifiedby}',
    				"MODIFIEDAT" = '${modifiedat}'
    				where
    				"ID" = '${payload.payload.id}'`
			const statement = await db.preparePromisified(query);
			const results = await db.statementExecPromisified(statement, [])
			resolve(results);

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
		createuser,
		updateuser,
		getuser,
		deleteuser,
	};

};