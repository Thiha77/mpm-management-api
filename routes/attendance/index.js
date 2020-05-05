const attendanceRouter = require('express').Router();
const attendanceController = require('../../controllers').attendance;

attendanceRouter.get('/', attendanceController.all);
attendanceRouter.get('/:id', attendanceController.byId);
attendanceRouter.post('/create', attendanceController.save);
attendanceRouter.post('/update', attendanceController.update);
attendanceRouter.post('/delete', attendanceController.destory);
attendanceRouter.get('/search/:textSearch', attendanceController.search);
attendanceRouter.post('/searchadvance', attendanceController.searchadvance);
module.exports = attendanceRouter;