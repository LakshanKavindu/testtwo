import React from 'react'
import { Link } from 'react-router-dom'
import './nipun.css'
// import ModeEditIcon from '@mui/icons-material/ModeEdit';

const addnew = () => {
  
  async function handlesubmit(e){
    e.preventDefault()
    const tododata={
        username:name,
        todoname:todo,
        is_deleted:0
    }
    await axios.post(" http://127.0.0.1:5000/api/todo/fetch",tododata)
    .then(res=>{
        console.log([res.data.status]);
        setMessage(res.data.status);
    }).catch(error=>{
        console.log(error.response.data.message);
        setError(error.response.data.message);
        call_error(error);

    })

    setName('');
    setTodo('');


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
          
            <input type="text" placeholder='Select Drug Name'/>
            <input type="text" placeholder='Manufacture'/>
            <input type="text" placeholder='Supplier'/></div>
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