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
                attributes: ['name', 'employeeId']
            }
        ],
        order: [
            ['recordedDateTime', 'DESC']
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
                    // recordedDateTime: { [Op.like] : [`%${textSearch}%`] }
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
    fromDate = fromDate;
    let toDate = req.body.toDate;
    toDate = toDate;
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
            ]
        }
    }).then( (result) =>{
        res.send(JSON.stringify(result));
    })
    .catch(err => res.send(JSON.stringify(err)));
}

const attendanceDate= (req, res) => {   
    return Attendance.findAll({

        attributes: [
               [sequelize.literal('DISTINCT DATE_FORMAT(recordedDateTime,"%Y/%m") '), 'recordedDateTime']
            // [sequelize.fn(['date_format'], sequelize.col('recordedDateTime'), '%Y/%m'), 'recordedDateTime']
        ],
        order: [
            ['id', 'DESC']
        ]
    })
    .then( (result) =>{
        res.send(JSON.stringify(result));
    })
     .catch(err => res.send(JSON.stringify(err)));
   
}

const attendanceAmPm=(req, res) => {
  
    let empId = req.params.id;
    let attDate = req.params.date;

    return Attendance.findAll({
        attributes: [
               [sequelize.literal('DATE_FORMAT(recordedDateTime,"%Y/%m/%d") '), 'recordedDateTime'],
               [sequelize.literal('DATE_FORMAT(recordedDateTime,"%H:%i") '), 'am_pm'],  
               [sequelize.literal('DATE_FORMAT(recordedDateTime,"%H") '), 'hour'],
               [sequelize.literal('DATE_FORMAT(recordedDateTime,"%i") '), 'minute'],               
        ],  
         where: {
              employeeId: empId,           
              where : sequelize.where(sequelize.literal('EXTRACT(YEAR_MONTH from recordedDateTime)'), '=', attDate) 
        },   
         order: [
            [sequelize.literal('DATE(recordedDateTime)')],
            [sequelize.literal('DATE_FORMAT(recordedDateTime,"%H:%i")')]
        ]    
    })
    .then( (result) =>{
   
        let first_date='';
        let first_arr=[];


      result.forEach(function(entry) {
         
            first_date=entry.recordedDateTime;
            first_arr.push({"am_pm":entry.am_pm});
      });

        res.send(JSON.stringify(result));//JSON.stringify(result)
    })
     .catch(err => res.send(JSON.stringify(err)));
   
}

const countDay=(req, res) => {
    let empId = req.params.id;
    let attDate = req.params.date;
     
    return Attendance.findAll({
        attributes: [
               [sequelize.literal('DATE_FORMAT(recordedDateTime,"%Y/%m/%d") '), 'rec'],
               [sequelize.literal('DATE_FORMAT(recordedDateTime,"%d") '), 'day'],
        ],  
         where: {
              employeeId: empId,           
              where : sequelize.where(sequelize.literal('EXTRACT(YEAR_MONTH from recordedDateTime)'), '=', attDate) 
        },  
        group: ['rec'] 
    })
    .then( (result) =>{        
        res.send(JSON.stringify(result));
    })
     .catch(err => res.send(JSON.stringify(err)));
}

module.exports = {
    all, byId, save, update, destory, search, searchadvance,attendanceDate,attendanceAmPm,countDay
}