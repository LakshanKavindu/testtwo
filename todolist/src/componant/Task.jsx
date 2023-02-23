import React from 'react'
import DeleteIcon from '@mui/icons-material/Delete';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import axios from 'axios';
import "./componants.css"
import { useState } from 'react';
import { useEffect } from 'react';



function Task({id,username,todoname,todos,setTodos,is_done}) {
    const [done,setDone] = useState(is_done)
    id = id.toString();


    // useEffect(()=>{
    //     axios.get(`http://127.0.0.1:5000/api/todo/${id}`).then(
    //         res=>(
    //             // console.log(res.data.data)
    //             setDone(res.data.data.is_done)
                
    //         )
    //     )

    // })
  
  async function handledelete(){
    await axios.delete(`http://127.0.0.1:5000/api/todo/${id}`)
    .then(res=>(
        console.log(res)
        
    ))

    window.location.reload();
    }

    async function handleDone(){
        await axios.post(`http://127.0.0.1:5000/api/todo/${id}`)
        .then(res=>(
            console.log(res)
        ))

        setDone(1)

    }


    
  return (
    
    <div className='details'>
          <div className='detail' > 
            <p className='username'>{username} </p>
            <p>{todoname}  </p>
            
           </div>
           <div className="icons">

                <div className='icon1'><DeleteIcon  onClick={handledelete}/></div>
                <div > <CheckCircleOutlineIcon onClick={handleDone} style={done ==0?{color:"white"}:{backgroundColor:"#00e676",color:"white"}} className='icon2'/></div>
           </div>

                    
          
    </div>
  )
}

export default Task