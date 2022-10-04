'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Clothing extends Model {
    static associate(models) {}
  }
  Clothing.init(
    {
      name: DataTypes.STRING
    },
    {
      sequelize,
      modelName: 'Clothing'
    }
  );
  return Clothing;
};
