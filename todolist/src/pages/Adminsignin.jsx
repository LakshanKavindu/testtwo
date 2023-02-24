import React from 'react'
import './pasindi.css'

const Adminsignin = () => {
  return (
    <div class = "Sign in">
      <div class = "split right">
      <div class = "centered">
      <h1 ><center>Sign In</center></h1>

      <label for="email"><b>Email</b></label>
    <input type="text" placeholder="Enter Email" name="email" required/>

    <label for="psw"><b>Password</b></label>
    <input type="password" placeholder="Enter Password" name="psw" required/>

    <div class="clearfix">
    <button type="submit" class="signupbtn">Sign In</button>
     </div>
     </div>
     </div>
     <div class="split left">
   <div class="centered">
    <h2>Jane Flex</h2>
    <p>Some text.</p>
   </div>
   </div>
    </div>
    
  );
}

export default Adminsignin