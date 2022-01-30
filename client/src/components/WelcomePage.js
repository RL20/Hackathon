import React, { useState } from "react";
import { RouterDom, Route, Link, BrowserRouter } from "react-router-dom"

function GamePage() {

    return (
        <div className="outline">
            <div className="appPage">
                <div className="welcomePage">
                    <h1>!ברוכים הבאים למשחק מנות ותרבויות</h1>
                    <h2 className="gameRules">
                        במשחק זה יהיה עליכם לזהות את המספר הגבוה ביותר של מנות מתרבויות שונות. במהלך המשחק יוצגו בפניכם מספר תמונות של מנות מתרבויות שונות ותקבלו 15 שניות לבחור את התשובה הנכונה מתוך ארבע תשובות אפשריות, כאשר באפשרותכם לקבל רמז בנוגע למקור התרבותי של המנה
                    </h2>
                    <h2 className="gameRules">
                        תשובה נכונה תזכה אתכם ב-10 נקודות, תשובה נכונה לאחר שימוש ברמז יזכה אתכם ב-5 נקודות. תשובה לא נכונה לא תזכה אתכם בנקודות.
                    </h2>
                    <button className="startButton"><h2>!לתחילת משחק לחצו כאן</h2></button>
                </div>
            </div>
        </div >
    )
}

export default GamePage;