import React, { useState } from 'react';

function Counter() {
    let [count, setCount] = useState(0);

    function increment() {
        setCount(count + 1);
    }
    return (
        <div className="Counter">
            <p className="count">Counter: {count}</p>
            <button onClick={increment} >+1</button>
            {/*Arrow Function im Onclick */}
            <button onClick={() => setCount(count - 1)} >-1</button>
            <button onClick={() => setCount(0)}>Reset</button>
        </div>
    );
};

export default Counter;