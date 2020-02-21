const rolePerRouter = require('express').Router();
const rolePerController = require('../../controllers').rolepermission;

rolePerRouter.get('/', rolePerController.all);
rolePerRouter.get('/:id', rolePerController.byId);
rolePerRouter.post('/create', rolePerController.save);
rolePerRouter.post('/update', rolePerController.update);
rolePerRouter.post('/delete', rolePerController.destory);

module.exports = rolePerRouter;