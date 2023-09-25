"use strict";
const { Model } = require("sequelize");
module.exports = function (sequelize, DataTypes) {
  const Price = sequelize.define("price", { timestamps: false });
  const Vendor = sequelize.define(
    "vendor",
    {
      id: {
        autoIncrement: true,
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
      },
      name: {
        type: DataTypes.STRING(50),
        allowNull: false,
        defaultValue: "",
      },
      priceId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 0,
        references: {
          model: { tableName: "price" },
          key: "id",
        },
      },
    },
    {
      tableName: "vendor",
      timestamps: false,
      indexes: [
        {
          name: "PRIMARY",
          unique: true,
          using: "BTREE",
          fields: [{ name: "id" }],
        },
        {
          name: "FK__price",
          using: "BTREE",
          fields: [{ name: "typeId" }],
        },
      ],
    }
  );
  // Prices.hasOne()
  Vendor.belongsTo(Price);
  return Vendor;
};
