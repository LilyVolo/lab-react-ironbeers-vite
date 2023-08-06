import React, { useState } from 'react';


function Counter() {
    const counter = 0;
    const [count, setCount] = useState(0);

function handleClick () {
    setCount(count + 1);
}

function handleClickDown (){
    setCount(count - 1)
}

    return (
        <>
          <h1 className="counter"> </h1>
        <button className="increment" onClick={handleClick}> increment </button>
        <button className="decrement" onClick={handleClickDown}> decrement</button>
        </>
      
    )
}