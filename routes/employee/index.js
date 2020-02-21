const employeeRouter = require('express').Router();
const empController = require('../../controllers').employee;

employeeRouter.get('/', empController.all);
employeeRouter.get('/:id', empController.byId);

module.exports = employeeRouter;