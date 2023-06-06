import { createSlice } from "@reduxjs/toolkit"
const cartSlice=createSlice({
  name:"cart",
  initialState:{
    items:[]
  },
  reducers:{
    addItem:(state,action)=>{
      state.items.push(action.payload);
    },
    remItem:(state,action)=>{
      // console.log("id",action.payload)
      if(action.payload.cartItems.length<1){
        return;
      }
      {action.payload.cartItems.map((cartid)=>
        {
          if(cartid.id===action.payload.id){
            state.items.pop(action.payload.id);
          }

        }
      )}
    },
    clearCart:(state)=>{
      state.items=[];
    }
  }
})
export const {addItem,clearCart,remItem}=cartSlice.actions;
export default cartSlice.reducer;

