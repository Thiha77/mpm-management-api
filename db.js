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
// import mariadb from 'mariadb';
const Sequelize = require('sequelize');
const sequelize = new Sequelize('mpm_mgmt', 'root', '', {
    host: 'localhost',
    dialect: 'mariadb',
});

module.exports = sequelize;