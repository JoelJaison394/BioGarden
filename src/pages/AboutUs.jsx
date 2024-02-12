import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { InView } from 'react-intersection-observer';
import my_image from '../images/___Boone Hall Plantation, Charleston, SC.jpeg';

function AboutUs() {
  const [isVisible, setIsVisible] = useState(false);

  const handleInView = (inView) => {
    setIsVisible(inView);
  };

  return (
    <div className='main bg-gray-100 min-h-screen'>
    
      <div className="content max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col lg:flex-row items-center justify-between">
          <InView as="div" onChange={handleInView}>
            {({ inView, ref }) => (
              <motion.div
                ref={ref}
                className="photo flex-1 mb-8 lg:mb-0"
                initial={{ opacity: 0 }}
                animate={{ opacity: inView ? 1 : 0 }}
                transition={{ duration: 1 }}
              >
                <img src={my_image} alt='green' className="w-full h-full object-cover rounded-md shadow-lg" />
              </motion.div>
            )}
          </InView>
          <div className="description flex-1 lg:pl-8">
            <h2 className="text-3xl font-bold mb-4">Legacy that Leads to Quality</h2>
            <p className='text-lg leading-relaxed'>
              LIVLONG is a subsidiary of Arjuna Natural Pvt Ltd, India’s leading manufacturer and exporter of standardized botanical extracts for the pharmaceutical and nutraceutical industry for over two decades. Finding wide acceptance in international markets of the US, Europe, Middle, and the Far East, Livlong works at the frontiers of botanical science. The company specializes in products containing superior ingredients that are sourced from clean and green sources all across India.
            </p>
            <p className='text-lg leading-relaxed mt-4'>
              At a time when extracting bio-active compounds was not undertaken in India, Arjuna Natural Pvt Ltd forged ahead, way ahead of its time, creating natural products of high quality focused on family health and wellbeing. Best Support to Market Your Products in Your Own Labels With Your Own Formulations.
            </p>
            <button className="our-product-button mt-6 bg-green-500 text-white py-2 px-4 rounded-md hover:bg-green-600 transition duration-300">Our Products</button>
          </div>
        </div>
        <div className="mt-12">
          <h2 className="text-3xl font-bold mb-4">Our Mission</h2>
          <p className="text-lg leading-relaxed">
            Our mission is to provide high-quality natural products that contribute to the health and wellbeing of individuals and families worldwide. We are committed to innovation, sustainability, and ethical business practices in all aspects of our operations.
          </p>
        </div>
        <div className="mt-12">
          <h2 className="text-3xl font-bold mb-4">Our Vision</h2>
          <p className="text-lg leading-relaxed">
            Our vision is to be a global leader in the natural products industry, recognized for our dedication to excellence, integrity, and customer satisfaction. We aspire to make a positive impact on the health and happiness of people around the world.
          </p>
        </div>
        <div className="mt-12">
          <h2 className="text-3xl font-bold mb-4">Our Values</h2>
          <ul className="list-disc list-inside text-lg">
            <li>Quality: We are committed to providing products of the highest quality, backed by rigorous testing and research.</li>
            <li>Integrity: We conduct our business with honesty, transparency, and ethical behavior.</li>
            <li>Innovation: We continuously strive to innovate and improve our products, processes, and services.</li>
            <li>Sustainability: We prioritize environmental sustainability and responsible sourcing in all aspects of our operations.</li>
            <li>Customer Focus: We are dedicated to meeting the needs and exceeding the expectations of our customers.</li>
            <li>Community: We believe in giving back to the communities in which we operate and supporting social initiatives for the greater good.</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
