const Attendance = require('../models').Attendance;
const Employee = require('../models').Employee;
const { Op } = require("sequelize");
const sequelize  = require('../db');
const moment = require("moment");
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
const searchadvance = (req, res) => {
    let empId = req.body.employeeId;
    let empName = req.body.employeeName;
    let fromDate = req.body.fromDate;
<<<<<<< HEAD
    fromDate = fromDate;
    let toDate = req.body.toDate;
    toDate = toDate;
=======
    // fromDate = fromDate+" 00:00:00";
    let toDate = req.body.toDate;
    // toDate = toDate+" 23:59:00";
>>>>>>> 2667a3c0471eeeef545ca199f157d368a9a8e09a
    return Attendance.findAll({        
        include: [
            {
                model: Employee,
                attributes: ['name']
            }
        ],
        where: {
            [Op.and]:[
            {
<<<<<<< HEAD
                      employeeId: { [Op.like] : `%${empId}%` } 
            },
            {
                 '$Employee.name$': { [Op.like] : `%${empName}%` } 
            },
            {
                [Op.and] :[     
                    {
                        where : sequelize.where(sequelize.fn('date', sequelize.col('recordedDateTime')), '>=', fromDate)                    
                    },
                    {
                        where : sequelize.where(sequelize.fn('date', sequelize.col('recordedDateTime')), '<=', toDate)
                    }
                ]
            }
=======
                 employeeId: { [Op.eq] : [empId]}
            },
            {
                '$Employee.name$': { [Op.eq] : [empName]}
            },
            // {
            //     [Op.or] :[     
            //         {
            //             where : sequelize.where(sequelize.fn('date', sequelize.col('recordedDateTime')), '=', fromDate)                    
            //         },
            //         {
            //             where : sequelize.where(sequelize.fn('date', sequelize.col('recordedDateTime')), '=', toDate)
            //         },
            //         {   
            //             recordedDateTime : fromDate != null && toDate != null ?  
            //             {[Op.between]:[ moment(fromDate).format('YYYY-MM-DD HH:mm:ss'), moment(toDate).format('YYYY-MM-DD HH:mm:ss') ]} : { [Op.eq] : null}
            //         }
            //     ]
            // }
        //     {
        //         [Op.or]: [{
        //         from: {
        //             [Op.lte]: fromDate,
        //             [Op.gte]: toDate,
        //         },
        //         to: {
        //             [Op.lte]: fromDate,
        //             [Op.gte]: toDate,
        //         },
        //     }]
        // }
        {
            
                recordedDateTime: {
                    [Op.between]: [fromDate+" 00:00:00", toDate+" 23:59:00"]
                }
            
        }
>>>>>>> 2667a3c0471eeeef545ca199f157d368a9a8e09a
            ]
        }
    }).then( (result) =>{
        res.send(JSON.stringify(result));
    })
    .catch(err => res.send(JSON.stringify(err)));
}
module.exports = {
    all, byId, save, update, destory, search, searchadvance
}