const mongoose = require('mongoose');
const autoIncrement = require('mongoose-auto-increment');

const ProductSchema = mongoose.Schema({
  _id: { type: Number },
  name: String,
  description: String,
  price: Number
});

ProductSchema.plugin(autoIncrement.plugin, 'Product');

mongoose.model('Product', ProductSchema);