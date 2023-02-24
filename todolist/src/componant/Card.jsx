import React from 'react'
import ModeEditIcon from '@mui/icons-material/ModeEdit';
import DeleteIcon from '@mui/icons-material/Delete';

const Card = ({item}) => {
  return (
    
    <div className='card'>
        <div className='id'><p>ID <div>{item.id}</div></p> </div>
        <div className='drugname'><p>Drug name <div>{item.drug_name}</div></p> </div>
        <div className='manufacture'> <p>Manufacture <div>{item.manufacture}</div></p></div>
        <div className='supplier'><p>Supplier <div>{item.supplier}</div> </p></div>
        <div className='ndc'> <p>NDC <div>{item.NDC}</div></p> </div>
        <div className='Expiration_date'><p>Expiration Date <div>{item.Expiration_date}</div></p> </div>
        <div className='quantity'><p>Quantity <div>{item.Quantity}</div></p></div>
        <div className='unit_price'><p>Unit Price <div>{item.Unit_price}</div></p></div>
        <div className='action'><div><ModeEditIcon></ModeEditIcon><DeleteIcon></DeleteIcon></div> </div>


      </div>

  )
}

export default Card