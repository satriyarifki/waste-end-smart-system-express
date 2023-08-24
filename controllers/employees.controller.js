const bcrypt = require("bcrypt");
var crypto = require("crypto-js");
const jwt = require("jsonwebtoken");
const { Sequelize, QueryTypes } = require("sequelize");
const { connectEmployee } = require("../config/connections");

exports.employees = async (req, res) => {
  try {
    const emp = await connectEmployee.query(
      "SELECT * FROM `aio_employee`.`mst_employment` LIMIT 20 ",
      { logging: console.log, type: QueryTypes.SELECT }
    );
    // const emp = await connectEmploye.query('SELECT * FROM `aio_employee`.`mst_employment` LIMIT 20) ', { type: QueryTypes.SELECT });

    const response = { employee: emp };
    res.status(200).json(response);
  } catch (e) {
    return res.status(500).json({ error: e.message });
  }
};
exports.employeeByNik = async (req, res) => {
  try {
    const { nik } = req.params;
    const response = await connectEmployee.query(
      "SELECT * FROM mst_employment as e INNER JOIN mst_grade as g ON e.grade_id = g.id WHERE CAST(e.employee_code AS INT) = CAST($nik AS INT) LIMIT 1",
      { bind: {nik: nik}, type: QueryTypes.SELECT }
    );
    // const emp = await connectEmploye.query('SELECT * FROM `aio_employee`.`mst_employment` LIMIT 20) ', { type: QueryTypes.SELECT });

    res.status(200).json(response);
  } catch (e) {
    return res.status(500).json({ error: e.message });
  }
};
exports.employeeKejayan = async (req, res) => {
  try {
    const response = await connectEmployee.query(
      "SELECT * FROM mst_employment as e INNER JOIN mst_grade as g ON e.grade_id = g.id WHERE e.org_locn_work_code = 'WL004'",
      { type: QueryTypes.SELECT }
    );
    // const emp = await connectEmploye.query('SELECT * FROM `aio_employee`.`mst_employment` LIMIT 20) ', { type: QueryTypes.SELECT });

    res.status(200).json(response);
  } catch (e) {
    return res.status(500).json({ error: e.message });
  }
};
