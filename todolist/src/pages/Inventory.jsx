
import { Link } from 'react-router-dom'
import React, { useEffect } from 'react'
import { useState } from 'react'
import Card from '../componant/Card'

import axios from 'axios';
// import { u,useState } from 'react';

const Inventory = () => {
    const [medicine,setMedicine] = useState([]);

    useEffect(()=>{
        axios.get(" http://127.0.0.1:5000/api/medicine/all").then((res)=>{
        //    console.log(res.data.data)
         setMedicine(res.data.data);
         console.log(res.data.data);
           
        
        })
    },[])



    

  return ( 
    <div className='container'>
    <div className='nav'>
    <Link to="/inventory"><button>Inventory</button></Link>
    <Link to="/pharmacydashprofile"><button>Profile</button></Link>
    <Link to=""><button>logout</button></Link>
    <Link to="/addnew"><button className='addbbtn'>Add New Drug</button></Link>
      
    </div>



    <div className='cardset'>

        {medicine.map((item)=>(
            <Card key={item.id} item={item}/>
            

        ))}
      

    </div>
   



  </div>
  )
}

export default Inventory