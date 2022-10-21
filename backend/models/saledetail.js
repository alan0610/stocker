'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class SaleDetail extends Model {
    static associate(models) {
      SaleDetail.belongsTo(models.Sale, { as: 'sale' });
      SaleDetail.belongsTo(models.Product, { as: 'product' });
    }
  }
  SaleDetail.init(
    {
      saleId: DataTypes.INTEGER,
      productId: DataTypes.INTEGER
    },
    {
      sequelize,
      modelName: 'SaleDetail'
    }
  );
  return SaleDetail;
};
