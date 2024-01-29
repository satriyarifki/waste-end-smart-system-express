var express = require("express");

var router = express.Router();
const writeOffController = require("./../controllers/writeoff.controller");
// File upload settings


router.get("/", writeOffController.index);
router.post("/", writeOffController.store);
router.put("/", writeOffController.update);


module.exports = router;