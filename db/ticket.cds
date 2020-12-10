namespace sclabs.alumniportal.ticket;

using {
    managed,
    sap
} from '@sap/cds/common';

entity ticket : managed {
    key ID                 : UUID @odata.Type : 'Edm.String';
        userid             : String;
        title              : String;
        esclation          : Boolean;
        resolved           : Boolean;
        esclatationmanager : String;
        date               : String;
}
