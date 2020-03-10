const permissionRouter = require('express').Router();
const permissionController = require('../../controllers').permission;

permissionRouter.get('/', permissionController.all);
permissionRouter.get('/:id', permissionController.byId);
permissionRouter.post('/create', permissionController.save);
permissionRouter.post('/update', permissionController.update);
permissionRouter.post('/delete', permissionController.destory);
permissionRouter.get('/byRoleId/:roleId', permissionController.byRoleId);
permissionRouter.get('/search/:text', permissionController.search);

module.exports = permissionRouter;