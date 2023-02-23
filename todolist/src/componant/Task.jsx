import React from 'react'
import DeleteIcon from '@mui/icons-material/Delete';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import axios from 'axios';



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
    <div >
          <p>{username} :
                    
                {todoname}  

                </p>
                <div><DeleteIcon  onClick={handledelete}/></div>
                <CheckCircleOutlineIcon/>

                    
          
        </div>
  )
}

export default Task