'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class SaleDetail extends Model {
    static associate(models) {
      SaleDetail.belongsTo(models.Sale, { as: 'sales' });
      SaleDetail.belongsTo(models.Product, { as: 'products' });
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
