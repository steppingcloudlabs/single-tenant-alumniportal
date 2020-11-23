namespace sclabs.alumniportal.job;
using { managed, sap } from '@sap/cds/common';

entity job:managed{
	key ID: UUID @odata.Type:'Edm.String';
	boardId : String;
	country: String;
	department: String;
	jobDescription: String;
	jobPostingId: String;
	jobReqId: String;
	jobTitle: String;
	location: String;
	postingStatus: String;
	postingstartdate:String;
	postingenddate:String;
}
