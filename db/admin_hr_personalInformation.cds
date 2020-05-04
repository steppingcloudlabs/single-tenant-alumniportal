namespace sclabs.alumniportal.personalinformation;
using { managed, sap } from '@sap/cds/common';

entity admin_hr_personalinformation : managed{
	key ID: UUID @odata.Type:'Edm.String';
	usertype : userType;
	salutation: String;
	firstname: String;
	middlename: String;
	last_name: String;
	email: String;
}

type userType : String enum {
  admin; hr;
}