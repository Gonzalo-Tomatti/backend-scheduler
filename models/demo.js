const { Schema, model } = require("mongoose");

const demoSchema = new Schema(
  {
    groups: Array,
    activities: Array,
    days: Array,
    schedule: Array,
    email: String,
    scheduleName: String,
  },
  { collection: "demos" }
);

const Demo = model("demos", demoSchema);

module.exports = Demo;
