const mongoose = require('mongoose');

const ReviewSchema = mongoose.Schema({
  _id: { type: Number },
  title: String,
  description: String
});

mongoose.model('Review', ReviewSchema);