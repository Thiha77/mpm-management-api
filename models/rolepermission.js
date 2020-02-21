'use strict';
module.exports = (sequelize, DataTypes) => {
  const rolePermission = sequelize.define('RolePermission', {
    rolea: DataTypes.STRING,
    roleId: DataTypes.INTEGER,
    permissionId: DataTypes.INTEGER
  }, {});
  rolePermission.associate = function(models) {
    rolePermission.belongsTo(models.Role, {
      foreignKey: 'roleId',
      onDelete: 'CASCADE'
    });
    rolePermission.belongsTo(models.Permission, {
      foreignKey: 'permissionId',
      onDelete: 'CASCADE'
    });
  };
  return rolePermission;
};