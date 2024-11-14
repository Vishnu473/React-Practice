import React from 'react'

const Person = (props) => {
  return (
    <div><h1>Person</h1>
    <h2>{props.name}</h2>
    <p>{props.age}</p>
    </div>
  )
}

export default Person