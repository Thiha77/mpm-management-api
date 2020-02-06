'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

      return queryInterface.bulkInsert('employees', 
      [
        {
          name: 'John Doe',
          alias: 'John',
          phoneNo: '01010101010',
          nrcNo: '12/lalala(N)01010011',
          personalEmail: 'johndoe@gmail.com',
          officialEmail: 'johndoe@official.com',
          township: 'np',
          city: 'Boston',
          address: 'No(1), labu street, Boston city, USA',
          postalcode: '01010',
          dob: new Date('01-oct-1989'),
          gender: 'male',
          position: 'Developer',
          basicSalary: 60000,
          nationality: 'USA',
          race: 'USA',
          maritalStatus: 'single',
          employeeStatus: 'active',
          photo: 'null',
          userName: 'john',
          password: '1234',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: 'Mary Crane',
          alias: 'Mary',
          phoneNo: '01010101010',
          nrcNo: '12/mamama(N)01010011',
          personalEmail: 'mary@gmail.com',
          officialEmail: 'mary@official.com',
          township: 'np',
          city: 'Boston',
          address: 'No(2), labu street, Boston city, USA',
          postalcode: '01010',
          dob: new Date('01-oct-1991'),
          gender: 'female',
          position: 'System Analysis',
          basicSalary: 60000,
          nationality: 'USA',
          race: 'USA',
          maritalStatus: 'single',
          employeeStatus: 'active',
          photo: 'null',
          userName: 'mary',
          password: '1234',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: 'David Bridge',
          alias: 'David',
          phoneNo: '01010101010',
          nrcNo: '12/dadada(N)01010011',
          personalEmail: 'david@gmail.com',
          officialEmail: 'david@official.com',
          township: 'np',
          city: 'Boston',
          address: 'No(3), labu street, Boston city, USA',
          postalcode: '01010',
          dob: new Date('01-oct-1990'),
          gender: 'male',
          position: 'Tester',
          basicSalary: 60000,
          nationality: 'USA',
          race: 'USA',
          maritalStatus: 'single',
          employeeStatus: 'active',
          photo: 'null',
          userName: 'david',
          password: '1234',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: 'Chistina Ellisbas',
          alias: 'Christ',
          phoneNo: '01010101010',
          nrcNo: '12/cacaca(N)01010011',
          personalEmail: 'christ@gmail.com',
          officialEmail: 'christ@official.com',
          township: 'np',
          city: 'Boston',
          address: 'No(4), labu street, Boston city, USA',
          postalcode: '01010',
          dob: new Date('01-oct-1999'),
          gender: 'female',
          position: 'Tester',
          basicSalary: 60000,
          nationality: 'USA',
          race: 'USA',
          maritalStatus: 'single',
          employeeStatus: 'active',
          photo: 'null',
          userName: 'christ',
          password: '1234',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: 'Michael Jackson',
          alias: 'Michael',
          phoneNo: '01010101010',
          nrcNo: '12/kakaka(N)01010011',
          personalEmail: 'mike@gmail.com',
          officialEmail: 'mike@official.com',
          township: 'np',
          city: 'Boston',
          address: 'No(5), labu street, Boston city, USA',
          postalcode: '01010',
          dob: new Date('01-oct-1987'),
          gender: 'male',
          position: 'Designer',
          basicSalary: 60000,
          nationality: 'USA',
          race: 'USA',
          maritalStatus: 'single',
          employeeStatus: 'active',
          photo: 'null',
          userName: 'mike',
          password: '1234',
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
