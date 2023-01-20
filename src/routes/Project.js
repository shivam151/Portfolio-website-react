import React from 'react'
import Navbar from '../componets/Navbar'
import Footer from '../componets/Footer'
import Heroimage2 from '../componets/Heroimage2'
import SkillCard from '../componets/SkillCard'
import Work from '../componets/Work'

function project() {
  return (
    <div>
      <Navbar/>
      <Heroimage2 heading="PROJECTS." text="Some of my most recent works"/>
      <Work/>
      <SkillCard/>
      <Footer/>
    </div>
  )
}

export default project
