const { Schema, model } = require("mongoose");

const scheduleSchema = new Schema(
  {
    groups: Array,
    activities: Array,
    days: Array,
    schedule: Array,
    email: String,
    scheduleName: String,
  },
  { collection: "schedules" }
);

const Schedule = model("schedules", scheduleSchema);

module.exports = Schedule;
