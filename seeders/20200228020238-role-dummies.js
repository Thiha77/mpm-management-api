'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('roles', [
        {
          name: 'Admin',
          description: 'This is main admin',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: 'Employee',
          description: 'Normal Employee',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: 'HR-Admin',
          description: 'HR Admin',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: 'Manager',
          description: 'Manager',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: 'Team-Leader',
          description: 'Team Leader',
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ])
  },

  down: (queryInterface, Sequelize) => {

  }
};
