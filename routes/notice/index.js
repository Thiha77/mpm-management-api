const noticeRouter = require('express').Router();
const noticeController = require('../../controllers').notice;

noticeRouter.get('/', noticeController.all);
noticeRouter.get('/:id', noticeController.byId);
noticeRouter.post('/save', noticeController.save);
noticeRouter.post('/update', noticeController.update);
noticeRouter.post('/delete', noticeController.destory);

module.exports = noticeRouter;