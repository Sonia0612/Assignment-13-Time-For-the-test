import FoodItems from "../components/FoodItems";
import {clearCart} from "../utils/cartSlice";
import { useDispatch, useSelector } from "react-redux";

function Cart() {
    const cartItems=useSelector(store=>store.cart.items);
    const dispatch=useDispatch();
    const handleclearCart=()=>{
        dispatch(clearCart())
    }
  return (
    <div>
      <h1 className="m-2 p-2 font-bold flex text-2xl">
        Cart Items - {cartItems.length}
        <button  className="bg-green-100 mx-4" onClick={()=>handleclearCart()}>Clear Cart</button>
      </h1>
      <div className="snap-center">
      {cartItems.map((cart)=>(
            <FoodItems cart={cart}></FoodItems>)
            )}
      </div>
     

    </div>
  )
}

export default Cart
