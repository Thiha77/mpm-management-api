const rolePermissionRouter = require('express').Router();
const rolePermissionController = require('../../controllers').rolepermission;

rolePermissionRouter.get('/', rolePermissionController.all);
rolePermissionRouter.get('/:id', rolePermissionController.byId);
rolePermissionRouter.get('/search/:text', rolePermissionController.search);
rolePermissionRouter.get('/permissionNameByRoleId/:id', rolePermissionController.permissionNameByRoleId);
rolePermissionRouter.post('/create', rolePermissionController.save);
rolePermissionRouter.post('/update', rolePermissionController.update);
rolePermissionRouter.post('/delete', rolePermissionController.destory);


module.exports = rolePermissionRouter;