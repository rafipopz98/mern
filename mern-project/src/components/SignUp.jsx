import React from 'react'
import { useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

const SignUp = () => {

  const [email,setEmail]=useState()
  const [passowrd,setPassword]=useState()

  const  submit=async(e)=>{
    e.preventDefault();

    try{

      await axios.post("http://localhost:8000/signup",{
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
    <Link to='/login'>Login</Link>
    </div>
  )
}

export default SignUp