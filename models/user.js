'use strict';
module.exports = (sequelize, DataTypes) => {  
    const user = sequelize.define('users', {
      email: {
        type: DataTypes.STRING,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4
      },
      password: {
        type: DataTypes.STRING,
        required: true
      },
    });
    return user;
  };