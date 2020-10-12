namespace sclabs.alumniportal.users;
using { managed, sap } from '@sap/cds/common';
using {sclabs.alumniportal.masterdata.MasterData as masterdata} from './masterdata';
using {sclabs.alumniportal.skills.skills as skill} from './skills';

entity users: managed{
	key ID: UUID @odata.Type:'Edm.String';
	user_id : String not null;
	gender: String ;
	date_of_birth : String;
	date_of_resignation : String;
	last_working_day_as_per_notice_period : String;
	personal_email_id : String;
	first_name_personal_information : String;
	last_name_personal_information : String;
	middle_name_personal_information : String;
	nationality_personal_information : String;
	salutation_personal_information : String;
	city_addresses : String;
	phone_number_phone_information : String;
	manager_job_information : String;
	designation_job_information : String;
	skill_id: UUID;
	skills : Association[*] to skill on skills.ID=skill_id;
	linkedin: String;
};
