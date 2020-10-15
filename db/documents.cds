namespace sclabs.alumniportal.documents;
using { managed, sap } from '@sap/cds/common';

entity documents:managed{
	key ID: UUID @odata.Type:'Edm.String';
	stream: LargeBinary;
	userid: String;
	filename: String;
	
}