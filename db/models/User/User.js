const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const bcrypt = require('bcryptjs');
mongoose.promise = Promise;

const UserSchema = new Schema({
  username: {
    type: String,
    unique: true,
    required: false
  },
  password: {
    type: String,
    unique: false,
    required: false
  }
})

UserSchema.methods =  {
  checkPassword: (inputPassword) => {
    return bcrypt.compareSync(inputPassword, this.password)
  },
  hashPassword: plainTextPassword => {
    return bcrypt.hashSync(plainTextPassword, 10)
  }
}

UserSchema.pre('save', (next) => {
  if (!this.password) {
    console.log('db/models/User/User.js: No Password Provided')
    next()
  } else {
    console.log('db/models/User/User.js: hashPassword in pre-save');
    this.password = this.hashPassword(this.password)
    next()
  }
})

const User = mongoose.model('User', UserSchema);
module.exports = User;