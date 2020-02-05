'use strict';
module.exports = (sequelize, DataTypes) => {
  const attendance = sequelize.define('Attendance', {
    recordedDateTime: DataTypes.DATE,
    employeeId: DataTypes.INTEGER
  }, {});
  attendance.associate = (models) => {
    // associations can be defined here
    attendance.belongsTo(models.Employee, {
      foreignKey: 'employeeId',
      onDelete: 'CASCADE'
    })
  };
  return attendance;
};