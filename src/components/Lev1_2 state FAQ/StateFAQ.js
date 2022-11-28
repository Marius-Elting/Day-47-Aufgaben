import React, { useState } from 'react';


function StateFAQ() {
    const [showElem, setElem] = useState(false);
    let showSwitch = () => {
        showElem ? setElem(false) : setElem(true);
    };
    return (
        <div>
            <div><span>Why is React great?</span><button onClick={showSwitch}>+</button></div>

            {showElem ? <div><span>Fast Learning Curve</span></div> : null}
        </div>
    );
}

export default StateFAQ;

