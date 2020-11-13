const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
var usersSchema = new mongoose.Schema({
  password: { type: String },
  fname: { type: String },
  lname: { type: String },
  email: { type: String },
  token: { type: String },
});
usersSchema.pre("save", async function (next) {
  try {
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(this.password, salt);
    this.password = hashedPassword;
    next();
  } catch (e) {
    next(e);
  }
});
module.exports = mongoose.model("Users", usersSchema);
