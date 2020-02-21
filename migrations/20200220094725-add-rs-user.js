'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn(
      'users',
      'employeeId',
      {
         type: Sequelize.INTEGER,
         references: {
           model: 'employees',
           key: 'id'
         }
      }
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.removeColumn('users', 'employeeId');
  }
};
