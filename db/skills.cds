namespace sclabs.alumniportal.skills;
using { managed, sap } from '@sap/cds/common';

entity skills: managed {
	key ID : UUID @odata.Type:'Edm.String';
	user_id : String;
	skill: String;
}