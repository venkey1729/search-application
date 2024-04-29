// backend/models/user.js
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: String,
  age: Number,
  gender: String,
  occupation: String,
  city: String,
  email: String,
  phone: String
});

module.exports = mongoose.model('User', userSchema);
