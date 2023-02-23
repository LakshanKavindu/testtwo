import React from 'react'
import DeleteIcon from '@mui/icons-material/Delete';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import axios from 'axios';
import "./componants.css"



function Task({id,username,todoname,todos,setTodos}) {
    id = id.toString();
  
  async function handledelete(){
    await axios.delete(`http://127.0.0.1:5000/api/todo/${id}`)
    .then(res=>(
        console.log(res)
        
    ))

    window.location.reload();

   


      
  

  }
  return (
    
    <div className='details'>
          <div className='detail' > {username} :  {todoname}  
                    
               

                </div>
                <div className='icon1'><DeleteIcon  onClick={handledelete}/></div>
               <div className='icon2'> <CheckCircleOutlineIcon/></div>

                    
          
        </div>
  )
}

export default Task