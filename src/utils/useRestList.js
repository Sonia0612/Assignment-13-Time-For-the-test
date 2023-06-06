import { useEffect, useState } from "react";

function useRestList(restDataList) {
    const [filterRestData, setFilterRestData] = useState(restDataList);
    const [allRestData, setAllRestData] = useState([]);
    useEffect(()=>{
        console.log("fetch");
        getRest();
          },[])
        
          async function getRest(){
            const data=await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9304278&lng=77.678404&page_type=DESKTOP_WEB_LISTING")
            const Json=await data.json();
            setFilterRestData(Json?.data?.cards[2]?.data?.data?.cards)
            setAllRestData(Json?.data?.cards[2]?.data?.data?.cards)
          }
    return [filterRestData,allRestData,setFilterRestData,setAllRestData]
}

export default useRestList
