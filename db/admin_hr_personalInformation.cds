namespace sclabs.alumniportal.personalinformation;
using { managed, sap } from '@sap/cds/common';

entity admin_hr_personalinformation : managed{
	key ID: UUID @odata.Type:'Edm.String';
	firstname: String;
	lastname: String;
	userid: String;
}