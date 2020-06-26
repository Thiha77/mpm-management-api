'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('permissions', [
      {
        name: 'employee-none',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'employee-view',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'employee-edit',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'user-none',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'user-view',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'user-edit',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'attendance-none',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'attendance-view',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'attendance-edit',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'permission-none',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'permission-view',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'permission-edit',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'notice-none',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'notice-view',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'notice-edit',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'role-none',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'role-view',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'role-edit',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'rolepermission-none',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'rolepermission-view',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'rolepermission-edit',
        createdAt: new Date(),
        updatedAt: new Date()
      },
    ]);
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
  }
};
