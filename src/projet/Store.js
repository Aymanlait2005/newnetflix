import { useState } from "react";
import { Context } from "./Context";

export function Store({children}) {
    const [user,setUser]=useState([
        {id:1,nom:"lait",prenom:"ayman",email:"aymanlait05@gmail.com"},
        {id:2,nom:"haidi",prenom:"iliass",email:"iliasshaidi2005@gmail.com"}
    ])
    return ( 
        <Context.Provider value={{user,setUser}}>
            {children}
        </Context.Provider>
     );
}

