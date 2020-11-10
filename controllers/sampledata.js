const express = require("express");
var router = express.Router();
const verify = require("./verifyToken");
router.post("/", verify, async (req, res) => {
  res.json({ data: "sample data", uid: req.user._id + "" });
});

module.exports = router;
