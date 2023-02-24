import React from 'react'
import { Link } from 'react-router-dom'
import './nipun.css'
import axios from 'axios'
import { useState } from 'react'
// import ModeEditIcon from '@mui/icons-material/ModeEdit';

const addnew = () => {
    const [drug_name,setDrug_name] = React.useState('');
    const [manufacture,setManufacture] = React.useState('');
    const [supplier,setSupplier] = React.useState('');
    const [ndc,setNdc] = React.useState('');
    const [quantity,setQuantity] = React.useState('');
    const [unit_price,setUnit_price] = React.useState('');
    const [expiration_date,setExpiration_date] = React.useState('');
    const [error,setError] = React.useState('');
  
  async function handlesubmit(e){
    e.preventDefault()
    const medicinedata={
        drug_name:drug_name,
        manufacture:manufacture,
        supplier:supplier,
        ndc:ndc,
        quantity:quantity,
        unit_price:unit_price,
        expiration_date:expiration_date,
        is_deleted:0
    }
    await axios.post("http://127.0.0.1:5000/api/medicine/fetch",medicinedata)
    .then(res=>{
        console.log([res.data.status]);
        // setMessage(res.data.status);
    }).catch(error=>{
        console.log(error.response.data.message);
        // setError(error.response.data.message);
        // call_error(error);

    })

  


}





  return (


     
    <div className='container'>
      
      <div className='nav'>
      <Link to="/inventory"><button>Inventory</button></Link>
      <Link to="/pharmacydashprofile"><button>Profile</button></Link>
      <Link to=""><button>logout</button></Link>
        
      </div>
      
      
        <div className='add_data'>
          <form>
          
          <div className='set1'>
          
            <input type="text" placeholder='Select Drug Name' value={drug_name} onChange={(e)=>setDrug_name(e.target.value)}/>
            <input type="text" placeholder='Manufacture' value={manufacture} onChange={(e)=>setManufacture(e.target.value)}/>
            <input type="text" placeholder='Supplier' value={supplier} /></div>
            <div className='set2'>
            <input type="text" placeholder='NDC(National Drug code)'/>
            <input type="number" placeholder='Quntity on Hand'/>
            <input type="number" placeholder='Unit Price'/></div>
            <div  className='set3'>
            <input type="text" placeholder='Expiration Date'></input></div>
            <button className='addbtn_in_addpage' onClick={handlesubmit}>Add Drug</button>
           
            
            
            </form>
          

        </div>
      
     

 


    </div>
  )
}

export default addnew