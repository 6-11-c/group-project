const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

const uri = process.env.PROD_MONGODB;

mongoose.connect(uri, { useNewUrlParser: true }).then(() => {
  console.log('Connected to mLab');
}, err => {
  console.log(`Error connecting to mLab: ${err}`)
});

module.exports = mongoose.connection;