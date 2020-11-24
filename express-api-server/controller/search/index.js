/* eslint-disable */
const searchService = require("../../service/search")();
const dbClass = require("sap-hdbext-promisfied");

module.exports = {
	user: async (req, res) => {
		try {
			const payload = req.query;
			console.log(payload)
			let db = new dbClass(req.db);
			let response = await searchService.searchUser({
				payload,
				db
			});
			if (response) {
				response = response.length > 1 ? response : response[0];
				res.status(200).send({
					status: "200",
					result: response,
				});
			} else {
				res.status(400).send({
					status: "400",
					result: response
				});
			}
		} catch (error) {
			res.status(400).send({
				status: "400",
				result: error
			});
		}
	},
	skill: async (req, res) => {
		try {
			const payload = req.query;
			let db = new dbClass(req.db);
			let response = await searchService.searchSkill({
				payload,
				db
			});

			if (response) {
				response = response.length > 1 ? response : response[0];
				res.status(200).send({
					status: "200",
					result: response,
				});
			} else {
				res.status(200).send({
					status: "400",
					result: response
				});
			}
		} catch (error) {
			res.status(200).send({
				status: "400",
				result: error
			});
		}

	},
	admin: async (req, res) => {
		try {
			const payload = req.query;
			let db = new dbClass(req.db);
			let response = await searchService.searchAdmin({
				payload,
				db
			});
			if (response) {
				response = response.length > 1 ? response : response[0];
				res.status(200).send({
					status: "200",
					result: response,
				});
			} else {
				res.status(400).send({
					status: "400",
					result: response
				});
			}
		} catch (error) {
			res.status(400).send({
				status: "400",
				result: error
			});
		}

	},
	job: async (req, res) => {
		try {
			const payload = req.query;
			let db = new dbClass(req.db);
			let response = await searchService.searchJob({
				payload,
				db
			});
			if (response) {
				response = response.length > 1 ? response : response[0];
				res.status(200).send({
					status: "200",
					result: response,
				});
			} else {
				res.status(400).send({
					status: "400",
					result: response
				});
			}
		} catch (error) {
			res.status(400).send({
				status: "400",
				result: error
			});
		}
	}
}