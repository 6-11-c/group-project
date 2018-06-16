const mongoose = require("mongoose");
const autoIncrement = require("mongoose-auto-increment");
const crypto = require("crypto");

const UserSchema = mongoose.Schema({
  _id: { type: Number },
  username: {
    type: String,
    lowercase: true,
    unique: true,
    required: [true, "cannot be blank"],
    match: [/^[a-zA-Z0-9]+$/, "is valid"],
    index: true
  },
  email: {
    tyoe: String,
    lowercase: true,
    unique: true,
    required: [true, "cannot be blank"],
    match: [/\S+@\S+\.\S+/, "is invalid"],
    index: true
  }
});

mongoose.model('User', UserSchema);