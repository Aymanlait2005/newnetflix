import { useState } from "react";
import {context} from "./State";


export const Mon_forniseur_de_servise=({children})=>{
    const [contacts,setContacts]=useState([
        {id:1,name:"ayman lait",gmail:"aymanlait05@gmail.com",telephone:"0662305626"},
        {id:2,name:"marouane lait",gmail:"marouane1993@gmail.com",telephone:"0642147593"},
        {id:3,name:"fatiha meliani",gmail:"fatiha1972@gmail.com",telephone:"0680045999"}
    ])
    return(
        <context.Provider value={{contacts,setContacts}}>
            {children}
        </context.Provider>
    )
    
}
