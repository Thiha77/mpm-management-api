const noticeRouter = require('express').Router();
const noticeController = require('../../controllers').notice;

noticeRouter.get('/', noticeController.all);
noticeRouter.get('/:id', noticeController.byId);
noticeRouter.post('/save', noticeController.save);

module.exports = noticeRouter;