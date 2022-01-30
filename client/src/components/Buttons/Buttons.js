import React, { useEffect, useState } from "react";
import Timer from "../Timer/Timer";

const randomAnswers = ["ישראלי", "איטלקי", "דרוזי", "תימני", "אמריקאי", "עיראקי"];

const Buttons = ({ correctAnswer }) => {
  const [answers, setAnswers] = useState([]);

  const randomizeAnswers = () => {
    const wrongAnswers = randomAnswers.filter((answer) => answer !== correctAnswer);
    //shuffle wrongs
    const shuffledAnswers = [
      { answer: wrongAnswers[0], correct: false },
      { answer: wrongAnswers[1], correct: false },
      { answer: wrongAnswers[2], correct: false },
      { answer: correctAnswer, correct: true },
    ];
    //shuffle again
    setAnswers(shuffledAnswers);
  };

  useEffect(() => {
    randomizeAnswers();
  }, [randomAnswers, correctAnswer]);

  const clickHandler = () => {};

  return (
    <>
      {answers && (
        <div>
          <div className="answersArea">
            <div className="answersRight">
              <button className="answerOne" onClick={() => clickHandler}>
                <h1>{answers[0]?.answer}</h1>
              </button>
              <button className="answerThree">
                <h1>{answers[1]?.answer}</h1>
              </button>
            </div>
            <div className="timer">
              <h1>
                <Timer />
              </h1>
            </div>
            <div className="answersLeft">
              <button className="answerTwo">
                <h1>{answers[2]?.answer}</h1>
              </button>
              <button className="answerFour">
                <h1>{answers[3]?.answer}</h1>
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Buttons;
