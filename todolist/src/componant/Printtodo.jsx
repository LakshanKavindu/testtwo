import React from 'react'

import { Link } from 'react-router-dom';
import Task from './Task';

const Printtodo = ({todos,setTodos}) => {
  
  return (
    <div className='printtodo_container'>
      {todos.map((task)=>(
        <Task key={task.id} username={task.username} todoname={task.todoname} id={task.id} todos={todos} setTodos={setTodos}/>

        
        
      ))}

<div>
        <Link to="/add"><button>Add a To Do</button></Link>
    </div>

    </div>
   
    
  )
}

export default Printtodo