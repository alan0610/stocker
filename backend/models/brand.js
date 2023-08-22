"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Brand extends Model {
    static associate(models) {
      Brand.hasMany(models.Product, {
        foreignKey: "brandId",
      });
    }
  }
  Brand.init(
    {
      title: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Brand",
      paranoid: true
    }
  );
  return Brand;
};
