const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

const uri = "mongodb://josh:abc123@ds261440.mlab.com:61440/swd109j";

mongoose.connect(uri, { useNewUrlParser: true }).then(() => {
  console.log('Connected to mLab');
}, err => {
  console.log(`Error connecting to mLab: ${err}`)
});

module.exports = mongoose.connection;