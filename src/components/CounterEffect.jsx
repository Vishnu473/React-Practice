import React, { useEffect, useState } from 'react'

const CounterEffect = () => {
  const [count,setCount] = useState(0)
  
  useEffect(() => {
    document.title = `Title changed ${count} times`;
    console.log(document.title);
  }, [count])
  

  return (
    <div>
        <h1>CounterEffect</h1>
        {count}
        <button onClick={() => setCount(count+1) }>Increment</button>
        <button onClick={() => setCount(count-1)}>Decrement</button>
    </div>
  )
}

export default CounterEffect