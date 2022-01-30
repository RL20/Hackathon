import React from "react";
import Timer from "../Timer/Timer";

const Buttons = () => {
//     const []
//    const clickHandler = () => {

//    }
  return (
    <div>
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
  );
};

export default Buttons;
