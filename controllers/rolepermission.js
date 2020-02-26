const RolePermission = require('../models').RolePermission;

const all = (req, res) => {
    return RolePermission.findAll({

    }).then( (rolePer) =>{
        res.send(JSON.stringify(rolePer));
    });
}

const byId = (req,res) => {
    let rolePerId = req.params.id;
    return RolePermission.findAll({
        where: {
            id: rolePerId
        }
    }).then( (rolePer) =>{
        res.send(JSON.stringify(rolePer));
    });
}

const save = (req, res) => {
    let roleId = req.body.roleId;
    let permissionId = req.body.permissionId;
    RolePermission.create({
        roleId: roleId,
        permissionId: permissionId
    })
    .then( (rolePer) =>{
        res.send(JSON.stringify(rolePer));
    })
    .catch(err => res.send(JSON.stringify(err))); 
}

const update = (req,res) => {
    let rolePerId = req.body.id;
    let roleId = req.body.roleId;
    let permissionId = req.body.permissionId;
    RolePermission.update({
        roleId: roleId,
        permissionId: permissionId
    },{
        where: {
            id: rolePerId
        }
    }).then(res => {
        res.sendStatus(200);
    })
    .catch(err => res.send(JSON.stringify(err)));
}

const destory = (req, res) => {
    let rolePerId = req.body.id;
    RolePermission.destroy({
        where: {
            id: rolePerId
        }
    }).then(res => {
        res.sendStatus(200);
    })
    .catch(err => res.send(JSON.stringify(err)));
}

module.exports = {
    all,byId,save,update,destory
}