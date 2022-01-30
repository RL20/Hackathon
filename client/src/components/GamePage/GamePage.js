<<<<<<< HEAD
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
      const { data } = await axios.get(
        "http://localhost:9000/api/cards/random"
      );
      setCards(data[cardId]);
      setRightAnswer(data[cardId].origin)
      // setCardId(prev => prev + 1)
    } catch (e) {
      throw new Error;
      // console.log(e);
    }
  };

  useEffect(() => {
    getCards();
  }, []);
=======
import React from "react";
import Timer from "../Timer/Timer";

function GamePage() {
  const clickHandler = () => {
    console.log("click");
  };
>>>>>>> main

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
<<<<<<< HEAD
        <Buttons />
=======
        <div className="answersArea">
          <div className="answersRight">
            <button className="answerOne" onClick={clickHandler}>
              <h1>Answer 1</h1>
            </button>
            <button className="answerThree">
              <h1>Answer 3</h1>
            </button>
          </div>
          <div className="timer">
            <h1>
              <Timer />
            </h1>
          </div>
          <div className="answersLeft">
            <button className="answerTwo">
              <h1>Answer 2</h1>
            </button>
            <button className="answerFour">
              <h1>Answer 4</h1>
            </button>
          </div>
        </div>
>>>>>>> main
      </div>
    </div>
  );
}

export default GamePage;
