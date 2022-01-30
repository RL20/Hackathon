const mongoose = require("mongoose");
const validator = require("validator");
const bcrypt = require("bcryptjs");

//!upgrade to user schema to allowed autentication
const userSchema = new mongoose.Schema({
  userId: {
    type: String,
    required: true,
    unique: true,
  },
  name: {
    type: String,
    required: true,
    trim: true,
  },

  cash: {
    type: Number,
    required: true,
    default: 0,
    min: 0,
  },

  credit: {
    type: Number,
    required: true,
    default: 0,
    min: 0,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    lowercase: true,
    validate(value) {
      if (!validator.isEmail(value)) {
        throw new Error("Email is invalid");
      }
    },
  },
  password: {
    type: String,
    required: true,
    minlength: 7,
    trim: true,
    validate(value) {
      if (value.toLowerCase().includes("password")) {
        throw new Error('Password cannot contain "password"');
      }
    },
  },
});

const User = mongoose.model("User", userSchema);

module.exports = User;
