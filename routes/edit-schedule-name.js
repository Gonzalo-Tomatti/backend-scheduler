const express = require("express");
const router = express.Router();
const Schedule = require("../models/schedule");
const jwt = require("jsonwebtoken");

router.route("/edit-schedule-name/:id").patch((req, res) => {
  jwt.verify(req.token, "secretkey", (err, authData) => {
    if (err) {
      console.log("failed");
      res.sendStatus(403);
    } else {
      const scheduleName = req.body.newName;
      const updatedSchedule = { scheduleName };

      Schedule.findByIdAndUpdate(
        { _id: req.params.id },
        { $set: updatedSchedule },
        (req, res, err) => {
          if (!err) {
            console.log("Item updated");
          } else {
            console.log(err);
          }
        }
      );
      res.json({ msg: "Item updated" });
    }
  });
});

module.exports = router;
