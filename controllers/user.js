const User = require('../models').User;
const Employee = require('../models').Employee;
const Bcrypt = require('bcrypt');

const all = (req, res) => {
    return User.findAll({
        // attributes: ['id', 'name', ['employeeStatus', 'User Status']]
        include: Employee
    })
    .then( (users) =>{
        res.send(JSON.stringify(users));
    })

}
const byId = (req, res) => {
    let userId = req.params.id;
    return User.findAll({
        where: {
            id: empId
        }
    })
    .then( (emp) => {
        res.send(JSON.stringify(emp));
    })
}
const createUser =(req,res)=>{
    let name = req.body.name;
    let userName = req.body.userName;
    let password = Bcrypt.hashSync(req.body.password, 10);
    console.log(password);
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
//eaindra 3.3.2020
const searchUser =(req,res)=>{
    const userName = req.body.userName;
    const password = req.body.password;
    return User.findAll({
        where: {
            userName: userName,
            password: password 
        }
    })
    .then( (user) => {
        res.send(JSON.stringify(user));
    })
}
//eaindra 3.3.2020

module.exports = {
    all, byId,createUser,updateUser,deleteUser, searchUser
}