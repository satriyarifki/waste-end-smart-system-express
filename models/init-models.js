var DataTypes = require("sequelize").DataTypes;
var _price = require("./price");

function initModels(sequelize) {
  var price = _price(sequelize, DataTypes);


  return {
    price,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
