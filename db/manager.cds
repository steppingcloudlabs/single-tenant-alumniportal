namespace sclabs.alumniportal.manager;
using { managed, sap } from '@sap/cds/common';
using{sclabs.alumniportal.ticket.ticket as ticket} from './ticket';
entity manager : managed{
	key ID: UUID @odata.Type:'Edm.String';
	firstname: String;
	lastname: String;
	userid: String;
	levelmanager: String;
};