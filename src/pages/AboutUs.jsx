import React from 'react'
import './About.css'
import my_image from '../images/___Boone Hall Plantation, Charleston, SC.jpeg'
function AboutUs() {
  return (
    <div className='main'>
        <div className='header'>
        <h1 className='h'><b>About US</b></h1>
        <h2> HOME || About Us</h2>
        
      </div>
      <p className='sub-header'>Legacy that leads to quality</p>
      <p className='sub-header2'>We Deliver The Best</p>
      <div className="content">
        <div className="description">
        <p className='sub-header3'>LIVLONG is a subsidiary of Arjuna Natural Pvt Ltd, 
        India’s leading manufacturer and exporter of standardized botanical extracts for the pharmaceutical and nutraceutical industry for over two decades.
        Finding wide acceptance in international markets of the US, Europe, Middle, and the Far East, Livlong works at the frontiers of botanical science.
        The company specializes in products containing superior ingredients that are sourced from clean and green sources all across India.
        At a time when extracting bio-active compounds was not undertaken in India, Arjuna Natural Pvt Ltd forged ahead, 
        way ahead of its time, creating natural products of high quality focused on family health and wellbeing. 
        Best Support to Market Your Products in Your Own Labels With Your Own Formulations
      </p>
      <button className="our-product-button">Our Product</button>
        </div>
        <div className="photo">
          {/* Image here */}
          <img src={my_image} alt='green' />
        </div>
      </div>
    </div>
  )
}

export default AboutUs