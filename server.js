const db = require("./models/db");
const express = require("express");
var cors = require("cors");
const userController = require("./controllers/userscontroller");
const loginController = require("./controllers/logincontroller");
const sampledataController = require("./controllers/sampledata");
const logoutcontoller = require("./controllers/logoutcontoller");
var app = express();
app.use(express.json());
app.use(cors());
app.listen(5000, () => {
  console.log("server started:5000");
});
app.use("/users", userController);
app.use("/login", loginController);
app.use("/post", sampledataController);
app.use("/logout", logoutcontoller);
