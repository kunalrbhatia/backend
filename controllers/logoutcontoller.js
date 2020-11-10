const express = require("express");
const Users = require("../models/iconnect.model");
const jwt = require("jsonwebtoken");
var router = express.Router();

router.post("/", async (req, res) => {
  const user = await Users.findOne({ token: req.body.token });
  if (user) {
    user.token = "";
    await user.save();
    res.status(200).send("User Logged out");
  } else {
    res.status(400).send("Email or password are incorrect");
  }
});

module.exports = router;
