const { Sequelize } = require("sequelize");
const connection = new Sequelize(process.env.DB_URI, { logging: false });

module.exports = connection;
