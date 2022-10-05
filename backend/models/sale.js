'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Sale extends Model {
    static associate(models) {
      Sale.belongsTo(models.User, { as: 'user' });
    }
  }
  Sale.init(
    {
      total: DataTypes.INTEGER,
      date: DataTypes.DATE,
      userId: DataTypes.INTEGER
    },
    {
      sequelize,
      modelName: 'Sale'
    }
  );
  return Sale;
};
