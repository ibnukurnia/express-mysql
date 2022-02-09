const { Sequelize } = require("sequelize");

module.exports = new Sequelize("product_db", "root", null, {
  host: "localhost",
  dialect: "mysql",
});
