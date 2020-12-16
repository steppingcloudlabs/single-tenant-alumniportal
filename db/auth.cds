namespace sclabs.alumniportal.auth;

using {
    managed,
    sap
} from '@sap/cds/common';

entity login : managed {
    key ID       : UUID @odata.Type : 'Edm.String';
        userid   : String not null;
        username : String not null;
        password : String not null;
};
