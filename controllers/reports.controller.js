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
exports.passboxByLot = async (req, res) => {
  try {
    const { line, lot } = req.params;
    const response = await reports.findAll({
      where: {
        [Op.and]: [{ supplier_name: line }, { global_variable_2: lot }],
      },
    });
    // const emp = await connectEmploye.query('SELECT * FROM `aio_employee`.`mst_employment` LIMIT 20) ', { type: QueryTypes.SELECT });

    res.status(200).json(response);
  } catch (e) {
    return res.status(500).json({ error: e.message });
  }
};
exports.groupPassbox = async (req, res) => {
  try {
    const response = await reports.findAll({
      attributes: [
        "created_at",
        "line_name",
        "global_variable_2",
        "product_name",
        [Sequelize.fn("COUNT", Sequelize.col("*")), "count_bag"],
        [
          Sequelize.literal(
            `CASE WHEN COUNT(*) = COUNT(approval) THEN MIN(approval) END`
          ),
          "approval",
        ],
      ],
      where: { supplier_name: "OC2", supplier_name: "OC1" },
      group: "global_variable_2",
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
exports.tpsByLotLine = async (req, res) => {
  try {
    const { lot, line } = req.params;
    const response = await reports.findAll({
      where: {
        supplier_name: { [Op.not]: ["OC2", "OC1"] },
        global_variable_1: lot,
        line_name: line,
      },
    });

    res.status(200).json(response);

    // });
  } catch (e) {
    return res.status(500).json({ error: e.message });
  }
};

exports.updateToApproved = async (req, res) => {
  try {
    const { lot } = req.params;
    console.log(req.body);
    const response = await reports.update(
      { approval: true },
      {
        where: {
          global_variable_2: req.body.lot,
        },
      }
    );
    console.log(response);

    res.status(200).json(response);

    // });
  } catch (e) {
    return res.status(500).json({ error: e.message });
  }
};
