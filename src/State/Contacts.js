import React, { useState } from 'react'
import Contact from './Contact'

export default function Contacts(props) {
const [contacts,setContacts]=useState([
    {id:1,name:"ayman lait",gmail:"aymanlait05@gmail.com",telephone:"0662305626"},
    {id:2,name:"marouane lait",gmail:"marouane1993@gmail.com",telephone:"0642147593"},
    {id:3,name:"fatiha meliani",gmail:"fatiha1972@gmail.com",telephone:"0680045999"}
])
    const deleteContact=(id)=>{
        console.log("valider contact")
        const newcontacts= contacts.filter(contact=> contact.id!=id)
        setContacts(newcontacts)
    }
  return (
    <div>
      {contacts.map(contact=><Contact key={contact.id} props={contact} deleteContact={deleteContact}/>)}
    </div>
  )
}