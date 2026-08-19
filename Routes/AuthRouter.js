const router = require("express").Router();
const { signup } = require("../Controllers/AuthController");

router.post("/login", (req, res) => {
  res.send("Login");
});

router.post("/signup", signup);

module.exports = router;
