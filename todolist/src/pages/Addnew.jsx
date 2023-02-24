import React from 'react'
import { Link } from 'react-router-dom'
import './nipun.css'
import axios from 'axios'
import { useState } from 'react'
// import ModeEditIcon from '@mui/icons-material/ModeEdit';

const Addnew = () => {
    const [drug_name,setDrug_name] = useState('');
    const [manufacture,setManufacture] = useState('');
    const [supplier,setSupplier] = useState('');
    const [ndc,setNdc] = useState('');
    const [quantity,setQuantity] = useState(0);
    const [unit_price,setUnit_price] = useState(0);
    const [expiration_date,setExpiration_date] = useState('');
    const [error,setError] = useState('');
  
  async function handlesubmit(e){
    e.preventDefault()
    const medicinedata={
        drug_name:drug_name,
        manufacture:manufacture,
        supplier:supplier,
        ndc:ndc,
        quantity:quantity,
        unit_price:unit_price,
        date:expiration_date,
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
          <form onSubmit={handlesubmit}>
          
          <div className='set1'>
          
            <input type="text" placeholder='Select Drug Name' value={drug_name} onChange={(e)=>setDrug_name(e.target.value)}/>
            <input type="text" placeholder='Manufacture' value={manufacture} onChange={(e)=>setManufacture(e.target.value)}/>
            <input type="text" placeholder='Supplier' value={supplier} onChange={(e)=>setSupplier(e.target.value)} />
            </div>
            <div className='set2'>
            <input type="text" placeholder='NDC(National Drug code)' value={ndc} onChange={(e)=>setNdc(e.target.value)}/>
            <input type="number" placeholder='Quntity on Hand' value={quantity} onChange={(e)=>setQuantity(e.target.value)}/>
            <input type="number" placeholder='Unit Price' value={unit_price} onChange={(e)=>setUnit_price(e.target.value)}/></div>
            <div  className='set3'>
            <input type="text" placeholder='Expiration Date' value={expiration_date} onChange={(e)=>setExpiration_date(e.target.value)} /></div>
            <button className='addbtn_in_addpage' type='submit'>Add Drug</button>
           <h1>delete</h1>
            
            
            </form>
          

        </div>
      
     

 


    </div>
  )
}

export default Addnew