const mongoose = require("mongoose");
var usersSchema = new mongoose.Schema({
  password: { type: String },
  fname: { type: String },
  lname: { type: String },
  email: { type: String },
});

module.exports = mongoose.model("Users", usersSchema);
