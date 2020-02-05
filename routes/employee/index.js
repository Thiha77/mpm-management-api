const employeeRouter = require('express').Router();
const Employee = require('../../models').Employee;

employeeRouter.get('/', (req, res) => {
    Employee.findAll({
        // attributes: ['id', 'name', ['employeeStatus', 'Employee Status']]
    })
    .then( (emps) =>{
        res.send(JSON.stringify(emps));
    })
});

employeeRouter.get('/:empId', (req, res) => {
    const empId = req.params.empId;
    Employee.findAll({
        // attributes: ['id', 'name', ['employeeStatus', 'Employee Status']]
        where:{
            id: empId
        }
    })
    .then( (emps) =>{
        res.send(JSON.stringify(emps));
    })
});

module.exports = employeeRouter;