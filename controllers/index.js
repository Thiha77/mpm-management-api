const employee = require('./employee');
const user = require('./user');
const notice = require('./notice');
const role = require('./role');
const permission = require('./permission');
const rolepermission = require('./rolepermission');
const attendance = require('./attendance');
const uploader = require('./upload');
const subscription = require('./subscription');

module.exports = {
    user, employee, notice , role, permission, rolepermission, attendance, uploader, subscription
}