import React, { useState, useEffect } from "react";
import cardsAPI from "../../Api/api";
import Image from "../image/Image";
import Buttons from "../Buttons/Buttons";

function GamePage() {
  const [cards, setCards] = useState([]);
  const [currentCard, setCurrentCard] = useState({});

  const getCards = async () => {
    try {
      const { data } = await cardsAPI.get("/api/cards/random");
      setCards(data);
      setCurrentCard(data[0]);
    } catch (e) {
      console.log(e);
    }
  };

  const nextCurrentCard = () => {
    const index = cards.indexOf(currentCard);
    if (index >= cards.length) {
      console.log("game over");
      return;
    }
    setCurrentCard(cards[index++]);
  };

  useEffect(() => {
    getCards();
  }, []);

  return (
    <>
      {currentCard && (
        <div className="outline">
          <div className="appPage">
            <div className="image">
              <Image imageUrl={currentCard?.imageUrl} />
              <button>
                <h1>?</h1>
              </button>
            </div>
            <div className="dishTitle">
              <h1>{currentCard?.title}</h1>
            </div>
            <Buttons correctAnswer={currentCard?.origin} />
          </div>
        </div>
      )}
    </>
  );
}

export default GamePage;
