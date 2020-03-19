const uploadRouter = require('express').Router();
const uploaderController = require('../../controllers').uploader;
uploadRouter.post('/save',uploaderController.uploadSingle);
uploadRouter.post('/delete',uploaderController.deleteImage);
// uploadRouter.get('/:id',uploaderController.uploadImage);
module.exports = uploadRouter;

