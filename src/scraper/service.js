const Card = require("../models/card.js");
const data = require("../db/data.js");
// timer function - runs replace collection every 24 hours.

const replaceCollection = async () => {
  // replace old collection with new collection.
  try {
    const inserted = await Card.insertMany(data);
    console.log(inserted);
  } catch (err) {
    console.log(err);
  }
};

module.exports = replaceCollection;
