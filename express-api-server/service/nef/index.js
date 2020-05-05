module.exports = () => {

	const viewNews = ({
		payload
	}) => {
		return new Promise((resolve, reject) => {
			try {
				resolve(payload);
			} catch (error) {
				reject(error);
			}
		});
	};
	return {
		viewNews
	};

};