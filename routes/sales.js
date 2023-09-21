var express = require("express");
var router = express.Router();
const salesController = require("./../controllers/sales.controller");

router.get("", salesController.index);
router.get("/:id", salesController.sales_by_id);

module.exports = router;