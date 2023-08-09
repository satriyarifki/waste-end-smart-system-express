const Sequelize = require("sequelize");
module.exports = function (sequelize, DataTypes) {
  return sequelize.define(
    "reports",
    {
      id: {
        autoIncrement: true,
        type: DataTypes.INTEGER.UNSIGNED,
        allowNull: false,
        primaryKey: true,
      },
      netto: {
        type: DataTypes.DOUBLE,
        allowNull: false,
      },
      gross: {
        type: DataTypes.DOUBLE,
        allowNull: false,
      },
      tare: {
        type: DataTypes.DOUBLE,
        allowNull: false,
      },
      unit: {
        type: DataTypes.STRING(255),
        allowNull: false,
      },
      judgement: {
        type: DataTypes.STRING(255),
        allowNull: false,
      },
      global_variable_1: {
        type: DataTypes.STRING(255),
        allowNull: true,
      },
      global_variable_2: {
        type: DataTypes.STRING(255),
        allowNull: true,
      },
      customer_code: {
        type: DataTypes.STRING(255),
        allowNull: true,
      },
      customer_name: {
        type: DataTypes.STRING(255),
        allowNull: true,
      },
      customer_contact: {
        type: DataTypes.STRING(255),
        allowNull: true,
      },
      customer_address: {
        type: DataTypes.TEXT,
        allowNull: true,
      },
      customer_remark: {
        type: DataTypes.TEXT,
        allowNull: true,
      },
      supplier_code: {
        type: DataTypes.STRING(255),
        allowNull: true,
      },
      supplier_name: {
        type: DataTypes.STRING(255),
        allowNull: true,
      },
      supplier_contact: {
        type: DataTypes.STRING(255),
        allowNull: true,
      },
      supplier_address: {
        type: DataTypes.TEXT,
        allowNull: true,
      },
      supplier_remark: {
        type: DataTypes.TEXT,
        allowNull: true,
      },
      shift_code: {
        type: DataTypes.STRING(255),
        allowNull: true,
      },
      shift_name: {
        type: DataTypes.STRING(255),
        allowNull: true,
      },
      shift_start_time: {
        type: DataTypes.TIME,
        allowNull: true,
      },
      shift_end_time: {
        type: DataTypes.TIME,
        allowNull: true,
      },
      shift_remark: {
        type: DataTypes.TEXT,
        allowNull: true,
      },
      product_code: {
        type: DataTypes.STRING(255),
        allowNull: false,
      },
      product_name: {
        type: DataTypes.STRING(255),
        allowNull: false,
      },
      product_mass: {
        type: DataTypes.DOUBLE,
        allowNull: true,
        defaultValue: 0,
      },
      product_min_tolerance: {
        type: DataTypes.DOUBLE,
        allowNull: true,
        defaultValue: 0,
      },
      product_max_tolerance: {
        type: DataTypes.DOUBLE,
        allowNull: true,
        defaultValue: 0,
      },
      product_tare: {
        type: DataTypes.DOUBLE,
        allowNull: true,
        defaultValue: 0,
      },
      product_price: {
        type: DataTypes.DOUBLE,
        allowNull: true,
        defaultValue: 0,
      },
      product_remark: {
        type: DataTypes.TEXT,
        allowNull: true,
      },
      line_code: {
        type: DataTypes.STRING(255),
        allowNull: true,
      },
      line_name: {
        type: DataTypes.STRING(255),
        allowNull: true,
      },
      line_remark: {
        type: DataTypes.TEXT,
        allowNull: true,
      },
      user_code: {
        type: DataTypes.STRING(255),
        allowNull: false,
      },
      user_name: {
        type: DataTypes.STRING(255),
        allowNull: false,
      },
      user_position: {
        type: DataTypes.STRING(255),
        allowNull: true,
      },
      user_role: {
        type: DataTypes.STRING(255),
        allowNull: false,
      },
      user_remark: {
        type: DataTypes.TEXT,
        allowNull: true,
      },
      is_force: {
        type: DataTypes.BOOLEAN,
        allowNull: true,
      },
      created_at: {
        allowNull: false,
        type: DataTypes.DATE,
      },
      updated_at: {
        allowNull: false,
        type: DataTypes.DATE,
      },
    },
    {
      sequelize,
      tableName: "reports",
      timestamps: false,
      indexes: [
        {
          name: "PRIMARY",
          unique: true,
          using: "BTREE",
          fields: [{ name: "id" }],
        },
      ],
    }
  );
};
