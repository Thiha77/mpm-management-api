const userRouter = require('express').Router();
const userController = require('../../controllers').user;

userRouter.get('/', userController.all);
// userRouter.get('/:id', userController.byId);
userRouter.post('/create', userController.createUser);
userRouter.post('/update', userController.updateUser);
userRouter.post('/delete', userController.deleteUser);
userRouter.post('/searchuser', userController.searchUser);
userRouter.get('/getEmpData', userController.getEmpData);
module.exports = userRouter;