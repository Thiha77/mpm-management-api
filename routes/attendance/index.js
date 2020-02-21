const attendanceRouter = require('express').Router();
const Attendance = require('../../models').Attendance


attendanceRouter.get('/', (req, res) => {
    Attendance.findAll()
    .then( (attds) => {
        res.send(JSON.stringify(attds));
    })
});




module.exports = attendanceRouter;