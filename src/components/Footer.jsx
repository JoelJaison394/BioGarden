import React from "react";
import { motion } from "framer-motion";
import { InView } from "react-intersection-observer";

const Footer = () => {
  return (
    <InView>
      {({ inView, ref }) => (
        <motion.footer
          ref={ref}
          className="bg-gray-800 text-white py-4 mt-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: inView ? 1 : 0 }}
          transition={{ duration: 1 }}
        >
          <div className="container mx-auto flex flex-col lg:flex-row justify-between items-center px-4 lg:px-0">
            <div className="mb-4 lg:mb-0">
              <motion.p
                className="text-sm text-center lg:text-left"
                initial={{ opacity: 0 }}
                animate={{ opacity: inView ? 1 : 0 }}
                transition={{ duration: 1, delay: 0.2 }}
              >
                &copy; 2024 Green Grove. All rights reserved.
              </motion.p>
            </div>
            <div className="mb-4 lg:mb-0 flex justify-center lg:justify-start">
              <motion.a
                href="/about"
                className="text-sm mx-2"
                initial={{ opacity: 0 }}
                animate={{ opacity: inView ? 1 : 0 }}
                transition={{ duration: 1, delay: 0.4 }}
              >
                About Us
              </motion.a>
              <motion.a
                href="/contact"
                className="text-sm mx-2"
                initial={{ opacity: 0 }}
                animate={{ opacity: inView ? 1 : 0 }}
                transition={{ duration: 1, delay: 0.6 }}
              >
                Contact Us
              </motion.a>
            </div>
            <div className="text-sm text-center lg:text-right">
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: inView ? 1 : 0 }}
                transition={{ duration: 1, delay: 0.8 }}
              >
                Email: info@greengrove.com
              </motion.p>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: inView ? 1 : 0 }}
                transition={{ duration: 1, delay: 1 }}
              >
                Phone: +1 (555) 123-4567
              </motion.p>
            </div>
          </div>
        </motion.footer>
      )}
    </InView>
  );
};

export default Footer;
