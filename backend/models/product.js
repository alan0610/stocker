"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Product extends Model {
    static associate(models) {
      Product.belongsTo(models.Brand);
      Product.belongsTo(models.Category);
    }
  }
  Product.init(
    {
      title: DataTypes.STRING,
      description: DataTypes.STRING,
      categoryId: DataTypes.INTEGER,
      brandId: DataTypes.INTEGER,
      size: DataTypes.STRING,
      color: DataTypes.STRING,
      stock: DataTypes.INTEGER,
      price: DataTypes.INTEGER,
      image: DataTypes.STRING
    },
    {
      sequelize,
      modelName: "Product",
      paranoid: true
    }
  );
  return Product;
};
