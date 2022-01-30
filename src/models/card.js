const mongoose = require("mongoose");
// const validator = require("validator");
// const bcrypt = require("bcryptjs");
// ("imageUrl");
// ("title");
// ("recipeUrl");
// ("recipeDescription");
// ("origin");
const userSchema = new mongoose.Schema({
  imageUrl: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  recipeUrl: {
    type: String,
    required: true,
  },
  recipeDescription: {
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
