import React from 'react'

const Printtodo = ({todos}) => {
  return (
    <div>
      {todos.map((task)=>(
        <div>
          <p>{task.name}</p>
          <p>{task.todo}</p>
        </div>
        
      ))}
    </div>
   
    
  )
}

export default Printtodo