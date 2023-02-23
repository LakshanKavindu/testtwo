import React from 'react'
import { useState } from 'react'
import DeleteIcon from '@mui/icons-material/Delete';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import Printtodo from '../componant/Printtodo';
import Navigate from '../componant/Navigate';


const Home = () => {
    const [todos,setTodos] = useState([
        {
        'name':"kavindu",
        "todo":"do react",
        "done":false,
    },
    {
        'name':"nipun",
        "todo":"do react and",
        "done":false,
    },
    {
        'name':"pramudi",
        "todo":"do react and js",
        "done":false,
    },
    {
        'name':"pasindi",
        "todo":"do react and js and html",
        "done":false,
    }

])
  return (
    <div className='home_container'>
        <div className="title">
            <h1>MY TODO LIST</h1>
        </div>
        <div className="todo_container">
            <div className="todo">
                {todos==null?<Navigate/>:<Printtodo todos={todos}/>}
                
                <div className="operations">
                    <DeleteIcon/>
                    <CheckCircleOutlineIcon/>
                </div>
               


            </div>

        </div>
        

        
    </div>
  )
}

export default Home