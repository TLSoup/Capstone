const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: false,
    lowercase: false
  },
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true
  },
  password: {
    type: String,
    required: true,
    unique: false,
    lowercase: false
  },
  userChest: {
    type: Number,
    required: true,
    unique: false,
  },
  userHip: {
    type: Number,
    required: false,
    unique: false,
  },
  userWaist: {
    type: Number,
    required: true,
    unique: false,
  },
  userInseam: {
    type: Number,
    required: false,
    unique: false,
  },
}, {
  timestamps: true,
});

module.exports = mongoose.model("User", userSchema)