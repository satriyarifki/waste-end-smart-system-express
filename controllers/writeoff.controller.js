const { Sequelize, QueryTypes } = require("sequelize");
const {
  write_off
} = require("../models");
const Op = Sequelize.Op;
multer = require("multer");

const PATH = "./public/uploads";
let storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, PATH);
  },
  filename: (req, file, cb) => {
    cb(null, file.fieldname + "-" + Date.now());
  },
});
let upload = multer({
  storage: storage,
}).single('files');

exports.index = async (req, res) => {
    try {
      const response = await write_off.findAll();
  
      res.status(200).json(response);
  
      // });
    } catch (e) {
      return res.status(500).json({ error: e.message });
    }
  };
exports.store = async (req, res) => {
    try {
      const response = await write_off.create(req.body);
  
      res.status(200).json(response);
  
      // });
    } catch (e) {
      return res.status(500).json({ error: e.message });
    }
  };
exports.update = async (req, res) => {
    try {
      const body = req.body
      if(body.asset == undefined){
        console.log(body);
        console.log(body.picture);
        console.log(req.file);
        
      }
  
      res.status(200).json(body);
  
      // });
    } catch (e) {
      return res.status(500).json({ error: e.message });
    }
  };