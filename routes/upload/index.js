const uploadRouter = require('express').Router();
const uploaderController = require('../../controllers').uploader;
uploadRouter.post('/save',uploaderController.uploadSingle);
uploadRouter.post('/delete',uploaderController.deleteImage);

module.exports = uploadRouter;

