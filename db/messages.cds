namespace sclabs.alumniportal.messages;
using { managed, sap } from '@sap/cds/common';

entity messages:managed{
	key ID: UUID @odata.Type:'Edm.String';
	usertype: String;
	message: String;
	ticketid: UUID @odata.Type:'Edm.String'; 
}