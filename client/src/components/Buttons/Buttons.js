import React, { useEffect, useState } from "react";
import Timer from "../Timer/Timer";

function shuffle(array) {
  return array.sort(() => Math.random() - 0.5);
}

const randomAnswers = [
  "ישראלי",
  "איטלקי",
  "דרוזי",
  "תימני",
  "אמריקאי",
  "עיראקי",
  "יווני",
  "רוסי",
  "טורקי",
  "אפריקאי",
  "בוכרי",
  "ארגנטינאי",
  "אסייאתי",
  "הונגרי",
  "ערבי",
  "תאילנדי",
  "רומני",
  "מרוקאי",
];

const Buttons = ({ correctAnswer, answerClickHandler }) => {
  const [answers, setAnswers] = useState([]);

  useEffect(() => {
    const randomizeAnswers = () => {
      let wrongAnswers = randomAnswers.filter((answer) => answer !== correctAnswer);
      wrongAnswers = shuffle(wrongAnswers);
      let shuffledAnswers = [
        { answer: wrongAnswers[0], correct: false },
        { answer: wrongAnswers[1], correct: false },
        { answer: wrongAnswers[2], correct: false },
        { answer: correctAnswer, correct: true },
      ];
      shuffledAnswers = shuffle(shuffledAnswers);
      setAnswers(shuffledAnswers);
    };
    randomizeAnswers();
  }, [correctAnswer]);

  const clickHandler = (answer) => {
    answerClickHandler(answer);
  };

  return (
    <>
      {answers && (
        <div className="answersArea">
          <div className="answersRight">
            <button className="answerOne" onClick={() => clickHandler(answers[0])}>
              <h1>{answers[0]?.answer}</h1>
            </button>
            <button className="answerThree" onClick={() => clickHandler(answers[1])}>
              <h1>{answers[1]?.answer}</h1>
            </button>
          </div>
          {/* <div className="timer">
              <h1>
                <Timer />
              </h1>
            </div> */}
          <div className="answersLeft">
            <button className="answerTwo" onClick={() => clickHandler(answers[2])}>
              <h1>{answers[2]?.answer}</h1>
            </button>
            <button className="answerFour" onClick={() => clickHandler(answers[3])}>
              <h1>{answers[3]?.answer}</h1>
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Buttons;
