import React, { useContext} from "react";
import "../Cartpage/Cartpage.css";
import { CartProduct } from "../Product component/CartProductContext";


export default function Cartpage(){
    const CartContextValue=useContext(CartProduct);
    const handleRemoveClick=(product)=>{
        const payload=product.id;
        CartContextValue.dispatch({
            type:"REMOVE_CART_ITEM",
            payload
        })
        CartContextValue.setcount(CartContextValue.count-1)
        CartContextValue.setTotal( CartContextValue.Total-product.productPrice)
    }
const formatter = new Intl.NumberFormat('india', {
    style: 'currency',
    currency: 'INR',
  });
  
    return<div className="Cart_cointainer">
        <div className="Child_cointainer">
        <div className="left_child_div">
            <h1 className="YOUR_CART_CLASS">YOUR CART</h1>
            <div className="dummy_line_div"></div>
        </div>
        <div className="rigth_child_div">
            <p className="Total_amount_ptag">Subtotal ({CartContextValue.count} items):<span className="Total_amount_spantag"> {formatter.format(CartContextValue.Total)}</span></p>
            <button className="button_remove">Proceed to payment</button>

            </div>
        </div>

        {CartContextValue.state.map((product)=>
            <div className="main_div">
                <div className="sub_div">
                    <div className="subdiv_one"><img src={product.productImage} className="image_class" alt="" /></div>
                    <div className="subdiv_two">
                        <p className="productname_class">{product.productName}</p>
                        <p className="productprice_class">{formatter.format(product.productPrice)}</p>
                        <button className="button_remove" onClick={()=>handleRemoveClick(product)}>Remove</button>
                    </div>
                </div>
                
            </div>
        )}
    </div>
   
} 