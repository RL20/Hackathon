const mongoose = require("mongoose");
const keys = require("../../config/keys");

mongoose.connect(`mongodb+srv://Hackathon:${keys.CONNECT_PASS}@general.ezcy9.mongodb.net/cardsgame?retryWrites=true&w=majority`, {
  useNewUrlParser: true,
});
