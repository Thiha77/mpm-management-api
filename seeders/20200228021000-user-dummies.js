'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('users', [
        {
          name: 'John Doe',
          userName: 'admin',
          password: '$2b$10$f1pS0hqN/ozjAjOk1FmmQeX3ifLXASa71Mq6ekVy.hH.VJal2Rfxe',
          employeeId: 1,
          roleId: 1,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: 'Mary Crane',
          userName: 'mary',
          password: 'mary',
          employeeId: 2,
          roleId: 2,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: 'David Bridge',
          userName: 'david',
          password: 'david',
          employeeId: 3,
          roleId: 3,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: 'Christina Ellisbas',
          userName: 'christ',
          password: 'christ',
          employeeId: 4,
          roleId: 4,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: 'Michael Jackson',
          userName: 'mike',
          password: 'mike',
          employeeId: 5,
          roleId: 5,
          createdAt: new Date(),
          updatedAt: new Date()
        },
      ]);
  },

  down: (queryInterface, Sequelize) => {
   
  }
};
