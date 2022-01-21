const { Sequelize, DataTypes } = require("sequelize");
const bcrypt = require("bcrypt");
const connection = require("../connection");

const User = connection.define(
  "User",
  {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  { indexed: [{ unique: true, fields: ["name"] }] }
);

module.exports = User;
