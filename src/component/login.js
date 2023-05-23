import React, { useState } from 'react'
import "../App.css"
import axios from "axios";
import { SERVER_URL } from "../App";

const Login = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("");

    const handleClick = async (e) => {
        e.preventDefault();
        if(email ==="" || password ===""){
          return  alert("All fields are required")
        }
        // console.log(password,email)
        try {
            const res = await axios.post(`${SERVER_URL}/api/users/2`, {
                password,
                email
            })
            // console.log(res.data)
            res.data && window.location.replace("/home")

        } catch (error) {
            console.log(error.message)
            console.log(error)
            //  console.log(error.response.data)
            // alert(error.response.data)
        }
    }

  return (
    <div className='main'>
    <div>
        <center className='heading'> Login</center>
        <h1 className='name-box'>Email :-  <input type='email' placeholder='Enter your Email...' onChange={(e) => setEmail(e.target.value)} /> </h1>
        <h1 className='name-box'>Password :-  <input type='password' placeholder='Enter Password' onChange={(e) => setPassword(e.target.value)} /> </h1>
        <button onClick={handleClick} >Submit</button>
    </div>

</div>
  )
}

export default Login;