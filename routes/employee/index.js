const employeeRouter = require('express').Router();
const empController = require('../../controllers').employee;

employeeRouter.get('/', empController.all);
employeeRouter.get('/:id', empController.byId);
employeeRouter.post('/create',empController.createEmployee);
employeeRouter.post('/delete',empController.deleteEmployee);
employeeRouter.post('/update',empController.updateEmployee);
employeeRouter.post('/searchByemployeeId',empController.searchByemployeeId);

module.exports = employeeRouter;