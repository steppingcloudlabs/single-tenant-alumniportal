namespace sclabs.alumniportal.job;
using { managed, sap } from '@sap/cds/common';

entity job:managed{
	key ID: UUID @odata.Type:'Edm.String';
	requisition_id : String not null;
	posting_end_date: Date;
	posting_start_date: Date;
	job_posting_status: String;
	title: String;
	job_role: String;
	job_details: String;
	country_of_residence: String;
	city: String
}
