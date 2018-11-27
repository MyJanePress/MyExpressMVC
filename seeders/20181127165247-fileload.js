'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('fileloads', [{
        fileId: '8c57a914-8244-4000-a317-80598ec8efc6',
        email: 'demo@demo.com',
        filename: 'file-28473829893.rar',
        filepath: 'f:/files/winrar',
        createdAt: new Date(),
        updatedAt: new Date(),
        
      },
      {
        fileId: '9765bb8f-993a-4d6b-a5c4-ffcc79f01a85',
        email: 'jane@demo.com',
        filename: 'file-4154845555456.rar',
        filepath: 'f:/files/winrar',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
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
