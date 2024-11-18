import React, { useState,useEffect } from 'react'

const BasicEffect = () => {

    const [count,setCount] = useState(0);

    useEffect(() => {
      console.log('Count increased to ', count)
    }, [])
    
  return (
    <div>
        <h1>BasicEffect</h1>
        {count}
        <button onClick={() => setCount(count+1)}>Increment</button>
    </div>
  )
}

export default BasicEffect