import "./WorkcardStyle.css"
import React from 'react'


function WorkCard(props) {
  return (
    <div className="project-card">
        <img src={props.imgsrc} alt="image1" />
        <h2 className="project-title">{props.title}</h2>
        <div className="pro-detail">
          <p>{props.text}</p>
          <div className="pro-btns">
            <a href={props.view} className="btn" target="_blank"  rel="noreferrer" >View</a>
            <a href={props.source} className="btn" target="_blank"  rel="noreferrer">Source</a>

          </div>
        </div>
      </div>
  )
}

export default WorkCard
