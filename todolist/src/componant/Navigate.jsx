// import { Link } from '@mui/material'
import {Link} from 'react-router-dom'
import React from 'react'


const navigate = () => {
  return (
    <div>
        <Link to="/add"><button>Add a To Do</button></Link>
    </div>
  )
}

export default navigate