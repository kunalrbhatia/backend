const jwt = require("jsonwebtoken");
module.exports = function (req, res, next) {
  const token = req.header("auth-token");
  if (!token) return res.status(400).send("Denied");
  try {
    const verified = jwt.verify(token, "kunalbhatia");
    req.user = verified;
    next();
  } catch (e) {
    //res.status(400).send("invalid token");
  }
};
