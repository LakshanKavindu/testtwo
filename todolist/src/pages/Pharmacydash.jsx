import React from 'react'
import { Link } from 'react-router-dom'


// update page

const Pharmacydash = () => {
  return (
    <div className='container'>
      
    <div className='nav'>
    <Link to="/inventory"><button>Inventory</button></Link>
    <Link to="/pharmacydashprofile"><button>Profile</button></Link>
    <Link to=""><button>logout</button></Link>
      
    </div>
    
    
      <div className='update_data'>
        <form>
        
        <div className='set1'>
        
          <input type="text" placeholder='Select Drug Name'/>
          <input type="text" placeholder='Manufacture'/>
          <input type="text" placeholder='Supplier'/></div>
          <div className='set2'>
          <input type="text" placeholder='NDC(National Drug code)'/>
          <input type="number" placeholder='Quntity on Hand'/>
          <input type="number" placeholder='Unit Price'/></div>
          <div  className='set3'>
          <input type="text" placeholder='Expiration Date'></input></div>
          <button className='update_in_updatepage'>update</button>
         
          
          
          </form>
        

      </div>
    
   




  </div>
    








  )
}

export default Pharmacydash