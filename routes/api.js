var express = require("express");
var router = express.Router();
const reportController = require("./../controllers/reports.controller");

/* GET users listing. */
router.get("/reports", reportController.index);
router.get("/reports/passbox-oc2", reportController.passboxOc2);
router.get("/reports/passbox-oc2/:lot", reportController.passboxOc2ByLot);
router.get("/reports/group/passbox-oc2", reportController.groupPassboxOc2);
router.get("/reports/tps", reportController.tps);

module.exports = router;
