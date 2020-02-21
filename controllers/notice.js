const Notice = require('../models').Notice;

const all = (req, res) => {
    return Notice.findAll()
    .then( (notices) => {
        res.send(JSON.stringify(notices));
    });
}

const byId = (req, res) => {
    id = req.params.id;
    return Notice.findAll({
        where: {
            id: id
        }
    })
    .then( (notices) => {
        res.send(JSON.stringify(notices));
    })
}

const save = (req, res) => {
    let body = req.body;
    return Notice.create({
        ...body
    })
    .then( (notice) => {
        res.send(JSON.stringify(notice));
    })
}

module.exports = {
    all, byId, save
}