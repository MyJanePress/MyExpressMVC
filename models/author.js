'use strict';
module.exports = (sequelize, DataTypes) => {
  const author = sequelize.define('author', {
    id: {
      allowNull: false,
      primaryKey: true,
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
    }, 
    userName: {
      allowNull: false,
      type:DataTypes.STRING,
    },
    email: {
      allowNull: false,
      unique: true,
      type:DataTypes.STRING,
    },
    password: {
      type: DataTypes.STRING,
      unique: true,
    }
  }, {});
  author.associate = function(models) {
    // associations can be defined here
  };
  return author;
};