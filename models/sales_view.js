const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('sales_view', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
      primaryKey: true
    },
    vendor: {
      type: DataTypes.STRING(50),
      allowNull: false,
      defaultValue: ""
    },
    type: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    date: {
      type: DataTypes.DATEONLY,
      allowNull: false,
      defaultValue: Sequelize.Sequelize.fn('curdate')
    },
    resin_qty: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    resin_price: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    botol_plastik_qty: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    botol_plastik_price: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    balok_qty: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    balok_price: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    pallet_kayu_qty: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    pallet_kayu_price: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    karton_qty: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    karton_price: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    sak_kecil_qty: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    sak_kecil_price: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    sak_besar_qty: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    sak_besar_price: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    drum_qty: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    drum_price: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    preform_qty: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    preform_price: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    besi_qty: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    besi_price: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    pallet_plastik_qty: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    pallet_plastik_price: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    tembaga_qty: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    tembaga_price: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    jerigen_qty: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    jerigen_price: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    total_price: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: 0
    }
  }, {
    sequelize,
    tableName: 'sales_view',
    timestamps: false
  });
};
