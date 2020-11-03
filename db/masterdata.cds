namespace sclabs.alumniportal.masterdata;
using {sclabs.alumniportal.skills.skills as skill} from './skills';
using { managed, sap } from '@sap/cds/common';

entity MasterData : managed{
  key ID : UUID  not null @odata.Type:'Edm.String';
  user_id : String not null;
  gender: String ;
  date_of_birth : String;
  date_of_relieving: String;
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
}
