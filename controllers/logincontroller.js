const express = require("express");
const Users = require("../models/iconnect.model");
const jwt = require("jsonwebtoken");
var router = express.Router();

router.post("/", async (req, res) => {
  const user = await Users.findOne({ email: req.body.email });
  if (user) {
    if (user.password === req.body.password) {
      const token = jwt.sign({ _id: user._id }, "kunalbhatia");
      res.header("auth-token", token).json(token);
    } else {
      res.status(400).send("Email or password are incorrect");
    }
  } else {
    res.status(400).send("Email or password are incorrect");
  }
});

module.exports = router;
