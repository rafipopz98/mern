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
  let name,value;

  const Inputhandler=(e)=>{
    name=e.target.name;
    value=e.target.value;
    setUser({
      ...user,[name]:value
    })
  }
  return (
    <div>
      <form>
        name <input type="text"  name="name" value={user.name}  onChange={Inputhandler}/>
        email
        <input type="password" name="email" value={user.email}  onChange={Inputhandler}/>
        password
        <input type="password" name="password" value={user.password}  onChange={Inputhandler}/>
        cpassword
        <input type="password" name="cpassword" value={user.cpassword}  onChange={Inputhandler}/>
        phone
        <input type="number" name="phone" value={user.phone}  onChange={Inputhandler}/>
        <input type="submit" value="signup" />
      </form>
    </div>
  );
};
export default SignUp;
