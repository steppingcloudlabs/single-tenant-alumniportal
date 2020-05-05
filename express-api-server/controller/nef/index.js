module.exports = {
    // News Controllers
    viewNews: async(req, res) => {
        res.status(200).send({
            status: "200",
            result: "TEST RESPONSE"
        });
    }


}