const mongoose = require("mongoose");

const cartSchema = mongoose.Schema({
  items: Array,
  owner: String
});

module.exports = mongoose.model("Cart", cartSchema);
