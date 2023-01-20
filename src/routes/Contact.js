import React from 'react'
import Navbar from '../componets/Navbar'
import Footer from '../componets/Footer'
import Heroimage2 from '../componets/Heroimage2'
import Form from '../componets/Form'
function Contact() {
  return (
    <div>
       <Navbar/>
       <Heroimage2 heading="CONTACT." text="Lets have a chat"/>
       <Form/>
      <Footer/>
    </div>
  )
}

export default Contact
