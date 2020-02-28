'use strict';
module.exports = (sequelize, DataTypes) => {
  const role = sequelize.define('Role', {
    name: DataTypes.STRING,
    description: DataTypes.STRING
  }, {});
  role.associate = models => {
    role.hasMany(models.RolePermission, {
      foreignKey: 'roleId',
      as: 'rolePermissions'
    });
    role.hasMany(models.User, {
      foreignKey: 'roleId',
      as: 'users'
    })
  };
  return role;
};