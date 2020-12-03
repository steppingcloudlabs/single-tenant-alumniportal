namespace sclabs.alumniportal.skills;
using {sclabs.alumniportal.users.users as user} from './users';
using { managed, sap } from '@sap/cds/common';

entity skills: managed {
	key ID : UUID @odata.Type:'Edm.String';
	skill: String;
}
