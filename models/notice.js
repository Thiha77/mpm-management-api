'use strict';
module.exports = (sequelize, DataTypes) => {
  const notice = sequelize.define('Notice', {
    title: DataTypes.STRING,
    description: DataTypes.STRING,
    summary: DataTypes.STRING,
    employeeId: DataTypes.INTEGER
  }, {});
  notice.associate = models => {
    notice.belongsTo(models.Employee, {
      foreignKey: 'employeeId',
      onDelete: 'CASCADE'
    })
  };
  return notice;
};