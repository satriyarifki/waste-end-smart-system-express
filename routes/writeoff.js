var express = require("express");

var router = express.Router();
const writeOffController = require("./../controllers/writeoff.controller");
multer = require("multer");

const PATH = "./public/uploads/writeoff";
let storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, PATH);
  },
  filename: (req, file, cb) => {
    cb(null, req.body.id );
  },
});
let upload = multer({
  storage: storage,
})
// File upload settings


router.get("/", writeOffController.index);
router.get("/picture/:id", writeOffController.getPicture);
router.post("/", writeOffController.store);
router.put("/",upload.single('picture'), writeOffController.update);
router.delete("/:id", writeOffController.delete);


module.exports = router;