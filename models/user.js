'use strict';
module.exports = (sequelize, DataTypes) => {  
    const user = sequelize.define('user', {
      id: {
        type: DataTypes.STRING,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4
      },
      name: {
        type: DataTypes.STRING,
        required: true
      },
    });
    return user;
  };