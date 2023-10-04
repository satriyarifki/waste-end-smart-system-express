var express = require("express");
var router = express.Router();
const salesController = require("./../controllers/sales.controller");

router.get("/view", salesController.index_view);
router.get("/view/:id", salesController.sales_view_by_id);
router.get("/price-view", salesController.index_price_view);
router.get("/big-five", salesController.big_five_sales_ytd);
router.get("/category/:from/:to", salesController.sales_category_between_date);
router.get("", salesController.index);
router.post("", salesController.store);
router.get("/byid/:id", salesController.sales_by_id);
router.get("/yearly", salesController.sales_yearly);
router.get("/monthly", salesController.sales_monthly);

module.exports = router;
