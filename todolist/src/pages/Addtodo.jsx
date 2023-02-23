import React from 'react'
import "./pages.css"
import { useState } from 'react'
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useEffect } from 'react';

const Addtodo = () => {
    const [name,setName] = useState('');
    const [todo,setTodo] = useState('');
    const [error,setError] = useState('');
    const [message,setMessage] = useState('');

    function call_error(error){
      
            alert(error);
    
      

    }
   

    async function handlesubmit(e){
        e.preventDefault()
        const tododata={
            username:name,
            todoname:todo,
            is_deleted:0
        }
        await axios.post(" http://127.0.0.1:5000/api/todo/fetch",tododata)
        .then(res=>{
            console.log([res.data.status]);
            setMessage(res.data.status);
        }).catch(error=>{
            console.log(error.response.data.message);
            setError(error.response.data.message);
            call_error(error);

        })

        setName('');
        setTodo('');


    }


    

  return (
    <div className='container'>
        <div className="title">
            <h1>
                ADD To Do 
            </h1>
        </div>
        <form className='myform' onSubmit={handlesubmit}>
            <input type="text" placeholder='username' value={name} onChange={(e)=>setName(e.target.value)}/>
            <input type="text" placeholder='todoname' value={todo} onChange={(e)=>setTodo(e.target.value)}/>
            <input type="submit" className='mybtn'/>

        </form>
        <Link to="/"><button>See My Todos</button></Link>

      
    </div>
  )
}

export default Addtodo