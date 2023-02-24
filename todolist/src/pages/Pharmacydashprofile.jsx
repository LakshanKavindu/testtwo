import React from 'react'
import { Link } from 'react-router-dom'

const Pharmacydashprofile = () => {
  return (
    <div className='container'>
      <div className='nav'>
      <Link to="/inventory"><button>Inventory</button></Link>
      <Link to="/pharmacydashprofile"><button>Profile</button></Link>
      <Link to=""><button>logout</button></Link>
        
      </div>
      <div className='pharmacy_infomation'>
        <h1>Pharmacy Information</h1>
        <form>
          <div className='div1'>
            <input type="text" placeholder='Pharmacys name'></input>
            <input type="text" placeholder='address'></input>
          </div>

          <div className='div2'>
            <input type="text" placeholder='phone number'></input>
            <input type="text" placeholder='email'></input>
          </div>
          
          <div className='div3'>
            <input type="text" placeholder='website'></input>
            <input type="text" placeholder='Opening Hours'></input>
          </div>
          
          <div className='div4'>
            <input type="text" placeholder='Pharmacy license'></input>
            
          </div>
          
          
        </form>


      </div>
      <div className='owner_infomation'>
        <h1>Owner Information</h1>
        <form>
        <div>
          <input type="text" placeholder='Name'></input>
          <input type="text" placeholder='Address'></input>
        </div>
        <div>
          <input type="text" placeholder='Owner Phone Number'></input>
          <input type="text" placeholder='Owner Email'></input>
        </div>
        <div>
          <input type="text" placeholder='NIC'></input>

          <div ><button className='save_btn_pharmacy_profile'>Save</button></div>
          
        </div></form>

      </div>

    </div>
  )
}

export default Pharmacydashprofile