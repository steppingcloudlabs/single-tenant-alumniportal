namespace sclabs.alumniportal.faq;

entity FAQ{
	key ID: UUID @odata.Type:'Edm.String';
	question: String;
	answer: String;
	
}