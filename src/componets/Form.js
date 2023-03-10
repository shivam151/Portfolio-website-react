import "./FormStyle.css"

import React, { useState } from 'react'



function Form() {
  const [data, setData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  })
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!data.name || !data.email || !data.subject || !data.message) {
      alert("mdssa")
      return;
    }
    try {
      const data = await fetch(`https://portfolio-backend-fqba52xby-shivam151.vercel.app/v/msg`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      }).then(data => {
        console.log(data);
          setData({name : "", email : "", subject : "", message : ""})
      }).catch(err => {
        console.log(err);
      })
    } catch (error) {
      console.log("Something went wrong try again");
    }
  }

  const handleonChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
    console.log(data);
  }
  return (
    <div className="form">
      <div className="cform">
        <label>Your Name</label>
        <input type="text" name="name" value={data.name} onChange={handleonChange} />

        <label>Email</label>
        <input type="email" name="email" value={data.email} onChange={handleonChange} />

        <label>Subject</label>
        <input type="text" name="subject" value={data.subject} onChange={handleonChange} />

        <label>Message</label>
        <textarea rows="6" placeholder="Type your message here" name="message" value={data.message} onChange={(e) => handleonChange(e)}></textarea>

        <button className="btn" onClick={handleSubmit}>Submit</button>
      </div>
    </div>
  )
}

export default Form
