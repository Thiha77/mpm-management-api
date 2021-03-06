const User = require('../models').User;
const Employee = require('../models').Employee;
const Role = require('../models').Role;
const { Op } = require("sequelize");

const Bcrypt = require('bcrypt');

const all = (req, res) => {
    return User.findAll({
        include: [
            {
                model: Employee,
                attributes: ['name']
            },
            {
                model: Role,
                attributes: ['name']
            }
        ]
        })
    .then( (users) =>{
        res.send(JSON.stringify(users));
    })

}
const byId = (req, res) => {
    let userId = req.params.id;
    return User.findOne({
        where: {
            id: userId
        },
        include: [
            {
                model: Employee,
                attributes: ['name']
            }
        ]
    })
    .then( (emp) => {
        res.send(JSON.stringify(emp));
    })
}
// Thiha 6.29.2020
const createUser = (req,res)=>{
    let name = req.body.name;
    let userName = req.body.userName;
    let employeeId = req.body.employeeId;
    let roleId = req.body.roleId;
    Bcrypt.hash(req.body.password, 10, (err, hash) => {
        User.create({
            name: name,
            userName: userName,
            password:hash,
            employeeId:employeeId,
            roleId:roleId
        }).then((user) => {
            res.send(JSON.stringify(user));
        })
    });
    
    // .catch(err => res.send(JSON.stringify(err)));
}
const updateUser =(req,res)=>{
    const id = req.body.id;
    let name = req.body.name;
    let userName = req.body.userName;
    let password = Bcrypt.hashSync(req.body.password, 10);
    let employeeId = req.body.employeeId;
    let roleId = req.body.roleId;
    User.update({
        id:id,
        name: name,
        userName: userName,
        password:password,
        employeeId:employeeId,
        roleId:roleId
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
    }).then( (user) => {
        res.send(JSON.stringify(user));
    });
}
//eaindra 3.3.2020 // Thiha 6.29.2020
const searchUser =(req,res)=>{
    const userName = req.body.userName;
    const password = req.body.password;
    console.log(Bcrypt.hashSync(req.body.password, 10));
    return User.findOne({
        // attributes: { exclude: ['password']},
        where: {
            userName: userName,
            // password: password
        }
    })
    .then( (user) => {
        console.log(user);
        Bcrypt.compare(password, user.password, (err, result) => {
            if(result){
                res.send(JSON.stringify(user));
            }else{
                res.sendStatus(401);
            }
        });
        
    })
}
//eaindra 3.3.2020

const getEmpData = (req,res)=>{
    let users;
    User.findAll({
        attributes: ['employeeId']
    }).then((result) => {
        users = result;
        console.log(users);
        let eIds = [];
        for (let i = 0; i < users.length; i++) {
            eIds.push(users[i].employeeId);   
        }
        return Employee.findAll({
            where: {
                id: {
                    [Op.notIn]: eIds
                }
            }
        }).then( (emp) =>{
            res.send(JSON.stringify(emp));
        })
        .catch(err => res.send(JSON.stringify(err))); 
    });
}

module.exports = {
    all, byId,createUser,updateUser,deleteUser, searchUser, getEmpData
}