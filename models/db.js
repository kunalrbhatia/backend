const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/iconnect_db", { useNewUrlParser: true }, (err) => {
  if (!err) {
    console.log("Connection Successful");
  } else {
    console.log("Error: " + err);
  }
});
const usersmodel = require("./iconnect.model");
const con = mongoose.connection;
con.on("open", () => {
  console.log("connected");
});
