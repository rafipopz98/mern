import React from "react";
// import {useHistory} from 'react-router-dom'
import { useState } from "react";

const SignUp = () => {
  // const history=useHistory()
  const [user, setUser] = useState({
    name: "",
    email : "",
    password: "",
    cpassword: "",
    phone: ""
  });
  let name,value;

  const inputHandler=(e)=>{
    name=e.target.name;
    value=e.target.value;
    setUser({
      ...user,[name]:value
    })
  }

  const submitt=async(e)=>{
    e.preventDefault();
    const {name,email,password,cpassword,phone}=user;

    const res=await fetch('/register',{
      method:"POST",
      headers:{
        "Content-Type":"application/json"
      },
      body:JSON.stringify({
        name,email,password,cpassword,phone
      })
    })

    const data=res.json()
    if(data.status===422||!data){
      window.alert("errrorrrr")
    }else{
      window.alert("sucesss")
    }
    // history.push('/login')
  }
  return (
    <div>
      <form action="POST">
        name <input required type="text"  name="name" value={user.name}  onChange={inputHandler}/>
        email
        <input required type="email" name="email" value={user.email}  onChange={inputHandler}/>
        password
        <input required type="password" name="password" value={user.password}  onChange={inputHandler}/>
        cpassword
        <input required type="password" name="cpassword" value={user.cpassword}  onChange={inputHandler}/>
        phonek
        <input type="number" name="phone" value={user.phone} required  onChange={inputHandler}/>
        <input required type="submit" value="register" onClick={submitt}/>
      </form>
    </div>
  );
};
export default SignUp;
