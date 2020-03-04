const Notice = require('../models').Notice;
const Employee = require('../models').Employee;

const all = (req, res) => {
    return Notice.findAll({
        include: [
            {
                model: Employee,
                attributes: ['name']
            }
        ]
    })
    .then( (notices) => {
        res.send(JSON.stringify(notices));
    });
}

const byId = (req, res) => {
    const id = req.params.id;
    return Notice.findAll({
        where: {
            id: id
        }
    })
    .then( (notices) => {
        res.send(JSON.stringify(notices));
    });
}

const save = (req, res) => {
    const body = req.body;
    return Notice.create({
        ...body
    })
    .then( (notice) => {
        res.send(JSON.stringify(notice));
    });
}

const update = (req, res) => {
    const body = req.body;
    const id = req.body.id;
    return Notice.update( {
        title: body.title,
        description: body.description,
        summary: body.summary,
        employeeId : body.employeeId
    }, {
        where: { id: id }
    }).then ( (rows) => {
        res.send(JSON.stringify(rows))
    });
}

const destory = (req, res) => {
    let id = req.body.id;
    return Notice.destroy({
        where: {
            id:id
        }
    }).then( (notice) => {
        res.send(JSON.stringify(notice));
    });
}

module.exports = {
    all, byId, save, update, destory
}