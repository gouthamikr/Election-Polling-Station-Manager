const express = require("express");
const router = express.Router();
const { getData, cityData } = require("../Controllers/dataController");

router.get("/data", getData);

router.get("/data/Id", cityData);

module.exports = router;
