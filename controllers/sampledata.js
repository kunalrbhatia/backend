const express = require("express");
var router = express.Router();
const verify = require("./verifyToken");
router.post("/", verify, async (req, res) => {
  console.log("ok here");
  res.json({ data: "sample data" });
});

module.exports = router;
