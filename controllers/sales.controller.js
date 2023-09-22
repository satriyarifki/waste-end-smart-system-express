const { Sequelize, QueryTypes } = require("sequelize");
const { connectPrismaLog } = require("../config/connections");
const { sales_view, sales } = require("./../models");
const Op = Sequelize.Op;

exports.index_view = async (req, res) => {
  try {
    const response = await sales_view.findAll();

    res.status(200).json(response);

    // });
  } catch (e) {
    return res.status(500).json({ error: e.message });
  }
};
exports.sales_view_by_id = async (req, res) => {
  try {
    const { id } = req.params;
    const response = await sales_view.findByPk(id);

    res.status(200).json(response);

    // });
  } catch (e) {
    return res.status(500).json({ error: e.message });
  }
};
exports.index = async (req, res) => {
  try {
    const response = await sales.findAll();

    res.status(200).json(response);

    // });
  } catch (e) {
    return res.status(500).json({ error: e.message });
  }
};
exports.sales_by_id = async (req, res) => {
  try {
    const { id } = req.params;
    const response = await sales.findByPk(id);

    res.status(200).json(response);

    // });
  } catch (e) {
    return res.status(500).json({ error: e.message });
  }
};
