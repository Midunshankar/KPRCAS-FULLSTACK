import React, { useState } from 'react'

const UseState = () => {
  const [count, setCount] = useState(0);
  const [value,setValue] =useState("");
  const handleDecrement = () => {
    setCount(count - 1);
    };
    const handleReset = () => {
    setCount(count + 1);
    };
    const handleIncrement = () => {
    setCount(count + 1);
    };
   ;
    return (
    <div>
        <div>UseState</div>
        {value}
        <input type="text" onChange={(e) =>setValue(e.target.value)}/>
        <h1>{ count}</h1>
        <button onClick={handleDecrement}>Decrement</button>
        <button onClick={handleReset}>Reset</button>
        <button onClick={handleIncrement}>Increment</button>
        </div>
    )
}
export default UseState