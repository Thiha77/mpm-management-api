const User = require('../models').User;
const Employee = require('../models').Employee;

const all = (req, res) => {
    return User.findAll({
        // attributes: ['id', 'name', ['employeeStatus', 'User Status']]
        include: Employee
    })
    .then( (users) =>{
        res.send(JSON.stringify(users));
    })

}

const createUser =(req,res)=>{
    let name = req.body.name;
    let userName = req.body.userName;
    let password = req.body.password;
    let employeeId = req.body.employeeId;
    User.create({
        name: name,
        userName: userName,
        password:password,
        employeeId:employeeId
    }).then(res => {
        res.sendStatus(200);
    })
    .catch(err => res.send(JSON.stringify(err)));
}
const updateUser =(req,res)=>{
    const id = req.body.id;
    let name = req.body.name;
    let userName = req.body.userName;
    let password = req.body.password;
    let employeeId = req.body.employeeId;
    User.update({
        id:id,
        name: name,
        userName: userName,
        password:password,
        employeeId:employeeId
    },
    {
        where: {id: id} 
       }
    ).then(User => res.json({
        error:false,
        message: "Update Success!"
    }))
    .catch(err => res.send(JSON.stringify(err)));
}
const deleteUser =(req,res)=>{
    //console.log("Id"+req.body.id);
    const id = req.body.id;
    User.destroy({
        where:{
            id:id
        }
    }).then(User=> res.json({
        error:false,
        message:"deleted Success!"
    }))
    .catch(error => res.json({
        error: true,
        error: error
    }));
}
// const byId = (req, res) => {
//     let empId = req.params.id;
//     return User.findAll({
//         where: {
//             id: empId
//         }
//     })
//     .then( (emp) => {
//         res.send(JSON.stringify(emp));
//     })
// }

module.exports = {
    all, createUser,updateUser,deleteUser
}