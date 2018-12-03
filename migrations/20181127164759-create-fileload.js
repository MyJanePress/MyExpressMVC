'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('fileloads', {
      fileId: {
        primaryKey: true,
        allowNull: false,
        type: Sequelize.STRING,
        defaultValue:Sequelize.UUIDv4,
      },
      email: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      filename: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      filepath: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('fileloads');
  }
};
