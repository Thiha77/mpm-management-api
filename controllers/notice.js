const Notice = require('../models').Notice;
const Employee = require('../models').Employee;
const { Op } = require("sequelize");

const all = (req, res) => {
    return Notice.findAll({
        include: [
            {
                model: Employee,
                attributes: ['name']
            }
        ],
        order: [
            ['createdAt', 'DESC']
        ]
    })
    .then( (notices) => {
        res.send(JSON.stringify(notices));
    });
}

const byId = (req, res) => {
    const id = req.params.id;
    return Notice.findOne({
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

const destroy = (req, res) => {
    let id = req.body.id;
    return Notice.destroy({
        where: {
            id:id
        }
    }).then( (notice) => {
        res.send(JSON.stringify(notice));
    });
}

const search = (req, res) => {
    let textSearch = req.params.textSearch;
    return Notice.findAll({
        include: [
            {
                model: Employee,
                attributes: ['name']
            }
        ],
        where: {
            [Op.or]:[
                {
                    id: { [Op.like] : [`%${textSearch}%`] }
                },
                {
                    title: { [Op.like] : [`%${textSearch}%`] }
                },
                {
                    description: { [Op.like] : [`%${textSearch}%`] }
                },
                {
                    summary: { [Op.like] : [`%${textSearch}%`] }
                },
                {
                    '$Employee.name$' : { [Op.like] : [`%${textSearch}%`] }
                }
            ]
        }
    }).then( (result) =>{
        res.send(JSON.stringify(result));
    })
    .catch(err => res.send(JSON.stringify(err)));
}

module.exports = {
    all, byId, save, update, destroy, search
}