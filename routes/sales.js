var express = require("express");
var router = express.Router();
const salesController = require("./../controllers/sales.controller");

router.get("/view", salesController.index_view);
router.get("/view/:id", salesController.sales_view_by_id);
router.get("", salesController.index);
router.get("/:id", salesController.sales_by_id);

module.exports = router;