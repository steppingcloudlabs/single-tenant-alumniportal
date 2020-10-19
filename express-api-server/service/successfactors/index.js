const uuid = require("uuid");
const utils = require("../../utils/database/index.js")();
const {
	PerPersonal,
	PerPerson
} = require("../../generated/sfo-data-service");
module.exports = () => {

	const getuser = ({
		payload,
		db
	}) => {
		return new Promise(async(resolve, reject) => {
			try {
				const result = PerPersonal.requestBuilder()
					.getAll()
					.select(
						PerPersonal.FIRST_NAME,
						PerPersonal.LAST_NAME,
						PerPersonal.PERSON_NAV
						.select(
							PerPerson.DATE_OF_BIRTH,
							PerPerson.PERSON_ID)).filter(
						PerPersonal.PERSON_NAV.filter(
							PerPerson.PERSON_ID.equals(payload.userid)
						)
					)
					.execute({
						destinationName: "sfapi"
					});
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