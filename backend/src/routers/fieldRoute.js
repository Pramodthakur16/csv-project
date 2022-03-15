const express = require("express");
const router = new express.Router();
const getController = require("../controller/getController");

router.route("/fielding")
.get(getController.getField);

module.exports = router;