namespace sclabs.alumniportal.documents;
using { managed, sap } from '@sap/cds/common';

entity documents:managed{
	key ID: UUID @odata.Type:'Edm.String';
	document: doctype;
	filename: String;
	file: LargeBinary;
}

type doctype : String enum {
    form16;salarycurrent;salaryprevious;salarylast
}