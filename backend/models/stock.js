'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Stock extends Model {
    static associate(models) {
      Stock.belongsTo(models.Product, { as: 'products' });
    }
  }
  Stock.init(
    {
      productId: DataTypes.INTEGER,
      stock: DataTypes.INTEGER,
      lastPurchase: DataTypes.DATE
    },
    {
      sequelize,
      modelName: 'Stock'
    }
  );
  return Stock;
};
