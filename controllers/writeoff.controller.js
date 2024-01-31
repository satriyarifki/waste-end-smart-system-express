const { Sequelize, QueryTypes } = require("sequelize");
const fs = require('fs');
const {
  write_off
} = require("../models");
const Op = Sequelize.Op;


exports.index = async (req, res) => {
    try {
      const response = await write_off.findAll({order: [['year','DESC'], ['quartal','ASC']]});
  
      res.status(200).json(response);
  
      // });
    } catch (e) {
      return res.status(500).json({ error: e.message });
    }
  };
exports.getPicture = async (req, res) => {
    try {
      const {id} = req.params
      const path = __dirname.slice(0,49)+'public\\uploads\\writeoff\\'+ id
      // const fileContent = fs.readFileSync(path);
      // console.log(path);
      res.setHeader('Content-Type', 'image/jpeg');
    // res.setHeader('Content-Disposition', `inline; filename="${picture}"`);
      res.sendFile(path)
      // res.status(200).json(fileContent);
      // });
    } catch (e) {
      console.log(e.message);
      return res.status(500).json({ error: e.message });
    }
  };
exports.store = async (req, res) => {
    try {
      
      if (Array.isArray(req.body)) {
        for (const item of req.body) {
          // console.log(item);
          await write_off.create(item);
        }
        res.status(200).json('Store Success');
      } else {
        const response = await write_off.create(req.body);
        res.status(200).json(response);
        
      }
  
      
      // });
    } catch (e) {
      return res.status(500).json({ error: e.message });
    }
  };
exports.update = async (req, res) => {
    try {
      const body = req.body
      if(body.asset == undefined){
        if (req.file != undefined) {
          body.picture = req.file.path
          write_off.update(body, { fields: ['received','picture','note'], where: {id :body.id}})
        }else {
          write_off.update(body, { fields: ['received','note'], where: {id :body.id}})
        } 
      } else {
        write_off.update(body, { where: {id :body.id}})
      }
  
      res.status(200).json({message: 'Update Success!'});
  
      // });
    } catch (e) {
      return res.status(500).json({ error: e.message });
    }
  };