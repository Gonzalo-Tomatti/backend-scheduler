const { Schema, model } = require("mongoose");

const userSchema = new Schema(
  {
    username: String,
    email: String,
    password: String,
  },
  { collection: "users" }
);

const User = model("Users", userSchema);

module.exports = User;
