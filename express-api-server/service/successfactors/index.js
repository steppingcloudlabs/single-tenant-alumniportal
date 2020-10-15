const uuid = require("uuid");
const utils = require("../../utils/database/index.js")();
const {
	PerPersonal,
} = require("../../generated/sfo-data-service");
module.exports = () => {

	const getuser = ({
		payload,
		db
	}) => {
		return new Promise(async (resolve, reject) => {
			try {
				const result = await PerPersonal.requestBuilder()
					.getAll()
					.select(PerPersonal.FIRST_NAME, PerPersonal.LAST_NAME, PerPersonal.DISPLAY_NAME, PerPersonal.PERSON_NAV)
					.top(payload.payload.limit)
					.skip(payload.payload.offset)
					.execute();
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