const { DataTypes } = require("sequelize");
const sequelize = require("../dbConfig");

const Products = sequelize.define(
  "Products",
  {
    product_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    price: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    stock: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    status: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false,
    },
    img_url: {
      type: DataTypes.TEXT,
    },
  },
  {
    timestamps: false,
  }
);

module.exports = Products;
