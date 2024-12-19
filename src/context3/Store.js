import { Children, useState } from "react";
import { Context } from "./Context";

export default function Store({Children}) {
    const [value,setValue]=useState(
        [
            {id:11,name:"ayman lait",gmail:"aymanlait05@gmail.com",telephone:"0662305626"},
            {id:12,name:"marouane lait",gmail:"marouane1993@gmail.com",telephone:"0642147593"},
            {id:13,name:"fatiha meliani",gmail:"fatiha1972@gmail.com",telephone:"0680045999"}
        ]
    )
    return
    <Context.Provider value={{value,setValue}}>
        {Children}
    </Context.Provider>
}
