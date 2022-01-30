const Card = require("../models/card");

//get all cards
const getCards = async (req, res) => {
  try {
    const cards = await Card.find({});
    res.status(200).send(cards);
  } catch (error) {
    res.status(500).send({ error: " Internal Server Error" });
  }
};

const get20CardsSet = async (req, res) => {
  try {
    const cards = await Card.find({});
    const mixed = shuffle(cards);
    const cardsSet = mixed.slice(0, 20);
    res.status(200).send(cardsSet);
  } catch (error) {
    console.log(error);
    res.status(500).send({ message: " Internal Server Error", error });
  }
};
//add cards
const addCards = async (req, res) => {
  const cardsList = req.body;
  console.log("cardsList", req.body);
  try {
    Card.insertMany([...cardsList]);

    res.status(201).send();
  } catch (error) {
    res.status(400).send({ message: error });
  }
};

//add card
const addCard = async (req, res) => {
  const card = await new Card(req.body);
  try {
    await card.save();
    res.status(201).send(user);
  } catch (error) {
    res.status(400).send({ message: error });
  }
};

//Remove card
const removeCard = async (req, res) => {
  const id = req.params.id;
  try {
    const card = await Card.findOneAndDelete({ _id: id });
    if (!card) {
      return res.status(404).send({ error: `Crad ${req.params.id}  not found` });
    }
    res.status(200).send(user);
  } catch (error) {
    res.status(400).send({ message: "Bad Request" });
  }
};
//! helper functions-------------------------------------------------------------------------------------
function shuffle(array) {
  return array.sort(() => Math.random() - 0.5);
}

module.exports = {
  getCards,
  get20CardsSet,
  addCard,
  addCards,
  removeCard,
};
