'use strict';
module.exports = (sequelize, DataTypes) => {
  const Subscription = sequelize.define('Subscription', {
    endpoint: DataTypes.TEXT,
    expirationTime: 'TIMESTAMP',
    p256dh: DataTypes.TEXT,
    auth: DataTypes.TEXT
  }, {});
  Subscription.associate = function(models) {
    // associations can be defined here
  };
  return Subscription;
};