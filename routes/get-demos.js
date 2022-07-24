const express = require("express");
const router = express.Router();
const Demo = require("../models/demo");
const jwt = require("jsonwebtoken");

router.route("/get-demos").get((req, res) => {
  jwt.verify(req.token, "secretkey", (err, authData) => {
    if (err) {
      res.sendStatus(403);
    } else {
      const email = "demo@gmail.com";
      Demo.find({ email: email })
        .sort({ date: 1 })
        .then((foundSchedules) => res.json(foundSchedules));
    }
  });
});

module.exports = router;
