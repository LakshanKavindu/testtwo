import React from 'react'

const Printtodo = (props) => {
  return (
    <div>{props.todos.map((task)=>{
        <p>{task.name}</p>


    })}</div>
  )
}

export default Printtodo