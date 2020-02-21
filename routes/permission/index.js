const perRouter = require('express').Router();
const perController = require('../../controllers').permission;

perRouter.get('/', perController.all);
perRouter.get('/:id', perController.byId);
perRouter.post('/create', perController.save);
perRouter.post('/update', perController.update);
perRouter.post('/delete', perController.destory);

module.exports = perRouter;