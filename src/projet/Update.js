import React, { useContext, useState } from 'react'
import { Context } from './Context'

export default function Update() {
    const {user,setUser}=useContext(Context)
    const [id,setId]=useState()
    const [nom,setNom]=useState('')
    const [prenom,setPrenom]=useState('')
    const [email,setEmail]=useState('')
    console.log(user)
    const updat = () => {
      
      const updatedUsers = user.map((use) => {
        setId(parseInt(id))
        console.log(use);
        if (use.id === id) {
          return {
            ...use, 
            nom: nom, 
            prenom: prenom,
            email: email
          };
        }
        return use; 
      });
    
      setUser(updatedUsers); 
    };
    
  return (
    <div>
      <label>id</label>
      <input type='text' onChange={(e)=>setId(e.target.value)} />
      <label>nom</label>
      <input type='text' onChange={(e)=>setNom(e.target.value)} />
      <label>prenom</label>
      <input type='text' onChange={(e)=>setPrenom(e.target.value)}/>
      <label>email</label>
      <input type='text' onChange={(e)=>setEmail(e.target.value)}/>
      <input type='button' onClick={updat} value={'update user'}/>

    </div>
  )
}
