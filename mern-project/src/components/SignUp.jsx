import React from "react";
import { useState } from "react";

const SignUp = () => {
  const [user, setUser] = useState({
    name: "",
    email : "",
    password: "",
    cpassword: "",
    phone: ""
  });
  const Inputhandler=(e)=>{
    console.log(e)
  }
  return (
    <div>
      <form>
        name <input type="text" value={user.name}  onChange={Inputhandler}/>
        email
        <input type="password" value={user.email}  onChange={Inputhandler}/>
        password
        <input type="password" value={user.password}  onChange={Inputhandler}/>
        cpassword
        <input type="password" value={user.cpassword}  onChange={Inputhandler}/>
        phone
        <input type="number" value={user.phone}  onChange={Inputhandler}/>
        <input type="submit" value="signup" />
      </form>
    </div>
  );
};
export default SignUp;
