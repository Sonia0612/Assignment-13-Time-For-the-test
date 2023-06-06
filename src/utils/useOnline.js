import { useEffect, useState } from "react";

const useOnline=()=>{
    const [isOnline,setIsOnline]=useState(true);
    useEffect(()=>{
    let loggedIn=()=>setIsOnline(true);
    let loggedOut=()=>setIsOnline(false)

    window.addEventListener("online",loggedIn);
    window.addEventListener("offline",loggedOut);

    return ()=>{
        window.removeEventListener('online',loggedIn);
        window.removeEventListener("offline",loggedOut);

    }

    },[])

    return isOnline;
}
export default useOnline;