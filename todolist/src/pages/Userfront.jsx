import React from 'react'
import './pramudi.css'

const Userfront = () => {
  return (
    <div>
      <header>
        <img src="C:\Users\ASUS\Desktop\images.png" alt='ljklj'/>
        <h3>Search</h3>
        <span>Show all pharmacies</span>
      </header>
      
      <form>
        <select name="medicine">
          <option value="All">All</option>
          <option value="Aitaminophen">Atminophen</option>
          <option value="Aderall">Aderall</option>
          <option value="Belsomra">Belsomra</option>
          <option value="Biotin">Biotin</option>
          <option value="Captopril">Captropil</option>
          <option value="Clobex">Clobex</option>
          
        </select>
        <input type="text" placeholder="Search your medicine here"/>
        <button>Search</button><br></br>
        
        <input type="text" value="A Colombo Pharmacy<br>Pharmacy<br>No93,97, People's Bank Shopping Complex<br>Open 8AM Close 8 PM<br>In-Store shopping"></input>

        
        
      </form>
    </div>
  )
}

export default Userfront