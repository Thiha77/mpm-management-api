'use strict';
module.exports = (sequelize, DataTypes) => {
  const admin = sequelize.define('Admin', {
    name: DataTypes.STRING,
    userName: DataTypes.STRING,
    password: DataTypes.STRING
  }, {});
  admin.associate = (models) => {
    // associations can be defined here
  };
  return admin;
};