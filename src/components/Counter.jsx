import React from 'react';
import { useState } from 'react';

const Counter = () => {

    const [count,setCount] = useState(0);

    const increment = () => {
        setCount(count + 1);
    }

    const decrement = () => {
        setCount(count - 1);
    }

  return (
    <div><h1>Simple Counter</h1>
        <div>
            <button onClick={increment} >Increase</button>
            <span style={{margin:'10px 10px 10px 10px'}}>{count}</span>
            <button onClick={decrement} >Decrease</button>
        </div>
    </div>
  );
}

export default Counter