import React from 'react'
import Navbar from './Navbar'
import Content from './Content'
import List from './List';

function Contact(){
    
      const contacts = [
        {
            name: "Aashish",
            contact: 8571234567,
            email: "aashish.northeastern.edu",
            linkedin: "linkedin/aashish-chaple"
        }
    ];

    return(
      <div>
      <Navbar/>
      <Content title="Contact" content={contacts.map(contact => (<List
        name = {contact.name} 
        contact = {contact.contact}
        email = {contact.email}
        linkedin = {contact.linkedin}  
      />))}/>
      
      </div>
    )
}

export default Contact