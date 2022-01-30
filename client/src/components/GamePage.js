import React, { useState, useRef } from "react";
import {RouterDom, Route, Link} from "react-router-dom"

function GamePage() {

    const [timer, setTimer] = useState(15);

    const clickHandler = () => {
        for (let i = timer; i > 0; i--){
            setInterval(() => {setTimer(timer -1)}, 1000)
        }   
    }

    return (
        <div className="outline">
            <div className="appPage">
                <div className="image">
                    <button><h1>?</h1></button>
                </div>
                <div className="dishTitle">
                    <h1>Dish Title</h1>
                </div>
                <div className="answersArea">
                    <div className="answersRight">
                        <button className="answerOne" onClick={() => clickHandler}><h1>Answer 1</h1></button>
                        <button className="answerThree"><h1>Answer 3</h1></button>
                    </div>
                    <div className="timer" ><h1>{timer}</h1></div>
                    <div className="answersLeft">
                        <button className="answerTwo"><h1>Answer 2</h1></button>
                        <button className="answerFour"><h1>Answer 4</h1></button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default GamePage;