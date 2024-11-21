import React, { useState,useReducer } from 'react'
import '../styles/Project4.css'
import { calculatorReducer } from './calculatorReducer'

const Project4 = () => {

    const [state, dispatch] = useReducer(calculatorReducer, { firstOperand: null, operator: null, display: '0' })
    const [val, setVal] = useState(0)

    const calcBtns = ['c', '+/-', '%', '/', '7', '8', '9', 'X', '4', '5', '6', '-', '1', '2', '3', '+', '0', '00', '.', '=']
    const splBtns = ['/', '+/-', 'X', '+', '-', '%']


    const handleBtnClick = (btn) => {
        if (splBtns.includes(btn)) {
            // setVal(btn)
            dispatch({ type: 'Operator', payload: btn });
        }
        else if (['1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '00', '.'].includes(btn)) {

            dispatch({ type: 'Number', payload: btn });
        }
        else if (btn === '=') {
            // setVal(btn)
            dispatch({ type: 'Eval' });
        }
        else {
            // setVal(0)
            dispatch({ type: 'Clear'});
        }
    }
    return (
        <div className='calc-body'>
            <h1>Calculator</h1>

            <div className='calc-main'>
                <div className='calc-display'>{state.display}</div>
                {
                    calcBtns.map((btn, index) => (
                        <button className={`calc-btn ${(index + 1) % 4 === 0 ? 'calc-special' : ''}`} key={btn} onClick={() => handleBtnClick(btn)}>{btn}</button>
                    ))
                }
            </div>

        </div>
    )
}

export default Project4