const express = require('express')
const sequelize = require('../db');
// const Sequelize = require('sequelize');

const employees = require('./employee');
const attendances = require('./attendance');
// con.connect((err) => {
//     if(err) throw err
// })

const router = express.Router()

router.get('/', (req, res) => {
    console.log('Hello, This is root route');
    // res.sendStatus(200)
    res.end()
})

router.get('/getVersion', (req, res) => {
    res.send(JSON.stringify({'api-version': '1.0'}))
    // res.sendStatus(200)
})

router.get('/testdb', (req, res) => {
    sequelize
    .authenticate()
    .then(() => {
        console.log('Success');
        res.sendStatus(200);
    })
    .catch(err => {
        console.log(err);
        res.end();
    })
})

router.post('/testpost', (req, res) => {
    console.log(req.body.data);
    console.log(req.body);{}
    res.status(404).send(req.body);
});

router.use('/employees', employees);
router.use('/attendances', attendances);

// router.get('/users', (req, res) => {
//     User.findAll()
//     .then((users) =>{
//         res.send(JSON.stringify(users));
//     });
// });

// router.get('/companies', (req, res) => {
//     Company.findAll()
//     .then((cos) =>{
//         res.send(JSON.stringify(cos));
//     })
// });

// router.get('/employees', (req, res) => {
//     Employee.findAll({
//         attributes: ['id', 'name', ['employeeStatus', 'Employee Status']]
//     })
//     .then((emps) =>{
//         res.send(JSON.stringify(emps));
//     })
//     Company.findAll({
//         where: {
//             id: 2
//         }
//     }).then( (co) =>{
//         res.send(JSON.stringify(co));
//     });
// });

// router.get('/users', (req, res) => {
//     let sql = "SELECT * FROM user"
//     let query = con.query(sql, (err, results) => {
//         if(err) throw err
//         res.send(JSON.stringify({
//             "status": 200,
//             "error" : null,
//             "response" : results
//         }))
//     })
// })

// router.get('/users/:id', (req, res) => {
//     let id = req.params.id
//     let sql = `SELECT * FROM user WHERE id=${id}`
//     let query = con.query(sql, (err, results) => {
//         if(err) throw err
//         res.send(JSON.stringify({"user": results}))
//     })

// })

module.exports = router;