"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    static associate(models) {
      User.belongsTo(models.Role);
    }
  }
  User.init(
    {
      firstName: DataTypes.STRING,
      lastName: DataTypes.STRING,
      email: DataTypes.STRING,
      password: DataTypes.STRING,
      roleId: {
        field: 'role_id',
        type: DataTypes.INTEGER
      },
    },
    {
      sequelize,
      modelName: "User",
      paranoid: true
    }
  );
  return User;
};
