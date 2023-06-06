import * as constant  from "../utils/constant";

function FoodItems({cart}) {
    console.log(cart)
    const {imageId,name,avgRating,description,price}=cart;
  return (
    <div className="h-100 w-60 shadow-lg m-5 p-2 bg-white-100">
            <div className="image">
                <img className="card-img" 
                src={constant.CDN_URL+imageId}/>
            </div>
            <div className="group-head">
            <h2 className="title">{name}</h2>
            <p className="desc">{description}</p>
            </div>
            <div className="block">
            <h4 className="rating">{avgRating?avgRating:3.5} &#9733;</h4>
            <h5 className="price">{price?price:100}</h5>
            </div>
        </div>
  )
}

export default FoodItems
