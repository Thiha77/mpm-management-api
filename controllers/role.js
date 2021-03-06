const Role = require('../models').Role;
const { Op } = require("sequelize");

const all = (req, res) => {
    return Role.findAll({

    }).then( (roles) =>{
        res.send(JSON.stringify(roles));
    });
}

const byId = (req,res) => {
    let roleId = req.params.id;
    return Role.findOne({
        where: {
            id: roleId
        }
    }).then( (roles) =>{
        res.send(JSON.stringify(roles));
    });
}

const save = (req, res) => {
    let roleName = req.body.name;
    let roleDescription = req.body.description;
    Role.create({
        name: roleName,
        description: roleDescription
    })
    .then( (roles) =>{
        res.send(JSON.stringify(roles));
    })
    .catch(err => res.send(JSON.stringify(err))); 
}

const update = (req,res) => {
    let roleId = req.body.id;
    let roleName = req.body.name;
    let roleDescription = req.body.description;
    Role.update({
        name: roleName,
        description: roleDescription
    },{
        where: {
            id: roleId
        }
    }).then(res => {
        res.sendStatus(200);
    })
    .catch(err => res.send(JSON.stringify(err)));
}

const destory = (req, res) => {
    let roleId = req.body.id;
    Role.destroy({
        where: {
            id: roleId
        }
    }).then(result => {
        res.send(JSON.stringify(result));
    })
    .catch(err => res.send(JSON.stringify(err)));
}

const search = (req, res) => {
    let search = req.params.text;
    return Role.findAll({
        where: {
            [Op.or]:[
                {
                    id: { [Op.like] : [`%${search}%`] }
                },{
                    name: { [Op.like] : [`%${search}%`] }
                },{
                    description: { [Op.like] : [`%${search}%`] }
                }
            ]
        }
    }).then( (result) =>{
        res.send(JSON.stringify(result));
    })
    .catch(err => res.send(JSON.stringify(err)));
}

const paginate = (req, res) => {
    let pageNo;
    if(req.params.pageNo != null)
    {
        pageNo = req.params.pageNo;
    }else
    {
        pageNo = 1;
    }
    let limit = 5;
    let offset = (pageNo - 1) * limit;
    // console.log(pageNo);
    return Role.findAll({
        offset: offset,
        limit: limit
    }).then( (roles) =>{
        res.send(JSON.stringify(roles));
    });
}

module.exports = {
    all,byId,save,update,destory,search,paginate
}