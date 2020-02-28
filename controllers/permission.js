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
    }).then(res => {
        res.sendStatus(200);
    })
    .catch(err => res.send(JSON.stringify(err)));
}

module.exports = {
    all,byId,save,update,destory
}