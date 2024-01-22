const { Sequelize, QueryTypes } = require("sequelize");
const { connectPrismaLog } = require("../config/connections");
const {
  suppliers
} = require("./../models");
const Op = Sequelize.Op;

exports.index = async (req, res) => {
  try {
    const response = await suppliers.findAll();

    res.status(200).json(response);

    // });
  } catch (e) {
    return res.status(500).json({ error: e.message });
  }
};