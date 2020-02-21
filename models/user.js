'use strict';
module.exports = (sequelize, DataTypes) => {
  const user = sequelize.define('User', {
    name: DataTypes.STRING,
    userName: DataTypes.STRING,
    password: DataTypes.STRING,
    employeeId: DataTypes.INTEGER
  }, {});
  user.associate = (models) => {
    user.belongsTo(models.Employee, {
      foreignKey: 'employeeId',
      onDelete: 'CASCADE'
    })
  };
  return user;
};