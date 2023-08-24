const bcrypt = require("bcrypt");
var crypto = require("crypto-js");
const jwt = require('jsonwebtoken');
const { Sequelize, QueryTypes } = require("sequelize");
const { connectEmployee } = require("../config/connections");



exports.login = async (req, res) => {
  try {
    
    const { nik, password } = req.body;

    //find a user by their email
    const user = await connectEmployee.query(
      "SELECT * FROM `aio_employee`.`php_ms_login` WHERE `lg_nik` = $nik AND lg_aktif = '1' LIMIT 1",
      { bind: { nik: nik }, type: QueryTypes.SELECT }
    );
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
            return res.status(200).json({token: token, user: user});
    		// apiResponse.sucess(res, {access_token: token, user: user}, 200);
    	} else {
    		return res.status(401).json('Authentication Invalid');
    	}
    } else {
        return res.status(401).json('User Not Found');
    	// apiResponse.error(res, 'Authentication failed', 401);
    }
    // res.status(200).json(user);
  } catch (e) {
    return res.status(500).json({ error: e.message });
  }
};
