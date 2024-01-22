var DataTypes = require("sequelize").DataTypes;
var _customers = require("./customers");

function initModels(sequelize) {
  var customers = _customers(sequelize, DataTypes);


  return {
    customers,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
