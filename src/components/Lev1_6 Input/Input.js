import React, { useState } from "react";

function Input() {
    const [showVorname, setVorname] = useState("");
    const [showNachname, setNachname] = useState("");
    const [showEMail, setEMail] = useState("");

    const changeText = (e) => {
        console.log(e.target.value);
        let value = e.target.value;
        switch (e.target.placeholder) {
            case "Vorname": setVorname(value);
                break;
            case "Nachname": setNachname(value);
                break;
            case "E-Mail": setEMail(value);
                break;
            default: ;
        }
    };
    return (
        <section>
            <div>
                <input onChange={changeText} placeholder="Vorname"></input>
                <input onChange={changeText} placeholder="Nachname"></input>
                <input onChange={changeText} placeholder="E-Mail"></input>
            </div>
            <div>
                <p>Vorname: {showVorname}</p>
                <p>Nachname: {showNachname}</p>
                <p>E-Mail: {showEMail}</p>
            </div>
        </section>
    );
}

export default Input; 