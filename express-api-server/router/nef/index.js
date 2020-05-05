const Router = require('express').Router();
const nefController = require("../../controller/nef/index");
Router
    .route('/view/news')
    .get((req, res, next) => nefController.viewNews(req, res, next));

module.exports = Router;