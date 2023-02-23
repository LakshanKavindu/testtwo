import React from 'react'

import { Link } from 'react-router-dom';
import Task from './Task';
import "./componants.css"

const Printtodo = ({todos,setTodos}) => {
  
  return (
    <div className='printtodo_container'>
        <div>
      {todos.map((task)=>(
        <Task key={task.id} username={task.username} todoname={task.todoname} id={task.id} todos={todos} setTodos={setTodos}/>

        
        
      ))}
      </div>

<div>
        <Link to="/add"><button className='addtodo'>Add a To Do</button></Link>
    </div>

    </div>
   
    
  )
}

export default Printtodo