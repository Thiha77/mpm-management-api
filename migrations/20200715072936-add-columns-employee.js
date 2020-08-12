'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return Promise.all([
      queryInterface.addColumn(
        'employees',
        'phoneNo2',
        {
          type: Sequelize.STRING
        }
      ),
      queryInterface.addColumn(
        'employees',
        'bankAccountNo',
        {
          type: Sequelize.STRING
        }
      ),
      queryInterface.addColumn(
        'employees',
        'currentFamilyMembers',
        {
          type: Sequelize.STRING
        }
      ),
      queryInterface.addColumn(
        'employees',
        'timeUsedHomeToOffice',
        {
          type: Sequelize.TEXT
        }
      ),
    ]);
  },

  down: (queryInterface, Sequelize) => {
    return Promise.all([
      queryInterface.removeColumn('employees', 'phoneNo2'),
      queryInterface.removeColumn('employees', 'bankAccountNo'),
      queryInterface.removeColumn('employees', 'currentFamilyMembers'),
      queryInterface.removeColumn('employees', 'timeUsedHomeToOffice'),
    ]);
  }
};
