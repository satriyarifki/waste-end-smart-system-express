const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('write_off', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    dic: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    asset: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    qty: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    year: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    quartal: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    received: {
      type: DataTypes.ENUM('Yes','No'),
      allowNull: true
    },
    picture: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    note: {
      type: DataTypes.STRING(100),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'write_off',
    timestamps: true,
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
