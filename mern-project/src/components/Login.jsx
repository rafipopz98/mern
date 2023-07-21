import React from 'react'
import { useState } from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios'

const Login = () => {

  const [email,setEmail]=useState()
  const [passowrd,setPassword]=useState()

  const  submit=async(e)=>{
    e.preventDefault();

    try{

      await axios.post("http://localhost:8000/login",{
        email,passowrd
      })

    }catch(e){
      console.log("the error is ",e)
    }
  }
  
  return (
    
    <div>
    <form action='POST'>
      email: <input type="email"  onChange={(e)=>{setEmail(e.target.value)}} placeholder='email'/>
      passowrd: <input type="password" onChange={(e)=>{setPassword(e.target.value)}} placeholder='email'/>
      <input type="submit" onClick={submit}/>
    </form>
    <Link to='/signup'>Register</Link>
      
    </div>
  )
}

export default Login