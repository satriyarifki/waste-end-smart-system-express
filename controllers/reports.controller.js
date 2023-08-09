const { Sequelize, QueryTypes } = require("sequelize");
const { connectPrismaLog } = require("../config/connections");
const { reports } = require("./../models");
const Op = Sequelize.Op;

// exports.index = async (req, res) => {
//   try {
//     const rpt = await connectPrismaLog.query("SELECT * FROM `reports` ", {
//       logging: console.log,
//       type: QueryTypes.SELECT,
//     });

//     const response = { reports: rpt };
//     res.status(200).json(response);
//   } catch (e) {
//     return res.status(500).json({ error: e.message });
//   }
// };
exports.index = async (req, res) => {
  try {
    const response = await reports.findAll();

    res.status(200).json(response);

    // });
  } catch (e) {
    return res.status(500).json({ error: e.message });
  }
};
exports.passboxOc2 = async (req, res) => {
  try {
    const response = await reports.findAll({
      where: { supplier_name: "OC2" },
    });

    res.status(200).json(response);

    // });
  } catch (e) {
    return res.status(500).json({ error: e.message });
  }
};
exports.passboxOc2ByLot = async (req, res) => {
  try {
    const { lot } = req.params;
    const response = await reports.findAll({
      where: {
        [Op.and]: [{ supplier_name: "OC2" }, { global_variable_1: lot }],
      },
    });
    // const emp = await connectEmploye.query('SELECT * FROM `aio_employee`.`mst_employment` LIMIT 20) ', { type: QueryTypes.SELECT });

    res.status(200).json(response);
  } catch (e) {
    return res.status(500).json({ error: e.message });
  }
};
exports.groupPassboxOc2 = async (req, res) => {
  try {
    const response = await reports.findAll({
      attributes: [
        "created_at",
        "line_name",
        "global_variable_1",
        "product_name",
        [Sequelize.fn("COUNT", Sequelize.col("*")), "count_bag"],
      ],
      where: { supplier_name: "OC2" },
      group: "global_variable_1",
    });

    res.status(200).json(response);

    // });
  } catch (e) {
    return res.status(500).json({ error: e.message });
  }
};
exports.passboxOc1 = async (req, res) => {
  try {
    const response = await reports.findAll({
      where: { supplier_name: "OC1" },
    });

    res.status(200).json(response);

    // });
  } catch (e) {
    return res.status(500).json({ error: e.message });
  }
};
exports.tps = async (req, res) => {
  try {
    const response = await reports.findAll({
      where: { supplier_name: { [Op.not]: ["OC2", "OC1"] } },
    });

    res.status(200).json(response);

    // });
  } catch (e) {
    return res.status(500).json({ error: e.message });
  }
};
