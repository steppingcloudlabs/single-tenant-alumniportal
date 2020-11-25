const uuid = require("uuid");
const utils = require("../../utils/database/index.js")();
const {
	PerPersonal,
	PerPerson,
	PerEmail
} = require("../../generated/sfo-data-service");
module.exports = () => {

	const getuser = ({
		payload,
		db
	}) => {
		return new Promise(async (resolve, reject) => {
			try {
				const LIMIT = payload.LIMIT == undefined ? 10 : payload.LIMIT
				const offset = payload.OFFSET == undefined ? 0 : payload.OFFSET
				const result = PerPersonal.requestBuilder()
					.getAll()
					.select(
						PerPersonal.FIRST_NAME,
						PerPersonal.LAST_NAME,
						PerPersonal.PERSON_NAV.select(PerPerson.EMAIL_NAV.select(PerEmail.EMAIL_ADDRESS))).filter(PerPersonal.PERSON_NAV.filter(PerEmail.EMAIL_ADDRESS
							.equals(payload.email))

						// PerPersonal.PERSON_NAV.select(PerPerson.EMAIL_NAV.select(PerEmail.EMAIL_ADDRESS))
					).top(LIMIT).skip(offset)
					.execute({
						destinationName: "sfapi"
					});
				console.log(result);
				resolve(result);
			} catch (error) {
				reject(error);
			}
		});
	};
	return {
		getuser

	}
}