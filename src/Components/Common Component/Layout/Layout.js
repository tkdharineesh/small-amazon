import React, {useContext} from "react";
import "../Layout/Layout.css";
import searchicon from "../../../assets/Images/Searchicon.svg";
import { Outlet, useNavigate } from "react-router-dom";
import { LoginContext } from "../../Loginpage/LoginpageContextComponent";
import { CartProduct } from "../../Product component/CartProductContext";

export default function Layout(){
    const CartContextLength=useContext(CartProduct)
    const useheaderval=useContext(LoginContext)
    const navigate=useNavigate()
    const handleHomeLoinClick=()=>{
        navigate("/")
    }
    const HandleCartClick=()=>{
        navigate("/Cart")
    }
    const HandleAmazonLogoClick=()=>{
        navigate("/HomePage")
    }

    return<div className="Layout_cointainer">
        <div className="Header_container">
    <img className="amazon_logo" onClick={HandleAmazonLogoClick} src="	https://pngimg.com/uploads/amazon/amazon_PNG11.png" alt="" />
   <div className="header_center"> <input type="text" className="search_inputbox" />
    <div className="search_icon_div"><img className="searchicon" src={searchicon} alt="searchicon" /></div></div>
        <button className="signin_button" onClick={handleHomeLoinClick}><span className="hellogeust_spantag">{useheaderval.headerval}</span> <span className="Signin_spantag">Sign-in</span></button>
        <button className="signin_button"><span className="hellogeust_spantag">Returns</span><br/><span className="Signin_spantag">& Order</span></button>
        <button className="signin_button"><span className="hellogeust_spantag">Your</span><br/><span className="Signin_spantag">Prime</span></button>
        <button className="signin_button signin_buttoncart" onClick={HandleCartClick}>Cart <span className="cartcount_span_class">{CartContextLength.count}</span></button>
</div>
<div className="conent_class">
            <Outlet/>
        </div>
        </div>
}