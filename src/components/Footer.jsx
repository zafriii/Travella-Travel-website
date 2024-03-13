import React from 'react'
import { CiFacebook } from "react-icons/ci";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import './footer.css'

function Footer() {


  return (
    <>

    <div className="footer">
       <p> Follow us on social media</p>
       <div className="icons">
       <a href="#" > <CiFacebook className='social-icons'/> </a>
       <a href="#" > <FaInstagram className='social-icons'/> </a>
       <a href="#" > <FaTwitter className='social-icons'/> </a>
       </div>
       <p>© Travella  {new Date().getFullYear()} | All rights reserved</p> 
    </div>
    
    </>
  )
}

export default Footer