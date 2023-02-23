// import { Link } from '@mui/material'
import {Link} from 'react-router-dom'
import React from 'react'
import "./componants.css"


const navigate = () => {
  return (
    <div className='navigate_container'>
        <Link to="/add"><button className='navaddbtn'>Add a To Do</button></Link>
    </div>
  )
}

export default navigate