import { Context } from "./tate";
import React, { useState } from 'react'

export  function Forniseure({children}) {
    const [variable,setVariable]=useState(['bonjoure ayman comment cv ',"mar"])
  return (
    <Context.Provider value={{variable,setVariable}}>
        {children}
    </Context.Provider>
  )
}
