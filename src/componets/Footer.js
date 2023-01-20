 import "./FooterStyle.css"
 import React from 'react'
import { FaHome, FaPhone,FaMailBulk, FaFacebook, FaLinkedinIn, FaTwitter } from "react-icons/fa"
 
 function Footer() {
   return (
     <div className="footer">
       <div className="footer-container">
       <div className="left">
        <div className="location">
            <FaHome size={20} style={{color:"#fff",marginRight:"2rem"}}/>
            <div>
                <p>99 Ganesh nager</p>
                <p>Indore</p>
            </div>
            </div>
            <div className="phone">
                <h4><FaPhone size={20} style={{color:"#fff",marginRight:"2rem"}}/>
            99-26-9999-26</h4>
            </div>
            <div className="email">
                <h4><FaMailBulk size={20} style={{color:"#fff",marginRight:"2rem"}}/>
            Infoemail.com</h4>
            </div>
        
       </div>
       <div className="right">
        <h4>About Myself</h4>
        <p>I am the Btech CSE student
             It is my Portfolio Website </p>
        <div className="social">
        <FaFacebook size={20} style={{color:"#fff",marginRight:"1rem"}}/>
        <FaLinkedinIn size={20} style={{color:"#fff",marginRight:"1rem"}}/>
        <FaTwitter size={20} style={{color:"#fff",marginRight:"1rem"}}/>
        </div>
       </div>
       </div>
     </div>
   )
 }
 
 export default Footer
 