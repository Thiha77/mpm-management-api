'use strict';
module.exports = (sequelize, DataTypes) => {
  const permission = sequelize.define('Permission', {
    name: DataTypes.ENUM('none','view','edit')
  }, {});
  permission.associate = function(models) {
      permission.hasMany(models.RolePermission, {
        foreignKey: 'permissionId',
        as: 'rolePermissions'
      });
  };
  return permission;
};