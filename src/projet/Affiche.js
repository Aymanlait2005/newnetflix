import React, { useContext } from 'react'
import { Context } from './Context'

export  function Affiche() {
    const {user}=useContext(Context)
  return <div>
    {
    user.map((contex,index)=>{
     return <div key={index}>
       <p> user : {index}</p>
       <p> le nom :{ contex.nom}</p>  
       <p> le prenom :{ contex.prenom}</p> 
       <p> email :{ contex.email}</p>
        </div>
      })   
    } 
    </div>
}
