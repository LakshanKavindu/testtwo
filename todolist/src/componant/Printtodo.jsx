import React from 'react'

const Printtodo = (props) => {
  return (
    <div>{props.todos.map((task)=>{
        <p>{task.name}{task.todo}</p>


    })}</div>
    
  )
}

export default Printtodo