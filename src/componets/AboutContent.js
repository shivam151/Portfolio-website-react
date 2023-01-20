import "./AboutContentStyle.css"
import React from 'react'
import { Link } from "react-router-dom"
import work3 from "../assets/work-3.png"
import work2 from "../assets/work-2.png"

function AboutContent() {
  return (
    <div className="about">
      <div className="left">
        <h1>WHO AM I?</h1>
        <p>I am the react full-stack developer.
             I create responsive secure websites for clients.
             </p>
        <Link to="/contact">
            <button className="btn">Contact</button>
        </Link>

      </div>
      <div className="right">
        <div className="img-container"> 
        <div className="img-stack top"> 
        <img src={work3} className="img" alt="true"/>
        </div>
        <div className="img-stack bottom"> 
        <img src={work2} className="img" alt="true"/>
        </div>
        </div>
      </div>

    </div>
  )
}

export default AboutContent
