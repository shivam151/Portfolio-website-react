import "./HeroStyle.css"
import React from 'react'
import  introimage from "../assets/introimage.jpg"
import { Link } from "react-router-dom"

function Heroimage() {
  return (
    <div className="hero">
      <div className="mask">
        <img className="into-img" src={introimage} alt="into-img"/>
      </div>
      <div className="content">
        <p> HI, I AM A BTECH STUDENT</p>
        <h1>React Devloper.</h1>
        <div>
          <Link to="/project" className="btn">Projects</Link>
          <Link to="/contact" className="btn btn-light">Contact</Link>
        </div>
      </div>
    </div>
  )
}

export default Heroimage
