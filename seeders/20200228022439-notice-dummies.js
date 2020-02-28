'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('notices', [
      {
        title: 'Fine Released Treat :)',
        description: '900000k Fine is finally released and will treat u all :)',
        summary: 'Don\'t Worry, Be Happy!',
        employeeId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'New Language For Office :(',
        description: 'We have to support for employees who want carrier at Japan. So, we will develop coming projects with PYTHON! :o',
        summary: 'Don\'t Worry, Be Happy!',
        employeeId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'Bonus at April! :)',
        description: 'Bonus!!!!!!!!, yayyy, Sugoi :D, yeah with full month current salary :) :) :)',
        summary: 'Don\'t Worry, Be Happy!',
        employeeId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
    ]);
  },

  down: (queryInterface, Sequelize) => {
    
  }
};
