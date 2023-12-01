import React, { createContext, useReducer, useState } from "react";

export const CartProduct=createContext()
const InitialProductValue=[]

export default function CartProductContext({children}){
    const [count,setcount]=useState(0)
    const Reducer=(state,action)=>{
const {type,payload}=action
switch (type){
    case "ADD_PRODUCT_TO_CART":
        return[...state,payload]
    case "REMOVE_CART_ITEM":
        return[...state].filter(product=>product.id !== payload)
    default:
        return state
}
    }
    const [state,dispatch]=useReducer(Reducer,InitialProductValue)

   
    const [Total,setTotal]=useState(0)
    
    return<CartProduct.Provider value={{state,dispatch,count,setcount,Total,setTotal}}>
        {children}
    </CartProduct.Provider>
}