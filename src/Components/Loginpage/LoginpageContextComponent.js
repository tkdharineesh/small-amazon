import React, { createContext, useReducer, useState } from "react";
import { useNavigate } from "react-router-dom";

export const LoginContext=createContext()


const InitialVlaue={
    email:"tkdharineesh@gmail.com",
    password:"Texcot@123"
}
/*case "SING_IN":if(state.some((val)=>{
    return ((val.email === payload.email)&(val.password === payload.password))
})){
    return localStorage.setItem("userdata",JSON.stringify(state))
}else state.push(payload)
return localStorage.setItem("userdata",JSON.stringify(state))
/*localStorage.setItem("userdata",JSON.stringify(payload))
*/

export default function LoginpageContextComponent({children}){
    const navigate=useNavigate()
    const [headerval,setheaderval]=useState("Hello Guest")
    const Reducer=(state,action)=>{
        const {type,payload}=action
        
            switch (type){
                case "SING_IN":
                if ((state.email === payload.email)&(state.password === payload.password)){
                    setheaderval(state.email);
                    navigate("/HomePage")  
                }else alert("Please check the email and password")
                return state
                        
                default:
                    return state;
            }
    }
    
    const [state,dispatch]=useReducer(Reducer,InitialVlaue)
    


    return<LoginContext.Provider value={{state,dispatch,headerval}}>
       {children}
    </LoginContext.Provider>
}