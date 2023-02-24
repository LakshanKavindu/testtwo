import React from 'react'
import { Link } from 'react-router-dom'
import ModeEditIcon from '@mui/icons-material/ModeEdit';
import DeleteIcon from '@mui/icons-material/Delete';

const inventory = () => {
  return (
    <div className='container'>
    <div className='nav'>
    <Link to="/inventory"><button>Inventory</button></Link>
    <Link to="/pharmacydashprofile"><button>Profile</button></Link>
    <Link to=""><button>logout</button></Link>
    <Link to="/addnew"><button className='addbbtn'>Add New Drug</button></Link>
      
    </div>
    <div className='cardset'>
      <div className='card'>
        <div className='id'>ID :<p></p> </div>
        <div className='drugname'>Drug name :<p></p> </div>
        <div className='manufacture'>Manufacture : <p></p></div>
        <div className='supplier'>Supplier : <p></p></div>
        <div className='ndc'>NDC : </div>
        <div className='Expiration_date'>Expiration Date :<p></p> </div>
        <div className='quantity'>Quantity :<p></p></div>
        <div className='unit_price'>Unit Price : <p></p></div>
        <div className='action'>Action :<div><ModeEditIcon></ModeEditIcon><DeleteIcon></DeleteIcon></div> </div>


      </div>

    </div>
   



  </div>
  )
}

export default inventory