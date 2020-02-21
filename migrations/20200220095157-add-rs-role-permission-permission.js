'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn(
      'rolepermissions',
      'permissionId',
      {
         type: Sequelize.INTEGER,
         references: {
           model: 'permissions',
           key: 'id'
         }
       }
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.removeColumn('rolepermissions', 'roleId');
  }
};
