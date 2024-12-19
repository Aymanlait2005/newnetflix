import React, { useContext, useState } from 'react'
import { Context } from './Context'

export default function Recherch() {
    const {user,setUser}=useContext(Context)
    const [nome,setNome]=useState('')
    const rech=()=>{
        const newuser= user.filter((usser,index)=>usser.nom==nome)
        setUser(newuser)
    }
  return (
    <div>
      <input type='text' onChange={e=>setNome(e.target.value)}/>
      <input type='button' onClick={rech}/>
    </div>
  )
}
