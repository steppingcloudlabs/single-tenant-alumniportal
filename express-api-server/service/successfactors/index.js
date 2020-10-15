const uuid = require("uuid");
const utils = require("../../utils/database/index.js")();
const {
	Candidate
} = require("./generated/sfo-data-service");
module.exports = () => {

	const getuser = ({
		payload,
		db
	}) => {
		return new Promise(async (resolve, reject) => {
			try {
				Candidate.requestBuilder()
					.getAll()
					.select(Candidate.FIRST_NAME, Candidate.LAST_NAME, Candidate.USER_ID)
					.execute({
						url: "https://sandbox.api.sap.com/successfactors"
					});
			} catch (error) {
				reject(error);
			}
		});
	};
	return {
		getuser

	}
}