const express = require("express");
const router = new express.Router();
const { getCrads, get20CardsSet, addCards } = require("../controllers/cardControllers");

router.get("", getCrads);
router.post("", addCards);
router.get("/random", get20CardsSet);
// router.delete("/:id/", removeCard);

// patch
module.exports = router;
