import React, { useState, useEffect } from "react";
import cardsAPI from "../../Api/api";
import Image from "../image/Image";
import Buttons from "../Buttons/Buttons";

function GamePage() {
  const [cards, setCards] = useState([]);
  const [currentCard, setCurrentCard] = useState({});
  const [score, setScore] = useState(0);
  const [showHint, setShowHint] = useState(false);
  const [isGameOver, setIsGameOver] = useState(false);

  const getCards = async () => {
    try {
      const { data } = await cardsAPI.get("/api/cards/random");
      setCards(data);
      setCurrentCard(data[0]);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    getCards();
  }, []);

  const answerClickHandler = (answer) => {
    if (isGameOver) return;
    if (answer.correct) {
      const score = showHint ? 5 : 10;
      setScore((prev) => prev + score);
    } else {
      console.log("Wrong");
    }
    nextCurrentCard();
  };

  const nextCurrentCard = () => {
    let index = cards.indexOf(currentCard);
    if (index >= cards.length - 1) {
      setIsGameOver(true);
      console.log("game over");
      return;
    }
    setShowHint(false);
    setCurrentCard(cards[++index]);
  };

  return (
    <>
      {currentCard && (
        <div className="outline">
          <div className="appPage">
            <div className="score">{score}</div>
            <div className="image">
              <Image imageUrl={currentCard?.imageUrl} />
              <button onClick={() => setShowHint(true)}>
                <h1>?</h1>
              </button>
            </div>
            <div className="dishTitle">
              <h1>{showHint ? currentCard?.title : ""}</h1>
            </div>
            <Buttons correctAnswer={currentCard?.origin} answerClickHandler={answerClickHandler} />
          </div>
        </div>
      )}
    </>
  );
}

export default GamePage;
