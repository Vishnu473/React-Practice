import React, { useReducer, useState } from 'react'
import { countReducer, initialState } from './countReducer'


const CounterReducer = () => {
    const [state, dispatch] = useReducer(countReducer, initialState)
    const [countVal, setCountVal] = useState(0)

    return (
        <div>
            <h1>CounterReducer</h1>
            <p>Counter:{state.count}</p>
            <input value={countVal} onChange={(e) => setCountVal(e.target.value)} />
            <div>
                <button onClick={() => { dispatch({ type: 'Increment', payload: countVal }); setCountVal(0) }}>Increment {countVal || 1}</button>
                <button onClick={() => { dispatch({ type: 'Decrement', payload: countVal }); setCountVal(0) }}>Decrement {countVal || 1}</button>
                <button onClick={() => { dispatch({ type: 'Reset', payload: 0 }); setCountVal(0) }}>Reset</button>
            </div>
        </div>
    )
}

export default CounterReducer