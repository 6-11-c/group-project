const mongoose = require("mongoose");
const autoIncrement = require("mongoose-auto-increment");

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
  name: {
    type: String,
  },
  email: {
    tyoe: String,
    lowercase: true,
    unique: true,
    required: [true, "cannot be blank"],
    match: [/\S+@\S+\.\S+/, "is invalid"],
    index: true
  },
  hash: String,
  salt: String
});

UserSchema.plugin(autoIncrement.plugin, 'User');

mongoose.model('User', UserSchema);