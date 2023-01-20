import React from 'react'
import Navbar from '../componets/Navbar'
import Footer from '../componets/Footer'
import Heroimage2 from '../componets/Heroimage2'
import AboutContent from '../componets/AboutContent'

function About() {
  return (
    <div>
       <Navbar/>
       <Heroimage2 heading="ABOUT." text="I am friendly full stack developer"/>
       <AboutContent/>
      <Footer/>
    </div>
  )
}

export default About
