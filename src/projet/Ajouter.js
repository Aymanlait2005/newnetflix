import React, { useContext, useState } from 'react'
import { Context } from './Context'

export default function Ajouter() {
    const {user,setUser}=useContext(Context)
    const [nom,setNom]=useState('')
    const [prenom,setPrenom]=useState('')
    const [email,setEmail]=useState('')
    const ajou=()=>{
        setUser([...user,{id:user.length+1,nom:nom,prenom:prenom,email:email}])
    }
  return (
    <div>
      <label>nom</label>
      <input type='text' onChange={(e)=>setNom(e.target.value)} />
      <label>prenom</label>
      <input type='text' onChange={(e)=>setPrenom(e.target.value)}/>
      <label>email</label>
      <input type='text' onChange={(e)=>setEmail(e.target.value)}/>
      <input type='button' onClick={ajou} value={'ajouter user'}/>

    </div>
  )
}
