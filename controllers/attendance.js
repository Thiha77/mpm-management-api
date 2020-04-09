const Attendance = require('../models').Attendance;
const Employee = require('../models').Employee;
const { Op } = require("sequelize");
const sequelize  = require('../db');
const all = (req, res) => {
    return Attendance.findAll({
        include: [
            {
                model: Employee,
                attributes: ['name']
            }
        ]
    })
    .then( (emps) =>{
        res.send(JSON.stringify(emps));
    })

}

const byId = (req,res) => {
    let attId = req.params.id;
    return Attendance.findOne({
        where: {
            id: attId
        }
    }).then( (per) =>{
        res.send(JSON.stringify(per));
    });
}

const save = (req, res) => {
    let recordedDateTime = new Date(req.body.recordedDateTime);
    let employeeId = req.body.employeeId;
    Attendance.create({
        recordedDateTime: recordedDateTime,
        employeeId: employeeId
    })
    .then(res => {
        res.sendStatus(200);
    })
    .catch(err => res.send(JSON.stringify(err))); 
}

const update = (req,res) => {
    let attId = req.body.id;
    let recordedDateTime = new Date(req.body.recordedDateTime);
    let employeeId = req.body.employeeId;
    Attendance.update({
        recordedDateTime: recordedDateTime,
        employeeId: employeeId
    },{
        where: {
            id: attId
        }
    }).then(res => {
        res.sendStatus(200);
    })
    .catch(err => res.send(JSON.stringify(err)));
}

const destory = (req, res) => {
    let attId = req.body.id;
    Attendance.destroy({
        where: {
            id: attId
        }
    }).then( (attendance) => {
        res.send(JSON.stringify(attendance));
    });
}
const search = (req, res) => {
    let textSearch = req.params.textSearch;
    return Attendance.findAll({
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
                    employeeId: { [Op.like] : [`%${textSearch}%`] }
                },
                {
                    recordedDateTime:{[Op.between]:[`%${textSearch}%`+" 00:00:00",`%${textSearch}%`+" 23:59:00"]}
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
    all, byId, save, update, destory, search
}