import React from 'react'
import './pasindi.css'

const Adminsignin = () => {
  return (
    <div class = "Sign in">
      <div class = "split right">
      <div class = "centered">
      <h1 ><center>Sign In</center></h1>

      <label for="email"><b>Email</b></label> <br></br>
    <input type="text" placeholder="Enter Email" name="email" required/>
    <br></br>
    <label for="psw"><b>Password</b></label> <br></br>
    <input type="password" placeholder="Enter Password" name="psw" required/> <br></br>

    <div class="clearfix">
    <button type="submit" class="signupbtn">Sign In</button>
     </div>
     </div>
     </div>
     <div class="split left">
   <div class="centered">
    <h2>Suva Center</h2>
   </div>
   </div>
    </div>
    
  );
}

export default Adminsignin