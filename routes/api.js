var express = require("express");
var router = express.Router();
const reportController = require("./../controllers/reports.controller");
const vendorController = require("./../controllers/vendor.controller");
const priceController = require("./../controllers/prices.controller");
const productController = require("./../controllers/products.controller");
const supplierController = require("./../controllers/suppliers.controller");
const lineController = require("./../controllers/lines.controller");
const customerController = require("./../controllers/customers.controller");

/* GET users listing. */
// REPORTS
router.get("/reports", reportController.index);
// Passbox
router.get("/reports/passbox-oc2", reportController.passboxOc2);
router.get("/reports/passbox-oc1", reportController.passboxOc1);
router.get("/reports/passbox-oc2/:line/:lot", reportController.passboxByLot);
router.get("/reports/passbox/:app", reportController.passboxByApp);
router.get("/reports/group/passbox-oc2", reportController.groupPassbox);
// TPS
router.get("/reports/tps", reportController.tps);
router.get("/reports/tps/sales", reportController.tpsOnSales);
router.get("/reports/tps/sales/:date", reportController.tpsSalesByDate);
router.get("/reports/tps/sales-group/:date", reportController.tpsSalesGroupByProduct);
router.get("/reports/tps/sales-group", reportController.tpsSalesGroupByDate);
router.get("/reports/tps/:line/:lot", reportController.tpsByLotLine);
router.put("/reports", reportController.update);
//Approval
router.post("/reports/approved", reportController.updateToApproved);
//Vendor
router.get("/vendor", vendorController.index);
//Vendor
router.get("/price", priceController.index);
//Product
router.get("/products", productController.index);
//Supplier
router.get("/suppliers", supplierController.index);
//Customer
router.get("/customers", customerController.index);
//Line
router.get("/lines", lineController.index);

module.exports = router;
