const { Sequelize, QueryTypes } = require("sequelize");
const { connectPrismaLog } = require("../config/connections");
const {
  sales_view,
  sales,
  sales_price_view,
  sequelize,
} = require("./../models");
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
exports.index_price_view = async (req, res) => {
  try {
    const response = await sales_price_view.findAll();

    res.status(200).json(response);

    // });
  } catch (e) {
    return res.status(500).json({ error: e.message });
  }
};
exports.big_five_sales_ytd = async (req, res) => {
  try {
    const response = await sales_price_view.findAll({
      attributes: [
        [sequelize.fn("SUM", sequelize.col("preform")), "preform"],
        [sequelize.fn("SUM", sequelize.col("botol_plastik")), "botol_plastik"],
        [sequelize.fn("SUM", sequelize.col("balok")), "balok"],
        [sequelize.fn("SUM", sequelize.col("karton")), "karton"],
        [sequelize.fn("SUM", sequelize.col("sak_kecil")), "sak_kecil"],
      ],
      where: sequelize.where(
        sequelize.fn("YEAR", sequelize.col("date")),
        new Date().getFullYear()
      ),
      group: [sequelize.fn("YEAR", sequelize.col("date"))],
    });

    res.status(200).json(response[0]);

    // });
  } catch (e) {
    return res.status(500).json({ error: e.message });
  }
};
exports.store = async (req, res) => {
  try {
    const response = await sales.create(req.body);

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
exports.sales_yearly = async (req, res) => {
  try {
    const response = await sales.findAll({
      attributes: [
        [sequelize.fn("YEAR", sequelize.col("date")), "year"],
        [sequelize.fn("SUM", sequelize.col("preform")), "preform"],
        [sequelize.fn("SUM", sequelize.col("botol_plastik")), "botol_plastik"],
        [sequelize.fn("SUM", sequelize.col("resin")), "resin"],
        [sequelize.fn("SUM", sequelize.col("balok")), "balok"],
        [sequelize.fn("SUM", sequelize.col("karton")), "karton"],
        [sequelize.fn("SUM", sequelize.col("sak_kecil")), "sak_kecil"],
        [sequelize.fn("SUM", sequelize.col("sak_besar")), "sak_besar"],
        [sequelize.fn("SUM", sequelize.col("drum")), "drum"],
        [sequelize.fn("SUM", sequelize.col("pallet_kayu")), "pallet_kayu"],
        [
          sequelize.fn("SUM", sequelize.col("pallet_plastik")),
          "pallet_plastik",
        ],
        [sequelize.fn("SUM", sequelize.col("besi")), "besi"],
        [sequelize.fn("SUM", sequelize.col("jerigen")), "jerigen"],
        [Sequelize.fn("SUM", Sequelize.col("total_price")), "sum_total"],
      ],
      group: [sequelize.fn("YEAR", sequelize.col("date"))],
      order: [
        ["year", "DESC"],
      ],
    });

    res.status(200).json(response);

    // });
  } catch (e) {
    return res.status(500).json({ error: e.message });
  }
};
exports.sales_monthly = async (req, res) => {
  try {
    const response = await sales.findAll({
      attributes: [
        [sequelize.fn("MONTH", sequelize.col("date")), "month"],
        [sequelize.fn("YEAR", sequelize.col("date")), "year"],
        [sequelize.fn("SUM", sequelize.col("preform")), "preform"],
        [sequelize.fn("SUM", sequelize.col("botol_plastik")), "botol_plastik"],
        [sequelize.fn("SUM", sequelize.col("resin")), "resin"],
        [sequelize.fn("SUM", sequelize.col("balok")), "balok"],
        [sequelize.fn("SUM", sequelize.col("karton")), "karton"],
        [sequelize.fn("SUM", sequelize.col("sak_kecil")), "sak_kecil"],
        [sequelize.fn("SUM", sequelize.col("sak_besar")), "sak_besar"],
        [sequelize.fn("SUM", sequelize.col("drum")), "drum"],
        [sequelize.fn("SUM", sequelize.col("pallet_kayu")), "pallet_kayu"],
        [
          sequelize.fn("SUM", sequelize.col("pallet_plastik")),
          "pallet_plastik",
        ],
        [sequelize.fn("SUM", sequelize.col("besi")), "besi"],
        [sequelize.fn("SUM", sequelize.col("jerigen")), "jerigen"],
        [Sequelize.fn("SUM", Sequelize.col("total_price")), "sum_total"],
      ],
      group: [
        sequelize.fn("YEAR", sequelize.col("date")),
        sequelize.fn("MONTH", sequelize.col("date")),
      ],
      order: [
        ["year", "DESC"],
        ["month", "DESC"],
      ],
    });

    res.status(200).json(response);

    // });
  } catch (e) {
    return res.status(500).json({ error: e.message });
  }
};
