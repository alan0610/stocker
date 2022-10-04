'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Type extends Model {
    static associate(models) {
      Type.belongsTo(models.Clothing, { as: 'clothing' });
    }
  }
  Type.init(
    {
      name: DataTypes.STRING,
      clothingId: DataTypes.INTEGER
    },
    {
      sequelize,
      modelName: 'Type'
    }
  );
  return Type;
};
