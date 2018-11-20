'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('authors', [{
        id: 'kerness',
        userName: 'koray',
        email: 'demo@demo.com',
        password: 'aaa',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 'killoman',
        userName: 'killoman',
        email: 'jane@demo.com',
        password: 'qqq',
        createdAt: new Date(),
        updatedAt: new Date(),
      }
      ], {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('Person', null, {});
    */
  }
};
