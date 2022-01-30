import React, { useState } from "react";



function GamePage() {

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
                        <button className="answerOne"><h1>Answer 1</h1></button>
                        <button className="answerThree"><h1>Answer 3</h1></button>
                    </div>
                    <div className="timer" >timer</div>
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