const { Sequelize, QueryTypes } = require("sequelize");
const { connectPrismaLog } = require("../config/connections");
const { price } = require("../models");
const Op = Sequelize.Op;

exports.index = async (req, res) => {
  try {
    const response = await price.findAll();

    res.status(200).json(response);

    // });
  } catch (e) {
    return res.status(500).json({ error: e.message });
  }
};

exports.price_by_id = async (req, res) => {
  try {
    const { id } = req.params;
    const response = await price.findByPk(id);

    res.status(200).json(response);

    // });
  } catch (e) {
    return res.status(500).json({ error: e.message });
  }
};
