import {lazy,Suspense} from "react";
import ReactDOM from "react-dom/client";
import "../index.css";
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Error from "./pages/Error";
import MenuPage from "./pages/MenuPage";
import Login from "./pages/Login";
import Profile from "./pages/Profile";
import Cart from "./pages/Cart";
import Shimmer from "./components/Shimmer";
import { useState } from "react";
import UserContext from "./utils/UserContext";
import {Provider} from "react-redux";
import store from "./utils/store"
// import Instamart from "./pages/Instamart";
//creating a bundler
const Instamart=lazy(()=>import("./pages/Instamart"));

const App = () => {
  const [user,setUser]=useState({
    name:"ALEX",
    age:23,
    email:"alex@gmail.com"
})
  return (
    <Provider  store={store} className="bg-gray-50">
      <UserContext.Provider value={{user:user,setUser:setUser}}>
      <Header />
      <Outlet />
      <Footer />
      </UserContext.Provider>
    </Provider>
  );
};
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Body />
          },
      {
        path: "/about",
        element: <About />,
        //nested routes
        children:[
          {
            path:'profile',
            element:<Profile/>
        }
        ]
      },
      {
        path: "/contact",
        element: <Contact />
      },
      {
        path: "/menu/:id",
        element: <MenuPage />
      },
      {
        path: "/cart",
        element: <Cart />
      },
      {
        path:"/instamart",
        element:(<Suspense fallback={<Shimmer/>}><Instamart/></Suspense>)
      }
    ],
  },
  {
    path:"/login",
    element:<Login/>,
    errorElement:<Error/>
}
]);

let root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={router} />);
