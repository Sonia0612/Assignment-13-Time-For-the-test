//diff btw func comp and custom hooks is 
//In custom hooks, we don't return JSX
import { useState,useEffect } from "react";
import { FETCH_MENU_URL } from "./constant";

const useRestMenu=(id)=>{
    const [menu,setMenu]=useState(null);
    useEffect(()=>{
        menuList();
      },[]);
      
    async function menuList(){
        const data =await fetch(FETCH_MENU_URL+ id);
        const json=await data.json();
        setMenu(json?.data)
    }
    return menu;
}
export default useRestMenu;