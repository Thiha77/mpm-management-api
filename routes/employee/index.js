const employeeRouter = require('express').Router();
const empController = require('../../controllers').employee;

employeeRouter.get('/', empController.all);
employeeRouter.get('/:id', empController.byId);
employeeRouter.post('/create',empController.createEmployee);
employeeRouter.post('/delete',empController.deleteEmployee);
employeeRouter.post('/update',empController.updateEmployee);
employeeRouter.get('/search/:all', empController.searchEmlpoyee);
employeeRouter.post('/updateImage',empController.updateEmployeeImage);
employeeRouter.post('/searchByemployeeId',empController.searchByemployeeId);

module.exports = employeeRouter;