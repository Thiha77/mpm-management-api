const Permission = require('../models').Permission;

const all = (req, res) => {
    return Permission.findAll({

    }).then( (per) =>{
        res.send(JSON.stringify(per));
    });
}

const byId = (req,res) => {
    let perId = req.params.id;
    return Permission.findAll({
        where: {
            id: perId
        }
    }).then( (per) =>{
        res.send(JSON.stringify(per));
    });
}

const save = (req, res) => {
    let perName = req.body.name;
    Permission.create({
        name: perName
    })
    .then(res => {
        res.sendStatus(200);
    })
    .catch(err => res.send(JSON.stringify(err))); 
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
    }).then(res => {
        res.sendStatus(200);
    })
    .catch(err => res.send(JSON.stringify(err)));
}

module.exports = {
    all,byId,save,update,destory
}