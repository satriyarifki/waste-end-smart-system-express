const bcrypt = require("bcrypt");
var crypto = require("crypto-js");
const jwt = require("jsonwebtoken");
const { Sequelize, QueryTypes } = require("sequelize");
const { connectEmployee } = require("../config/connections");
const { v_login_aio, v_login_user } = require("../models");

exports.login = async (req, res) => {
  try {
    const { nik, password } = req.body;

    //find a user by their email
    // const user = await connectEmployee.query(
    //   "(SELECT b.lg_nik, b.lg_password, b.lg_name, b.lg_email_aio, b.lg_aktif AS `status`, b.n_photo, b.lg_location FROM aio_employee.php_ms_login b WHERE b.lg_nik = $nik) UNION (SELECT b.lg_nik, b.lg_password, b.lg_name, NULL as lg_email_aio, b.lg_aktif AS `status`, NULL as n_photo, b.lg_location FROM aio_employee.php_ms_login_os b WHERE b.lg_nik = $nik ) LIMIT 1",
    //   { bind: { nik: nik }, type: QueryTypes.SELECT }
    // );
    const user = await v_login_user.findAll({attributes: {exclude: ['id']}, where:{lg_nik: nik}});
    // const c = { data: 0 };
    // if (hash == user[0].lg_password) {
    //   c.data = 2;
    // }

    //if user email is found, compare password with bcrypt
    if (user[0]) {
      let hash = crypto.MD5(password).toString();

      //if password is the same
      //generate token with the user's id and the secretKey in the env file

      if (user[0].lg_password == hash) {
        let token = jwt.sign({ id: user[0].lg_nik }, process.env.secretKey, {
          expiresIn: 1 * 24 * 60 * 60 * 1000,
        });

        // res.cookie('jwt', token, { maxAge: 1 * 24 * 60 * 60, httpOnly: true });
        return res.status(200).json({ token: token, user: user });
        // apiResponse.sucess(res, {access_token: token, user: user}, 200);
      } else {
        return res.status(401).json("Authentication Invalid");
      }
    } else {
      return res.status(401).json("User Not Found");
      // apiResponse.error(res, 'Authentication failed', 401);
    }
    // res.status(200).json(user);
  } catch (e) {
    return res.status(500).json({ error: e.message });
  }
};

exports.log = async (req, res) => {
  try {
    const response = await v_login_user.findAll({attributes: {exclude: ['id']}, where:{lg_nik: '18180'}});

    res.status(200).json(response);

    // });
  } catch (e) {
    return res.status(500).json({ error: e.message });
  }
};
