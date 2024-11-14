import React from 'react'

const Greetings = ({timeOfDay}) => {
  
    if(timeOfDay === 'morning'){
        return <h1>Good MorningMorning🌅</h1>
    }
    else if(timeOfDay === 'afternoon'){
        return <h1>Good Afternoon🌄</h1>
    }
    else if(timeOfDay === 'evening'){
        return <h1>Good Evening🌆</h1>
    }
        return <h1>Good Night🌃</h1>
}

export default Greetings