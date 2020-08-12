'use strict';
module.exports = (sequelize, DataTypes) => {
  const employee = sequelize.define('Employee', {
    employeeId: DataTypes.STRING,
    name: DataTypes.STRING,
    alias: DataTypes.STRING,
    phoneNo: DataTypes.STRING,
    nrcNo: DataTypes.STRING,
    personalEmail: DataTypes.STRING,
    officialEmail: DataTypes.STRING,
    township: DataTypes.STRING,
    city: DataTypes.STRING,
    address: DataTypes.STRING,
    postalCode: DataTypes.STRING,
    dob: DataTypes.DATE,
    gender: DataTypes.ENUM('male', 'female'),
    position: DataTypes.STRING,
    basicSalary: DataTypes.DECIMAL(20,2),
    nationality: DataTypes.STRING,
    race: DataTypes.STRING,
    maritalStatus: DataTypes.ENUM('single', 'married'),
    employeeStatus: DataTypes.ENUM('active', 'inactive'),
    photo: DataTypes.TEXT,
    userName: DataTypes.STRING,
    password: DataTypes.STRING,
    timeUsedHomeToOffice: DataTypes.STRING,
    phoneNo2: DataTypes.STRING,
    bankAccountNo: DataTypes.STRING,
    currentFamilyMembers: DataTypes.TEXT
  }, {});
  employee.associate = models => {
    // associations can be defined here
    employee.hasMany(models.Attendance, {
      foreignKey: 'employeeId',
      as: 'attendances'
    });
    employee.hasOne(models.User, {
      foreignKey: 'employeeId',
      as: 'user'
    });
    employee.hasMany(models.Notice, {
      foreignKey: 'employeeId',
      as: 'notices'
    });
  };
  return employee;
};