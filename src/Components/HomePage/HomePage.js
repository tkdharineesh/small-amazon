import React, { useContext} from "react";
import "../HomePage/HomePage.css";
import toycar from "../../assets/Images/toycar.webp"
import EversilverFork from "../../assets/Images/Eversilverfork.jpg"
import Mobile from "../../assets/Images/Mobile.jpg"
import Fridge from "../../assets/Images/fridge.jpg"
import Laptop from "../../assets/Images/Laptop.jpg"
import TV from "../../assets/Images/TV.jpg"
import { CartProduct } from "../Product component/CartProductContext";

export default function HomePage(){
    const CartContextupdatevalue=useContext(CartProduct)
    

    const handle01Click=()=>{
        const payload={
            id:new Date().getTime(),
            productName:"Toy car for kids over 5 years",
            productPrice:120,
            productImage:toycar
        }
        CartContextupdatevalue.dispatch({
            type:"ADD_PRODUCT_TO_CART",
            payload
        })
        CartContextupdatevalue.setcount( CartContextupdatevalue.count+1)
        CartContextupdatevalue.setTotal(CartContextupdatevalue.Total+120)
    }
    const handle02Click=()=>{
        const payload={
            id:new Date().getTime(),
            productName:"Eversilver fork",
            productPrice:50,
            productImage:EversilverFork
        }
        CartContextupdatevalue.dispatch({
            type:"ADD_PRODUCT_TO_CART",
            payload
        })
        CartContextupdatevalue.setcount( CartContextupdatevalue.count+1)
        CartContextupdatevalue.setTotal(CartContextupdatevalue.Total+50)
    }
    const handle03Click=()=>{
        const payload={
            id:new Date().getTime(),
            productName:"Vivo S1 Pro (Black,8GB RAM, 128GB Storage)",
            productPrice:12000,
            productImage:Mobile
        }
        CartContextupdatevalue.dispatch({
            type:"ADD_PRODUCT_TO_CART",
            payload
        })
        CartContextupdatevalue.setcount( CartContextupdatevalue.count+1)
        CartContextupdatevalue.setTotal(CartContextupdatevalue.Total+12000)
    }
    const handle04Click=()=>{
        const payload={
            id:new Date().getTime(),
            productName:"Samsung 253Litres Convertible Freezer Refrigerator",
            productPrice:45000,
            productImage:Fridge
        }
        CartContextupdatevalue.dispatch({
            type:"ADD_PRODUCT_TO_CART",
            payload
        })
        CartContextupdatevalue.setcount( CartContextupdatevalue.count+1)
        CartContextupdatevalue.setTotal(CartContextupdatevalue.Total+45000)
    }
    const handle05Click=()=>{
        const payload={
            id:new Date().getTime(),
            productName:"Lenovo Laptop Ideapad 8GB 1TB W10 14 inch",
            productPrice:59000,
            productImage:Laptop
        }
        CartContextupdatevalue.dispatch({
            type:"ADD_PRODUCT_TO_CART",
            payload
        })
        CartContextupdatevalue.setcount( CartContextupdatevalue.count+1)
        CartContextupdatevalue.setTotal(CartContextupdatevalue.Total+59000)
    }
    const handle06Click=()=>{
        const payload={
            id:new Date().getTime(),
            productName:"Haier LE43K6600GA Android Smart AI Plus LED TV",
            productPrice:72000,
            productImage:TV
        }
        CartContextupdatevalue.dispatch({
            type:"ADD_PRODUCT_TO_CART",
            payload
        })
        CartContextupdatevalue.setcount( CartContextupdatevalue.count+1)
        CartContextupdatevalue.setTotal(CartContextupdatevalue.Total+72000)
    }

    return<div className="HomePage_cointainer">
        <div className="child_cointainer_one">
            <div className="child1_subchild1">
                <p className="Product_name_class">Toy car for kids over 5 years</p>
                <p className="Product_prize_class">₹120</p>
                <img className="toycar_class" src={toycar} alt="toycar" />
                <button className="Add_to_basket_button" onClick={handle01Click}>Add to Basket</button>
            </div>
            <div className="child1_subchild1">
            <p className="Product_name_class">Eversilver fork</p>
                <p className="Product_prize_class">₹50</p>
                <img className="toycar_class" src={EversilverFork} alt="toycar" />
                <button className="Add_to_basket_button" onClick={handle02Click}>Add to Basket</button>
            </div>
        </div>
        <div className="child_cointainer_two">
            <div className="child2_subchild2">
            <p className="Product_name_class">Vivo S1 Pro (Black,8GB RAM, 128GB Storage)</p>
                <p className="Product_prize_class">₹12000</p>
                <img className="toycar_class" src={Mobile} alt="toycar" />
                <button className="Add_to_basket_button" onClick={handle03Click}>Add to Basket</button>
            </div>
            <div className="child2_subchild2">
            <p className="Product_name_class">Samsung 253Litres Convertible Freezer Refrigerator</p>
                <p className="Product_prize_class">₹45000</p>
                <img className="toycar_class" src={Fridge} alt="toycar" />
                <button className="Add_to_basket_button" onClick={handle04Click}>Add to Basket</button>
            </div>
            <div className="child2_subchild2">
            <p className="Product_name_class">Lenovo Laptop Ideapad 8GB 1TB W10 14 inch</p>
                <p className="Product_prize_class">₹59000</p>
                <img className="toycar_class" src={Laptop} alt="toycar" />
                <button className="Add_to_basket_button" onClick={handle05Click}>Add to Basket</button>
            </div>
        </div>
        <div className="child_cointainer_three">
            <div className="child3_subcontainer">
            <p className="Product_name_class">Haier LE43K6600GA Android Smart AI Plus LED TV</p>
                <p className="Product_prize_class">₹72000</p>
                <img className="toycar_class" src={TV} alt="toycar" />
                <button className="Add_to_basket_button" onClick={handle06Click}>Add to Basket</button>
            </div>
        </div>
    </div>
}