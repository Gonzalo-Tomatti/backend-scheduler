const express = require("express");
const router = express.Router();
const Schedule = require("../models/schedule");
const jwt = require("jsonwebtoken");

router.route("/get-schedules").get((req, res) => {
  jwt.verify(req.token, "secretkey", (err, authData) => {
    if (err) {
      res.sendStatus(403);
    } else {
      const email = authData.user.email;
      Schedule.find({ email: email })
        .sort({ date: 1 })
        .then((foundSchedules) => res.json(foundSchedules));
    }
  });
});

module.exports = router;
