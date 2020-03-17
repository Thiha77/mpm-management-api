const userRouter = require('express').Router();
const userController = require('../../controllers').user;

userRouter.get('/', userController.all);
userRouter.get('/getEmpData', userController.getEmpData);
userRouter.get('/:id', userController.byId);
userRouter.post('/create', userController.createUser);
userRouter.post('/update', userController.updateUser);
userRouter.post('/delete', userController.deleteUser);
userRouter.post('/searchuser', userController.searchUser);
module.exports = userRouter;