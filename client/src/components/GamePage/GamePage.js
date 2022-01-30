import React, { useState, useRef, useEffect } from "react";
import { RouterDom, Route, Link } from "react-router-dom";
import axios from "axios";
import Image from "../image/Image";
import Buttons from "../Buttons/Buttons";

function GamePage() {
  const [cards, setCards] = useState([]);
  const [cardId, setCardId] = useState(0);
  const [title, setTitle] = useState("");
  const [image, setImage] = useState([]);
  const [rightAnswer, setRightAnswer] = useState("");
  const [answers, setAnswers] = useState("");

  console.log("cards", cards);

  const getCards = async () => {
    try {
      const { data } = await axios.get("http://localhost:9000/api/cards/random");
      setCards(data[cardId]);
      setRightAnswer(data[cardId].origin);
      // setCardId(prev => prev + 1)
    } catch (e) {
      throw new Error();
      // console.log(e);
    }
  };

  useEffect(() => {
    getCards();
  }, []);

  return (
    <div className="outline">
      <div className="appPage">
        <div className="image">
          <Image data={cards} />
          <button>
            <h1>?</h1>
          </button>
        </div>
        <div className="dishTitle">
          <h1>Dish Title</h1>
        </div>
        <Buttons />
      </div>
    </div>
  );
}

export default GamePage;
