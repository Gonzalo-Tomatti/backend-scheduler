const express = require("express");
const router = express.Router();
const Schedule = require("../models/schedule");
const jwt = require("jsonwebtoken");

router.route("/delete-schedule/:id").delete((req, res) => {
  jwt.verify(req.token, "secretkey", (err, authData) => {
    if (err) {
      console.log("failed");
      res.sendStatus(403);
    } else {
      const id = req.params.id;
      Schedule.findByIdAndDelete({ _id: id }, (req, res, err) => {
        if (!err) {
          console.log("Item deleted");
        } else {
          console.log(err);
        }
      });
      res.json({ msg: "Item deleted" });
    }
  });
});

module.exports = router;
