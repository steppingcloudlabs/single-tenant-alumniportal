namespace sclabs.alumniportal.news;

entity news {
	key ID:  UUID @odata.Type:'Edm.String';
	title : String;
	content : String;
	author : String;
	tags : String;
	date : Date;
	photo : LargeBinary;
}