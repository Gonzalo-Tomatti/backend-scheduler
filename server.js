const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");
dotenv.config();

app.use(cors());
app.use(express.json());

mongoose.connect(process.env.CONNECTION);

app.use("/", require("./routes/login"));
app.use("/", require("./routes/signup.js"));

app.use(function verifyToken(req, res, next) {
  // Get auth header value
  const bearerHeader = req.headers["authorization"];
  // Check if bearer is undefined
  if (typeof bearerHeader !== "undefined") {
    // Split at the space (since it's Bearer <access_token>)
    const bearer = bearerHeader.split(" ");
    // Get token from array
    const bearerToken = bearer[1];
    // Set the token
    // console.log("bear", bearer[0]);
    req.token = bearerToken;
    // Next middleware
    next();
  } else {
    // Forbidden
    res.sendStatus(403);
  }
});

app.use("/", require("./routes/delete-schedule.js"));
app.use("/", require("./routes/edit-schedule-name.js"));
app.use("/", require("./routes/post-schedule.js"));
app.use("/", require("./routes/get-schedules.js"));
app.use("/", require("./routes/get-demos.js"));

app.listen(process.env.PORT || 5000, () => {
  console.log("Server listening on port 5000");
});
