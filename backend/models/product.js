'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Product extends Model {
    static associate(models) {
      Product.belongsTo(models.Brand, { as: 'brand' });
      Product.belongsTo(models.Clothing, { as: 'clothing' });
      Product.belongsTo(models.Type, { as: 'type' });
    }
  }
  Product.init(
    {
      brandId: DataTypes.INTEGER,
      clothingId: DataTypes.INTEGER,
      typeId: DataTypes.INTEGER,
      code: DataTypes.STRING,
      title: DataTypes.STRING,
      description: DataTypes.STRING,
      color: DataTypes.STRING,
      size: DataTypes.STRING,
      cost: DataTypes.INTEGER,
      price: DataTypes.INTEGER
    },
    {
      sequelize,
      modelName: 'Product'
    }
  );
  return Product;
};
