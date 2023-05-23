import React, { useState } from 'react'
import "../App.css"
import { SERVER_URL } from "../App";
import axios from "axios";

const Register = () => {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("");

    const handleClick = async (e) => {
        e.preventDefault();
        if(name ===""|| email ==="" || password ===""){
          return  alert("All fields are required")
        }
    
        try {
            const res = await axios.post(`${SERVER_URL}/api/users?page=2`, {
                name,
                password,
                email
            })
            console.log(res.data)

            // res.data && window.location.replace("/")

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
                <center className='heading'> Register</center>
                <h1 className='name-box'>Name :-  <input type='text' placeholder='Enter full name....' onChange={(e) => setName(e.target.value)} /> </h1>
                <h1 className='name-box'>Email :-  <input type='email' placeholder='Enter your Email...' onChange={(e) => setEmail(e.target.value)} /> </h1>
                <h1 className='name-box'>Password :-  <input type='password' placeholder='Enter Password' onChange={(e) => setPassword(e.target.value)} /> </h1>
                <button onClick={handleClick} >Submit</button>
            </div>

        </div>
    )
}

export default Register;