import React, {useRef} from 'react'

const FocusInput = () => {
    const inputElement = useRef(null)

    const handleFocus = () => {
        console.log(inputElement);
        if (inputElement.current) {
            inputElement.current.focus();
        }
    }
  return (
    <div>
        <h1>FocusInput</h1>
        <input type='text' ref={inputElement} />
        <button onClick={handleFocus} >Click to Focus</button>
    </div>
  )
}

export default FocusInput