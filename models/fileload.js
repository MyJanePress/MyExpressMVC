'use strict';
/**
 * sequelize make id field default.
 * so we have to eliminate 'id' field using removeAttribute() method
 */
module.exports = (sequelize, DataTypes) => {
  const fileload = sequelize.define('fileload', {
    fileId: DataTypes.STRING,
    email: DataTypes.STRING,
    filename: DataTypes.STRING,
    filepath: DataTypes.STRING
  }, {});
  fileload.removeAttribute('id');
  fileload.associate = function(models) {
    // associations can be defined here
  };
  return fileload;
};