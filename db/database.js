<<<<<<< HEAD
const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

const uri = "mongodb://josh:abc123@ds261440.mlab.com:61440/swd109j";

mongoose.connect(uri, { useNewUrlParser: true }).then(() => {
  console.log('Connected to mLab');
}, err => {
  console.log(`Error connecting to mLab: ${err}`)
});

=======
const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

const uri = "mongodb://epicproduce:EpicProduce123@ds261440.mlab.com:61440/swd109j";

mongoose.connect(uri, { useNewUrlParser: true }).then(() => {
  console.log('Connected to mLab');
}, err => {
  console.log(`Error connecting to mLab: ${err}`)
});

>>>>>>> f17907b253f4c2515d7742013541fd052cad68b2
module.exports = mongoose.connection;