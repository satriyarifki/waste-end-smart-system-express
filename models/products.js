const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  const Products = sequelize.define('products', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    code: {
      type: DataTypes.STRING(255),
      allowNull: false,
      unique: "products_code_unique"
    },
    name: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    mass: {
      type: DataTypes.DOUBLE,
      allowNull: true,
      defaultValue: 0
    },
    min_tolerance: {
      type: DataTypes.DOUBLE,
      allowNull: true,
      defaultValue: 0
    },
    max_tolerance: {
      type: DataTypes.DOUBLE,
      allowNull: true,
      defaultValue: 0
    },
    tare: {
      type: DataTypes.DOUBLE,
      allowNull: true,
      defaultValue: 0
    },
    price: {
      type: DataTypes.DOUBLE,
      allowNull: true,
      defaultValue: 0
    },
    remark: {
      type: DataTypes.TEXT,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'products',
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
      {
        name: "products_code_unique",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "code" },
        ]
      },
    ]
  });
  return Products
};
