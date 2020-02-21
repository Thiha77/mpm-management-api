'use strict';
module.exports = (sequelize, DataTypes) => {
  const role = sequelize.define('Role', {
    name: DataTypes.STRING,
    description: DataTypes.STRING
  }, {});
  role.associate = function(models) {
    role.hasMany(models.RolePermission, {
      foreignKey: 'roleId',
      as: 'rolePermissions'
    });
  };
  return role;
};