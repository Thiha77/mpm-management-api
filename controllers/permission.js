const Permission = require('../models').Permission;
const RolePermission = require('../models').RolePermission;
const { Op } = require("sequelize");

const all = (req, res) => {
    return Permission.findAll({

    }).then( (per) =>{
        res.send(JSON.stringify(per));
    });
}

const byId = (req,res) => {
    let perId = req.params.id;
    return Permission.findOne({
        where: {
            id: perId
        }
    }).then( (per) =>{
        res.send(JSON.stringify(per));
    });
}

const save = (req, res) => {
    let specialPer = req.body.specialPer;
    if(specialPer == true)
    {
        let perName = req.body.name;
        Permission.create({
            name: perName
        })
        .then( (per) =>{
            res.send(JSON.stringify(per));
        })
        .catch(err => res.send(JSON.stringify(err))); 
    }else
    {
        let perName1 = req.body.name+"-none";
        let perName2 = req.body.name+"-view";
        let perName3 = req.body.name+"-edit";

        Permission.bulkCreate([
            { 
                name: perName1
            }, 
            {
                name: perName2
            }, 
            { 
                name: perName3
            } 
        ])
        .then( (per) =>{
            res.send(JSON.stringify(per));
        })
        .catch(err => res.send(JSON.stringify(err))); 
    }
    
}

const update = (req,res) => {
    let perId = req.body.id;
    let perName = req.body.name;
    Permission.update({
        name: perName,
    },{
        where: {
            id: perId
        }
    }).then(res => {
        res.sendStatus(200);
    })
    .catch(err => res.send(JSON.stringify(err)));
}

const destory = (req, res) => {
    let perId = req.body.id;
    Permission.destroy({
        where: {
            id: perId
        }
    }).then(result => {
        res.send(JSON.stringify(result));
    })
    .catch(err => res.send(JSON.stringify(err)));
}

const byRoleId = (req, res) => {
    let roleId = req.params.roleId;
    let permissions = {};
    RolePermission.findAll({
        attributes: ['permissionId'],
        where: {
            roleId: roleId
        }
    }).then((result) => {
        permissions = result;
    
        let pIds = [];
        for (let i = 0; i < permissions.length; i++) {
            pIds.push(permissions[i].permissionId);   
        }

        return Permission.findAll({
            where: {
                id: {
                    [Op.notIn]: pIds
                }
            }
        }).then( (per) =>{
            res.send(JSON.stringify(per));
        })
        .catch(err => res.send(JSON.stringify(err))); 
    })
}

const search = (req, res) =>{
    let search = req.params.text;
    return Permission.findAll({
        where: {
            [Op.or]:[
                {
                    id: { [Op.like] : [`%${search}%`] }
                },{
                    name: { [Op.like] : [`%${search}%`] }
                }
            ]
        }
    }).then( (result) =>{
        res.send(JSON.stringify(result));
    })
    .catch(err => res.send(JSON.stringify(err)));
}

module.exports = {
    all,byId,save,update,destory,byRoleId, search
}