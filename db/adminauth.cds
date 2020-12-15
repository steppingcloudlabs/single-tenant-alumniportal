namespace sclabs.alumniportal.adminauth;

using {
    managed,
    sap
} from '@sap/cds/common';

entity adminlogin : managed {
    key ID       : UUID @odata.Type : 'Edm.String';
        USERID   : String not null;
        username : String not null;
        password : String not null;
        usertype : String;
};
