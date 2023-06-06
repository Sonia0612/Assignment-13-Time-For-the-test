function Shimmer() {
  return (
  <div data-testid="shimmer" className="flex flex-wrap m-2 p-2">
   {Array(10)
   .fill("")
   .map((e,index)=>(<div key={index} className="w-56 h-40 p-2 m-2 shadow-lg bg-pink-50"></div>))}
    
  </div>)
}

export default Shimmer;

