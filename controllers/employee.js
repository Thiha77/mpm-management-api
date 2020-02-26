const Employee = require('../models').Employee;

const all = (req, res) => {
    return Employee.findAll({
        // attributes: ['id', 'name', ['employeeStatus', 'Employee Status']]
        
    })
    .then( (emps) =>{
        res.send(JSON.stringify(emps));
    })

}

const byId = (req, res) => {
    let empId = req.params.id;
    return Employee.findAll({
        where: {
            id: empId
        }
    })
    .then( (emp) => {
        res.send(JSON.stringify(emp));
    })
}

module.exports = {
    all, byId
}