import React from 'react'

const Person = (props) => {
  return (
    <div>
      <p> I'm a {props.name} and I am {props.age} years old! </p>
      <b>{props.children}</b>
    </div>   
    
  )
}

export default Person
