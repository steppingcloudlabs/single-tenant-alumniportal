const uuid = require("uuid");
const utils = require("../../utils/database/index.js")();
module.exports = () => {

	const getuser = ({
		payload,
		db
	}) => {
		return new Promise(async(resolve, reject) => {
			try {

			} catch (error) {
				reject(error);
			}
		});
	};
	return {
		getuser

	}
}