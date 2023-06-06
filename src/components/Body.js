import { useContext, useEffect, useState } from "react";
import { restDataList } from "../utils/data";
import Card from "./Card";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useRestList from "../utils/useRestList";
import useOnline from "../utils/useOnline";
import UserContext from "../utils/UserContext";

const Body = () => {
  const {user,setUser}=useContext(UserContext)
  const [text, setText] = useState("");
  const [filterRestData, allRestData, setFilterRestData, setAllRestData] =
    useRestList(restDataList);
  console.log("Render");
  if (!allRestData) return null;
  const isOnline=useOnline();
 if(!isOnline){return <h1>Please check your internet connection.</h1>}

  let searchFilter = (text, allRestData) => {
    return allRestData.filter((data) =>
      data?.data?.name.toLowerCase().includes(text.toLowerCase())
    );
  };
  return allRestData?.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="shadow-lg m-3 p-3 flex justify-between bg-pink-50">
        {/* Search bar */}
        <div className="search-box">
          <input
          data-testid="search-inp"
            type="text"
            value={text}
            name="search"
            className="text-lg p-1 m-1 text-center"
            placeholder="Search for restaurants here"
            onChange={(e) => setText(e.target.value)}
          />

          <button
                     data-testid="search-btn"

            className="m-1 hover:text-xl"
            onClick={() => {
              let SearchRest = searchFilter(text, allRestData);
              setFilterRestData(SearchRest);
            }}
          >
            <i className="fa fa-search"></i>
          </button>
        </div>

       <input  type="text" value={user.name} onChange={(e)=>setUser({...user,name:e.target.value})}/>
       
        <button
          className="border-solid border-2 border-indigo-200 p-2 hover:bg-purple-250 color-white text-lg"
          onClick={() => {
            let newList = filterRestData.filter(
              (data) => data?.data?.avgRating >= 4
            );
            setFilterRestData(newList);
          }}
        >
          Top RATED restaurants
        </button>

        <button
          className="border-solid border-2 border-indigo-200 p-2 hover:bg-purple-250 color-white text-lg"
          onClick={() => {
            let fastDeliver = filterRestData.filter(
              (data) => data?.data?.deliveryTime > 21
            );
            setFilterRestData(fastDeliver);
          }}
        >
          Fast Delivery
        </button>
      </div>

      <div className="bg-pink-50 shadow-inner m-4" >
        <div className="flex flex-wrap" data-testid="restlist">
          {filterRestData?.length === 0 ? (
            <h1>No restaurants found!!</h1>
          ) : (
            filterRestData.map((restdata) => (
              <Link to={"/menu/" + restdata.data.id} key={restdata.data.id}>
                <Card data={restdata} />
              </Link>
            ))
          )}
        </div>
      </div>
    </div>
  );
};
export default Body;
