import React ,{ useContext } from "react";
import { Context } from "./tate";

export  function Test() {
    const {variable,setVariable}=useContext(Context)
  return (
    <div>
        {variable[0]}
    </div>
  )
}