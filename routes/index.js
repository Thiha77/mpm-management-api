const express = require('express')
const sequelize = require('../db');
// const Sequelize = require('sequelize');

const employees = require('./employee');
const attendances = require('./attendance');
const users = require('./user');
const notices = require('./notice');
const roles = require('./role');
const permissions = require('./permission');
const rolepermissions = require('./rolepermission');
const uploader = require('./upload');
const subscriptions = require('./subscription');

const router = express.Router()

router.get('/', (req, res) => {
    console.log('Hello, This is root route');
    // res.sendStatus(200)
    res.end()
})

router.get('/test-time', (req,res) => {
    let currentDate = new Date();
    let beforeLunch = new Date().setHours(10,50,0);
    let afterLunch = new Date().setHours(10,52,0);
    if(currentDate > beforeLunch && currentDate < afterLunch){
        res.send({ is: "yes", time: currentDate});
    }else{
        res.send('No');
    }
});

// router.post('/subscribe', (req, res) => {
//     const subscription = req.body;
//     const payload = JSON.stringify({title:'test'});
//     console.log(subscription);
//     webpush.sendNotification(subscription, payload).catch( error => {
//         console.error(error.stack);
//     });
// });

router.get('/sendNoti', (req, res) => {
    const subscription = {
        endpoint: 'https://fcm.googleapis.com/fcm/send/fZ4OHsmy2oc:APA91bFbRhooxzNVOorbXainLZ31KGoaN47rC-lb5FvcliO82dx7Q7yTYZIj78d7TxoXwcpy8TkOsZRM_jkdnJiHlhcESP3ups9g2y3jwE8yalOikbnF0Z-AkoRwn6kaXuZY2d4LzN8C',
        expirationTime: null,
        keys: {
          p256dh: 'BDA3AerCFx8TGRZqco4BIJgAFRSIm4Nhr2jS-YuYaYHhxsoV9OphlJusuRHfGjO1kwNfM8FKUjK8sLD07A236qU',
          auth: '8jXgFg1_BP5eAxCNgBiRIA'
        }
    };
    const payload = JSON.stringify({title:'I sent you a push noti'});
    webpush.sendNotification(subscription, payload).catch( error => {
        console.error(error.stack);
    });
    res.end();
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
router.use('/users', users);
router.use('/notices', notices);
router.use('/roles', roles);
router.use('/permissions', permissions);
router.use('/rolepermissions',rolepermissions);
router.use('/upload',uploader);
router.use('/subscriptions', subscriptions);

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