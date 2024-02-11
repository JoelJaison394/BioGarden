import React from 'react'
import './Contact.css'

export default function Contact() {
  return (
    <div className='mains'>
      <div className='headers'>
        <h1 className='h'>Contact Us</h1>
        <h2>HOME || Contact</h2>
      </div>
      <p className='sub-header1'>Contact Info</p>
      <p className='sub-headers2'>Don't Hesitate To Contact Us</p>
      <div class="containers">
  <form>
    <h3>Get In Touch</h3>
    <input type="text" id="firstName" placeholder="First Name" required />
    <input type="text" id="lastName" placeholder="Last Name" required />
    <input type="email" id="email" placeholder="Email" required />
    <input type="text" id="mobile" placeholder="Mobile" required />
    <textarea placeholder="Type Your Message Here..." required></textarea>
    <input type="submit" value="Send" id="button" />
  </form>

  
    </div>
     </div>
      
  )
}
