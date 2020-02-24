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
const createEmployee =(req,res) => {
    return Employee.create({
        name:req.body.name,
        alias:req.body.alias,
        phoneNo:req.body.phoneNo,
        nrcNo:req.body.nrcNo,
        personalEmail:req.body.personalEmail,
        officialEmail:req.body.officialEmail,
        township:req.body.township,
        city:req.body.city,
        address:req.body.address,
        postalCode:req.body.postalCode,
        dob:new Date(req.body.dob),
        gender:req.body.gender,
        position:req.body.position,
        basicSalary:req.body.basicSalary,
        nationality:req.body.nationality,
        race:req.body.race,
        maritalStatus:req.body.maritalStatus,
        employeeStatus:req.body.employeeStatus,
        photo:req.body.photo,
        userName:req.body.userName,
        password:req.body.password

    }).then(res => {
        res.sendStatus(200);
      })
      .catch(err => res.send(JSON.stringify(err)));
    
}
const deleteEmployee =(req,res) => {
    const id = req.body.id;
   return  Employee.destroy({
        where: {
            id: id
        }
    }).then(Employee => res.json({
        error: false,
        message: "Deleted Success!"
    })).catch(error => res.json({
        error: true,
        error: error
    }));
}
const updateEmployee=(req,res)=>{
    const id = req.body.id;
    return Employee.update({  
        name:req.body.name,
        alias:req.body.alias,
        phoneNo:req.body.phoneNo,
        nrcNo:req.body.nrcNo,
        personalEmail:req.body.personalEmail,
        officialEmail:req.body.officialEmail,
        township:req.body.township,
        city:req.body.city,
        address:req.body.address,
        postalCode:req.body.postalCode,
        dob:new Date(req.body.dob),
        gender:req.body.gender,
        position:req.body.position,
        basicSalary:req.body.basicSalary,
        nationality:req.body.nationality,
        race:req.body.race,
        maritalStatus:req.body.maritalStatus,
        employeeStatus:req.body.employeeStatus,
        photo:req.body.photo,
        userName:req.body.userName,
        password:req.body.password
        },{
            where: {
                id: id
            }               
        }).then(Attendance => res.json({
            error: false,
            message: "update Success!"
        }))
        .catch(error => res.json({
            error: true,
            error: error
        }));
}

module.exports = {
    all, byId,createEmployee,deleteEmployee,updateEmployee
}