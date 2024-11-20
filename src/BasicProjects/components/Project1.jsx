//Project-1 
//Basic Counter Project

import React from 'react'
import { useState } from 'react'
import "../styles/Project1.css"

const Project1 = () => {

    const [count,setCount] = useState(0)

    const increment = () => {setCount(count+1)}
    const decrement = () => {setCount(count-1)}

  return (
    <div className='main-center'>
        <h1 className='heading'>Project-1  Counter</h1>
        <div className='container'>
            <button onClick={increment} className='increment btns'>+</button>
            <p className='main-value'>{count}</p>
            <button onClick={decrement} className='decrement btns'>-</button>
        </div>
    </div>
  )
}

export default Project1