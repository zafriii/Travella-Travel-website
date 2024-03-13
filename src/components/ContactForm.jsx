import React from 'react'
import './contact.css'

function ContactForm() {
  return (

    <>

            <div className='contact'>

            <h2 className='contact-title'>If you have any quetion Contact Us</h2>

            <div className="contact-container">

                <img src='images/con.jpg'></img>


                    <div className="contact-form">

                    <form  action="https://formspree.io/f/moqgqred" method="POST" className="contact-inputs"> 

                        <h3 className='phn'>Get in touch (Phone - +880172105509)</h3>
                        <h3>Email : travella@gmail.com</h3>

                        <input type='text'  
                        placeholder='Enter your name...'
                        required
                        autoComplete="off"
                        />

                        <input type='text'  
                        placeholder='Enter your email...'
                        required
                        autoComplete="off"/>

                        <textarea
                        name="Message"
                        cols="30"
                        rows="5"
                        required
                        autoComplete="off"
                        placeholder=" Message..."></textarea>

                        <input type="submit" value="send" className='submit'/>

                        </form>

                    </div>

            </div>

            </div>


    

    </>
  )
}

export default ContactForm