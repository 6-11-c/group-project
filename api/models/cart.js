<<<<<<< HEAD
const mongoose = require("mongoose");

const cartSchema = mongoose.Schema({
  items: Array,
  owner: String
});

module.exports = mongoose.model("Cart", cartSchema);
=======
const mongoose = require("mongoose");

const cartSchema = mongoose.Schema({
  items: Array,
  owner: String
});

module.exports = mongoose.model("Cart", cartSchema);
>>>>>>> f17907b253f4c2515d7742013541fd052cad68b2
