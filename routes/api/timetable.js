const express = require("express");
const router = express.Router();
const timetableController = require("../../controllers/timetableController");

router.route("/").get(timetableController.getCourseListForThisDay);

module.exports = router;
