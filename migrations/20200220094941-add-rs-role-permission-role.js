'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn(
      'rolepermissions',
      'roleId',
      {
         type: Sequelize.INTEGER,
         references: {
           model: 'roles',
           key: 'id'
         }
       }
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.removeColumn('rolepermissions', 'roleId');
  }
};
