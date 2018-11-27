'use strict';
module.exports = (sequelize, DataTypes) => {
  const fileload = sequelize.define('fileload', {
    fileId: DataTypes.STRING,
    email: DataTypes.STRING,
    filename: DataTypes.STRING,
    filepath: DataTypes.STRING
  }, {});
  fileload.associate = function(models) {
    // associations can be defined here
  };
  return fileload;
};