const express = require("express");
const router = new express.Router();
const { getCards, get20CardsSet, addCards } = require("../controllers/cardControllers");

router.get("/", getCards);
router.post("/", addCards);
router.get("/random", get20CardsSet);

module.exports = router;
