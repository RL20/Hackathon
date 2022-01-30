const scraper = require("../scraper/scraper.js");
const Card = require("../models/card.js");

const replaceCollection = async () => {
  // replace old collection with new collection.
  try {
    await Card.collection.drop();
    const scrapedData = await scraper();
    const inserted = await Card.insertMany(scrapedData);
    console.log("inserted", inserted.length);
  } catch (err) {
    console.log(err);
  }
};

module.exports = replaceCollection;
