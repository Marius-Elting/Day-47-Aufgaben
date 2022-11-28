import React, { useState } from "react";
import './DayNightSwitch.css';

function DayNightSwitch() {
    // let colorP = "black";
    const [showBackGroundColorDiv, setBackGroundColorDiv] = useState("aqua");
    const [showColorP, setColorP] = useState("black");
    const [showP, setP] = useState("Es ist Tag!");
    const [showButton, setButton] = useState("Wechsel zu Nacht");
    let switchTo = () => {
        if (showP === "Es ist Tag!") {
            setP("Es ist Nacht");
            setButton("Wechsel zu Tag");
            setColorP("white");
            setBackGroundColorDiv("midnightblue");
        } else {
            setP("Es ist Tag!");
            setButton("Wechsel zu Nacht");
            setColorP("black");
            setBackGroundColorDiv("aqua");
        }


    };

    return (
        <div style={{ backgroundColor: showBackGroundColorDiv }} className="DaySwitcher">
            <h1 style={{ color: showColorP }}>{showP}</h1>
            <button onClick={switchTo}>{showButton}</button>
        </div >
    );
}

export default DayNightSwitch;