import React, { useState, useRef } from "react";
import { RouterDom, Route, Link } from "react-router-dom";
import Timer from "./Timer";

function GamePage() {
  return (
    <div className="outline">
      <div className="appPage">
        <div className="image">
          <button>
            <h1>?</h1>
          </button>
        </div>
        <div className="dishTitle">
          <h1>Dish Title</h1>
        </div>
        <div className="answersArea">
          <div className="answersRight">
            <button className="answerOne" onClick={() => clickHandler}>
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
      </div>
    </div>
  );
}

export default GamePage;
