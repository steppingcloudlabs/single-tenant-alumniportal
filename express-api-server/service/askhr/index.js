const uuid = require("uuid");
const utils = require("../../utils/database/index.js")();
module.exports = () => {
	const createticket = ({
		payload,
		db
	}) => {
		return new Promise(async(resolve, reject) => {
			try {
				console.log("Things need to be done");
			} catch (error) {
				reject(error);
			}
		});
	};
	const getticket = ({
		payload,
		db
	}) => {
		return new Promise(async(resolve, reject) => {
			try {
				console.log("Things need to be done");
			} catch (error) {
				reject(error);
			}
		});
	};

	const updateticket = ({
		payload,
		db
	}) => {
		return new Promise(async(resolve, reject) => {
			try {
				console.log("Things need to be done");
			} catch (error) {
				reject(error);
			}
		});
	};

	const deleteticket = ({
		payload,
		db
	}) => {
		return new Promise(async(resolve, reject) => {
			try {
				console.log("Things need to be done");
			} catch (error) {
				reject(error);
			}
		});
	};

	const createmessage = ({
		payload,
		db
	}) => {
		return new Promise(async(resolve, reject) => {
			try {
				console.log("Things need to be done");
			} catch (error) {
				reject(error);
			}
		});
	};
	const getmessage = ({
		payload,
		db
	}) => {
		return new Promise(async(resolve, reject) => {
			try {
				console.log("Things need to be done");
			} catch (error) {
				reject(error);
			}
		});
	};

	const updatemessage = ({
		payload,
		db
	}) => {
		return new Promise(async(resolve, reject) => {
			try {
				console.log("Things need to be done");
			} catch (error) {
				reject(error);
			}
		});
	};

	const deletemessage = ({
		payload,
		db
	}) => {
		return new Promise(async(resolve, reject) => {
			try {
				console.log("Things need to be done");
			} catch (error) {
				reject(error);
			}
		});
	};
	return {
		createticket,
		updateticket,
		getticket,
		deleteticket,
		createmessage,
		updatemessage,
		getmessage,
		deletemessage,
	};
}