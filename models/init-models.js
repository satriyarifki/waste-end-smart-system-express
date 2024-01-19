var DataTypes = require("sequelize").DataTypes;
var _v_login_aio = require("./v_login_aio");

function initModels(sequelize) {
  var v_login_aio = _v_login_aio(sequelize, DataTypes);


  return {
    v_login_aio,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
