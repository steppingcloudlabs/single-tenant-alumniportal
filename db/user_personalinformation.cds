namespace sclabs.alumniportal.user;

using { managed, sap } from '@sap/cds/common';

entity personalinformation : managed{
  key ID : UUID  not null @odata.Type:'Edm.String';
  user_id : String not null;
  gender: String ;
  date_of_birth : Date;
  date_of_resignation : Date;
  last_working_day_as_per_notice_period : Date;
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
  skills: array of String;
  login_email: String;
  //LINKEDIN IMPORT DATA 
  linkedIn: String;
  languages: array of String;
  recommended_jobs: array of String;
  
}