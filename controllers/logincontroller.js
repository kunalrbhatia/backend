const express = require("express");
const Users = require("../models/iconnect.model");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
var router = express.Router();
router.post("/", async (req, res) => {
  const user = await Users.findOne({ email: req.body.email });
  if (!user) res.status(400).send("Email or password are incorrect");
  const validPass = await bcrypt.compare(req.body.password, user.password);
  if (!validPass) res.status(400).send("Email or password are incorrect");
  const token = jwt.sign({ _id: user.email }, "kunalbhatia");
  res.header("auth-token", token).json(token);
});
module.exports = router;
