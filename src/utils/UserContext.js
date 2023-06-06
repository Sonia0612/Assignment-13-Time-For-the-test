import { createContext } from "react";

const UserContext=createContext(
    {user:
        {
            name:"DUMMY",
            age:23,
            email:"dummy@gmail.com"
        }
            
})

export default UserContext;