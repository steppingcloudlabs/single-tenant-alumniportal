const sesservice = require("../../service/ses/index")();
module.exports = {
    handlebounces: async (req, res) => {
        try {
            let response = await sesservice.handleResponse(topicArnBounce, req, res);

            res.status(200).json({
                result: response,
                success: true,
                message: "Successfully received message"
            });
        } catch (error) {
            res.status(500).json({
                success: false,
                message: error.message
            });
        }
    },
    handlecomplaints: async (req, res) => {
        try {

            let response = await sesservice.handleResponse(topicArnComplaint, req, res);

            res.status(200).json({
                result: response,
                success: true,
                message: "Successfully received message."
            });
        } catch (error) {
            res.status(500).json({
                success: false,
                message: error.message
            });
        }
    }
}