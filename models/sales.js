const Sequelize = require("sequelize");
module.exports = function (sequelize, DataTypes) {
  return sequelize.define(
    "sales",
    {
      id: {
        autoIncrement: true,
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
      },
      vendorId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 0,
      },
      date: {
        type: DataTypes.DATEONLY,
        allowNull: false,
        defaultValue: Sequelize.Sequelize.fn("curdate"),
      },
      resin: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 0,
      },
      botol_plastik: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 0,
      },
      balok: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 0,
      },
      pallet_kayu: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 0,
      },
      karton: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 0,
      },
      plastik: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 0,
      },
      cap: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 0,
      },
      sak_kecil: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 0,
      },
      sak_besar: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 0,
      },
      drum: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 0,
      },
      preform: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 0,
      },
      besi: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 0,
      },
      alumunium: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 0,
      },
      pallet_plastik: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 0,
      },
      kertas: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 0,
      },
      seng: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 0,
      },
      tembaga: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 0,
      },
      jerigen: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 0,
      },
      total_price: {
        type: DataTypes.BIGINT,
        allowNull: false,
        defaultValue: 0,
      },
      created_at: {
        allowNull: true,
        type: DataTypes.DATE,
      },
    },
    {
      sequelize,
      tableName: "sales",
      timestamps: false,
      indexes: [
        {
          name: "PRIMARY",
          unique: true,
          using: "BTREE",
          fields: [{ name: "id" }],
        },
        {
          name: "FK_sales_vendor",
          using: "BTREE",
          fields: [{ name: "vendorId" }],
        },
      ],
    }
  );
};
