const db = require("./models/db");
const express = require("express");
const userController = require("./controllers/userscontroller");
var app = express();
app.use(express.json());
app.listen(5000, () => {
  console.log("server started:5000");
});
app.use("/users", userController);
