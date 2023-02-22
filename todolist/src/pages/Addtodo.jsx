import React from 'react'
import "./pages.css"
import { useState } from 'react'

const Addtodo = () => {
    const [name,setName] = useState('');
    const [todo,setTodo] = useState('');


    

  return (
    <div className='container'>
        <div className="title">
            <h1>
                ADD To Do
            </h1>
        </div>
        <form className='myform'>
            <input type="text" placeholder='username' value={name} onChange={(e)=>setName(e.target.value)}/>
            <input type="text" placeholder='todoname' value={todo} onChange={(e)=>setTodo(e.target.value)}/>
            <input type="submit" className='mybtn'/>

        </form>

      
    </div>
  )
}

export default Addtodo