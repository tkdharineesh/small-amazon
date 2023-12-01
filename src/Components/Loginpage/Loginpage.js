import React, { useContext, useState } from "react";
import "../Loginpage/Loginpage.css";
import { LoginContext } from "./LoginpageContextComponent";

export default function Loginpage(){
    const LoginData=useContext(LoginContext);
    const [email,setemail]=useState("");
    const [password,setpassword]=useState("");

    const HandleSignInClick=()=>{
        const payload={
            email,
            password
        }
        LoginData.dispatch({
            type:"SING_IN",
            payload
        })
    }

    return<div className="Login_container">
    <div className="login_card">
        <label htmlFor="LoginEmail" className="lable_class">Email</label>
        <input type="text" value={email} onChange={(e)=>setemail(e.target.value)} id="LoginEmail" placeholder="Enter The Email" className="inputfield_class"/>
        <label htmlFor="LoginPassword" className="lable_class">Password</label>
        <input type="text" value={password} onChange={(e)=>setpassword(e.target.value)} id="LoginPassword" placeholder="Enter The Password" className="inputfield_class"/><br/>
        <button onClick={HandleSignInClick} className="Login_button_class" >Sign-in</button>
    </div>
    
</div>
}