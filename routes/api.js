var express = require("express");
var router = express.Router();
const reportController = require("./../controllers/reports.controller");

/* GET users listing. */
// REPORTS
router.get("/reports", reportController.index);
// Passbox
router.get("/reports/passbox-oc2", reportController.passboxOc2);
router.get("/reports/passbox-oc1", reportController.passboxOc1);
router.get("/reports/passbox-oc2/:line/:lot", reportController.passboxByLot);
router.get("/reports/group/passbox-oc2", reportController.groupPassbox);
// TPS
router.get("/reports/tps", reportController.tps);
router.get("/reports/tps/:line/:lot", reportController.tpsByLotLine);
//Approval
router.post("/reports/approved", reportController.updateToApproved);

module.exports = router;
