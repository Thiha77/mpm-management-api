const uploadRouter = require('express').Router();
const uploaderController = require('../../controllers').uploader;
uploadRouter.post('/save',uploaderController.uploadSingle);

module.exports = uploadRouter;

