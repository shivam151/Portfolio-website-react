import React from 'react'
import Navbar from '../componets/Navbar'
import Heroimage from '../componets/Heroimage'
import Footer from '../componets/Footer'
import Work from '../componets/Work'
function home() {
  return (
    <div>
      <Navbar/>
      <Heroimage/>
      <Work/>
       <Footer/> 
        
    </div>
  )
}

export default home
