import React, { useContext, useState } from 'react'
import { Context } from "./Context";
import { useNavigate } from 'react-router-dom';

export default function Addcontact() {
    const {value,setValue}=useContext(Context)
    const[name,setName]=useState("")
    const[gmail,setGmail]=useState("")
    const[telephone,setTelephone]=useState("")
    const navigate = useNavigate()
    console.log('salam')
    const add=()=>{
        setValue([...value,{id:value.length+1,name:name,gmail:gmail,telephone:telephone}])
        navigate('/');
    }
  return (
    <div>
        <input
            type='text'
            placeholder='name'
            onChange={(e)=>setName(e.target.value)}
        />
        <input
            type='text'
            placeholder='Gmailname@gmail.com'
            onChange={(e)=>setGmail(e.target.value)}
        />
        <input
            type='text'
            placeholder='06********'
            onChange={(e)=>setTelephone(e.target.value)}
        />
        <input
            type='button'
            value={'add'}
            onClick={add}
        />
    </div>
  )
}
