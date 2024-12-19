import React from 'react'

export default function Contact(props) {
    const {id,name,gmail,telephone}=props.props
  return (
    <div key={id}>
      <h1>{name}</h1>
      <button onClick={()=>{props.deleteContact(id)} } >X</button>
      <br/>
      <p>{gmail}</p>
      <br/>
      <p>{telephone}</p>
    </div>
  )
}
