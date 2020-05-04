namespace sclabs.alumniportal.personalinformation;

entity admin_hr_personalinformation{
	key ID: UUID @odata.Type:'Edm.String';
	usertype : userType;
	salutation: String;
	firstname: String;
	middlename: String;
	last_name: String;
	email: String;
}

type userType : String enum {
  admin; hr;
}