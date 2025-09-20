const jwt = require("jsonwebtoken");
const { JWT_SECRET } = require("../config");

function userMiddleware(req, res, next) {
  // Implement user auth logic
  // You need to check the headers and validate the user from the user DB. Check readme for the exact headers to be expected
  const token = req.headers.authorization;
  const words = token.split(" ");
  const jwtToken = words[1];
  try {
    const decodedValue = jwt.verify(jwtToken, JWT_SECRET);
    if (decodedValue.username) {
      //         When you set something on req (like req.username), it travels with the request into your route handler.
      // So inside any route that uses userMiddleware, you can directly access it.
      // ✅ You are attaching username to request
      req.username = decodedValue.username;
      req.randomData = "Adsadsadsadssd";
      next();
    } else {
      res.status(403).json({
        msg: "you are not authenticated",
      });
    }
  } catch (e) {
    res.json({
      msg: "Incorrect inputes",
    });
  }
}

module.exports = userMiddleware;
