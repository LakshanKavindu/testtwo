import React from 'react'
import DeleteIcon from '@mui/icons-material/Delete';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import { Link } from 'react-router-dom';

const Printtodo = ({todos}) => {
    async function handledelete(id){
        console.log(id)
        



    }
  return (
    <div>
      {todos.map((task)=>(
        <div key={task.id}>
          <p>{task.username} :
                    
                {task.todoname}  

                </p>
                <div onClick={handledelete(task.id)}><DeleteIcon/></div>
                <CheckCircleOutlineIcon/>

                    
          
        </div>
        
      ))}

<div>
        <Link to="/add"><button>Add a To Do</button></Link>
    </div>

    </div>
   
    
  )
}

export default Printtodo