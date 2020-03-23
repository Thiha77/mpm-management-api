const roleRouter = require('express').Router();
const roleController = require('../../controllers').role;

roleRouter.get('/', roleController.all);
roleRouter.get('/:id', roleController.byId);
roleRouter.get('/search/:text', roleController.search);
roleRouter.post('/create', roleController.save);
roleRouter.post('/update', roleController.update);
roleRouter.post('/delete', roleController.destory);
roleRouter.get('/list/:pageNo', roleController.paginate);

module.exports = roleRouter;