'use strict';
module.exports = (sequelize, DataTypes) => {
  const Load = sequelize.define('Load', {
    fileId: DataTypes.STRING,
    email: DataTypes.STRING,
    filename: DataTypes.STRING,
    filepath: DataTypes.STRING
  }, {});
  Load.associate = function(models) {
    // associations can be defined here
  };
  return Load;
};