const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('price', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    type: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    resin: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    botol_plastik: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    balok: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    pallet_kayu: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    karton: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    plastik: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    cap: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    sak_kecil: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    sak_besar: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    drum: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    preform: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    besi: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    alumunium: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    pallet_plastik: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    kertas: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    seng: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    tembaga: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    jerigen: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    }
  }, {
    sequelize,
    tableName: 'price',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
};
