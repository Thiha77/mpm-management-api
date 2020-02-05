// const mysql = require('mysql');

// const pool = mysql.createPool({
//     connectionLimit: 10,
//     host: 'localhost',
//     user: 'root',
//     password: '',
//     database: 'test'
// })
 
// const con = function getConnection(){
//     return pool
// }
const Sequelize = require('sequelize');
const sequelize = new Sequelize('attendance_mpm', 'root', '', {
    host: 'localhost',
    dialect: 'mariadb'
});

module.exports = sequelize;