import { useState } from "react";
import * as constant  from "../utils/constant";
import { Link, useNavigate } from "react-router-dom";
import Login from "../pages/Login";
import useOnline from "../utils/useOnline";
import { useContext } from "react";
import UserContext from "../utils/UserContext";
import {useSelector} from "react-redux";

const Header=()=>{
    const cartItems=useSelector(store=>store.cart.items);
    // console.log("cartItems",cartItems);
    let nav=useNavigate();
    const [isLogged,setIsLogged]=useState(false);
    const isOnline=useOnline();
    const {user,setUser}=useContext(UserContext);
    
    return(
        <div className="flex m-2 justify-between shadow-lg bg-pink-100">
            <div className="logo-container">
                <img className="h-24 p-2" src={constant.LOGO_URL} data-testid="logo" alt='lOGO here'/>
            </div>
            <h1 className="m-5 p-5 text-2xl">Food Corner</h1>
            <div className="m-5 p-5">
                <ul className="flex">
                    <Link className="px-2 text-lg" to="/"><li>home</li></Link>
                    <Link className="px-2 text-lg" to="/about"><li>about</li></Link>
                    <Link className="px-2 text-lg" to="/contact"><li>contact us</li></Link>
                    <Link className="px-2 text-lg" to="/instamart"><li>Instamart</li></Link>
                    <Link className="px-2 text-lg" to="/cart" ><li data-testid="cart">cart {cartItems.length} items</li></Link>                
                </ul>
            </div>
            {/* online|offline status */}
            <div className="m-5 p-5">
            <h1 data-testid="status">{!isOnline? '🔴' :'🟢'}</h1>
            {user.name}
            {isLogged?<button className="px-2 text-lg">Logout</button>:
            <button className="px-2" onClick={()=>nav('/login')}>Login</button>}
            </div>
        </div>
    )
}
export default Header;