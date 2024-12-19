import { useContext } from "react";
import React from 'react'
import { Context } from "./Context";

export default function Test() {
    const {value,setValue}=useContext(Context)
  return (
    <div>
      {value.map(vale=>{return <div key={vale.id}><h1>{vale.name}</h1><p>{vale.gmail}</p><p>{vale.telephone}</p></div>})}
    </div>
  )
}
