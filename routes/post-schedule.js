const express = require("express");
const router = express.Router();
const Schedule = require("../models/schedule");
const Demo = require("../models/demo");

const jwt = require("jsonwebtoken");

router.route("/post-schedule").post((req, res) => {
  jwt.verify(req.token, "secretkey", (err, authData) => {
    if (err) {
      console.log("failed");
      res.sendStatus(403);
    } else {
      console.log("authdata", authData);
      const schedule = req.body.schedule;
      const days = req.body.days;
      const groups = req.body.groups;
      const scheduleName = req.body.scheduleName;
      const activities = req.body.activities;
      const email = authData.user.email;
      if (email === "demo@gmail.com") {
        const newDemo = new Demo({
          schedule,
          days,
          groups,
          activities,
          email,
          scheduleName,
        });
        newDemo.save();
      } else {
        const newSchedule = new Schedule({
          schedule,
          days,
          groups,
          activities,
          email,
          scheduleName,
        });
        newSchedule.save();
      }

      res.json({ msg: "Schedule created" });
    }
  });
});

module.exports = router;
