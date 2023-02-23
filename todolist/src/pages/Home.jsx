import React, { useEffect } from 'react'
import { useState } from 'react'
import DeleteIcon from '@mui/icons-material/Delete';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import Printtodo from '../componant/Printtodo';
import Navigate from '../componant/Navigate';
import axios from 'axios';




const Home = () => {
    const [todos,setTodos] = useState([
        
    ])
    
    
    useEffect(()=>{
        axios.get(" http://127.0.0.1:5000/api/todo/all").then((res)=>{
           console.log(res.data.data)
           setTodos(res.data.data)
           
        
        })
    },[])

    
  return (
    <div className='home_container'>
        <div className="title">
            <h1>MY TODO LIST</h1>
        </div>
        <div className="todo_container">
            <div className="todo">
                {todos.length==0?<Navigate/>:<Printtodo todos={todos}/>}
                
              


            </div>

        </div>
        

        
    </div>
  )
}

export default Home