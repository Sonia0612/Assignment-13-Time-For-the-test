import {useContext} from "react";
import UserContext from "../utils/UserContext";

const Footer=()=>{
    const {user}=useContext(UserContext);
    return(
        <div className="text-center text-lg shadow-inner">
            <p>Food Corner &#169;</p>
            <p>{user.email}</p>
        </div>
    )
}
export default Footer;