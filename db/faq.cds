namespace sclabs.alumniportal.faq;
using { managed, sap } from '@sap/cds/common';

entity FAQ:managed{
	key ID: UUID @odata.Type:'Edm.String';
	question: String;
	answer: String;
	
}