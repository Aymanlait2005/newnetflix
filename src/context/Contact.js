import React, { useContext } from 'react'
import {context} from './State'

export  function Contact() {
    const {contacts}=useContext(context)
    console.log(contacts)
  return (
    <div>
        {contacts.map((Contact)=>{return<div key={Contact.id}><h1>{Contact.name}</h1><p>{Contact.gmail}</p><p>{Contact.telephone}</p></div>})}
    </div>
  )
}
