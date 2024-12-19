import React, {useState } from 'react'
import { Context } from './Context'
import axios from 'axios'

export default function Store({children}) {
    const [value,setValue]=useState([
        {id:11,name:"ayman lait",gmail:"aymanlait05@gmail.com",telephone:"0662305626"},
        {id:12,name:"marouane lait",gmail:"marouane1993@gmail.com",telephone:"0642147593"},
        {id:13,name:"fatiha meliani",gmail:"fatiha1972@gmail.com",telephone:"0680045999"}
    ])
    
    axios.get('https://jsonplaceholder.typicode.com/users')
            .then(response => {
                const formattedData = response.data.map(user => ({
                    id: user.id,
                    name: user.name,
                    gmail: user.email,
                    telephone: user.phone
                }));
                setValue(formattedData);
            })
  return (
    <Context.Provider value={{value,setValue}}>
        {children}
    </Context.Provider>
  )
}