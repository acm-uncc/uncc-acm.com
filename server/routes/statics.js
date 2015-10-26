var express = require("express");
var path = require("path");

var router = express.Router();

// serve public/ at /
router.use("/", express.static(path.join(__dirname, "../../public/")));

// serve build/ at /assets/
router.use("/assets/", express.static(path.join(__dirname, "../../build/")));

// serve assets/ at /assets/
router.use("/assets/", express.static(path.join(__dirname, "../../assets/")));

module.exports = router;
