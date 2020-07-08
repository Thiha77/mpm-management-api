'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('employees', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      employeeId: {
        unique: true,
        type: Sequelize.STRING
      },
      name: Sequelize.STRING,
      alias: Sequelize.STRING,
      phoneNo: Sequelize.STRING,
      nrcNo: Sequelize.STRING,
      personalEmail: Sequelize.STRING,
      officialEmail: Sequelize.STRING,
      township: Sequelize.STRING,
      city: Sequelize.STRING,
      address: Sequelize.STRING,
      postalCode: Sequelize.STRING,
      dob: Sequelize.DATEONLY,
      gender: Sequelize.ENUM('male', 'female'),
      position: Sequelize.STRING,
      basicSalary: Sequelize.DECIMAL(20,2),
      nationality: Sequelize.STRING,
      race: Sequelize.STRING,
      maritalStatus: Sequelize.ENUM('single', 'married'),
      employeeStatus: Sequelize.ENUM('active', 'inactive'),
      photo: Sequelize.TEXT,
      userName: Sequelize.STRING,
      password: Sequelize.STRING,
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('employees');
  }
};