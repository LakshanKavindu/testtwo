import React from 'react'
import { Link } from 'react-router-dom';
import './pasindi.css'

const Signup = () => {
  return (
    <div class = "Signup">
        <h1>Sign Up</h1>
        <p>Please fill in this form to create an account.</p>

        <label for="email"><b>Pharmacy Name</b></label><br></br>
        <input type="text" placeholder="Enter Pharmacy Name" name="ph_name" required/><br></br>
        <label for="email"><b>Email</b></label><br></br>
        <input type="text" placeholder="Enter Email" name="email" required/><br></br>
        <label for="email"><b>Address</b></label><br></br>
        <input type="text" placeholder="Enter Address" name="address" required/><br></br>
        <label for="email"><b>Mobile</b></label><br></br>
        <input type="text" placeholder="Enter Mobile Number" name="m_no" required/><br></br>
        <label for="psw"><b>Password</b></label><br></br>
        <input type="password" placeholder="Enter Password" name="psw" required/><br></br>
        <label for="psw-repeat"><b>Confirm Password</b></label><br></br>
        <input type="password" placeholder="Confirm Password" name="psw-confirm" required/><br></br>

        <p>I agree to <Link to={"#"}>Terms of Services</Link> and <Link to={"#"}>Privacy Policy</Link>.</p>

        <div class="clearfix">
            <button type="submit" class="signupbtn">Sign Up</button>
        </div>
        
    </div>
  );
}

export default Signup