const { Sequelize, QueryTypes } = require("sequelize");
const { connectPrismaLog } = require("../config/connections");
const { vendor, price } = require("../models");
const { price_by_id } = require("./prices.controller");
const Op = Sequelize.Op;

exports.index = async (req, res) => {
  try {
    const response = await vendor.findAll({
      include: [{ model: price }],
    });

    res.status(200).json(response);

    // });
  } catch (e) {
    return res.status(500).json({ error: e.message });
  }
};
