'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

      return queryInterface.bulkInsert('rolepermissions', [
        {
          roleId: 1,
          permissionId: 3,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          roleId: 1,
          permissionId: 6,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          roleId: 1,
          permissionId: 9,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          roleId: 1,
          permissionId: 12,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          roleId: 1,
          permissionId: 15,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          roleId: 1,
          permissionId: 18,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          roleId: 1,
          permissionId: 21,
          createdAt: new Date(),
          updatedAt: new Date()
        }
    ], {});

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
