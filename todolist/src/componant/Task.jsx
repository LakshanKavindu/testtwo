import React from 'react'
import DeleteIcon from '@mui/icons-material/Delete';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';

function Task({id,username,todoname}) {
  return (
    <div >
          <p>{username} :
                    
                {todoname}  

                </p>
                <div><DeleteIcon/></div>
                <CheckCircleOutlineIcon/>

                    
          
        </div>
  )
}

export default Task