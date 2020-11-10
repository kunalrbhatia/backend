const express = require("express");
const Users = require("../models/iconnect.model");
var router = express.Router();
router.get("/", async (req, res) => {
  try {
    const im = await Users.find();
    res.json(im);
  } catch (e) {
    res.send(e);
  }
});
router.post("/", async (req, res) => {
  const users = new Users({
    email: req.body.email,
    password: req.body.password,
    fname: req.body.fname,
    lname: req.body.lname,
  });

  try {
    const u = await users.save();
    res.json(u);
  } catch (e) {
    res.send(e);
  }
});
router.delete("/:id", async (req, res) => {
  try {
    const u = await Users.findById(req.params.id);

    const r = await u.remove();
    res.json(r);
  } catch (e) {
    console.log(e);
  }
});
module.exports = router;
