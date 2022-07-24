const express = require("express");
const router = express.Router();
const User = require("../models/user");
const jwt = require("jsonwebtoken");

router.route("/login").post((req, res) => {
  const email = req.body.email;
  const password = req.body.password;
  User.find({ email: email, password: password }).then((foundUser) => {
    if (!foundUser.length) {
      res.json({ msg: "user not found" });
    } else {
      const user = foundUser[0];
      jwt.sign({ user }, "secretkey", (err, token) => {
        res.json({
          token,
        });
      });
    }
  });
});

module.exports = router;
