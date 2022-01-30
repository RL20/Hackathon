const mongoose = require("mongoose");
// const validator = require("validator");
// const bcrypt = require("bcryptjs");
// id,
// image,
// recipeUrl,
// title: "סלט בוראטה",
// origin:"איטלקי"
const userSchema = new mongoose.Schema({
  id: {
    type: String,
    required: true,
    unique: true,
  },
  image: {
    type: String,
    required: true,
  },
  recipeUrl: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  origin: {
    type: String,
    required: true,
  },
});

const Card = mongoose.model("Card", userSchema);

module.exports = Card;
