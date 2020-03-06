const uploadRouter = require('express').Router();
const uploaderController = require('../../controllers').uploader;
uploadRouter.post('/',uploaderController.uploadSingle);

module.exports = uploadRouter;