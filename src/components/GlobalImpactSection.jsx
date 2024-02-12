import React, { useState } from "react";
import { motion } from "framer-motion";
import { animated, useSpring } from "react-spring";
import { useInView } from "react-intersection-observer";

const AnimatedNumber = ({ number }) => {
    const { ref, inView } = useInView({
        triggerOnce: false,
      });
  const [animatedProps, setAnimatedProps] = useSpring(() => ({
    value: 0,
    config: { duration: 1000 },
  }));

  if (inView) {
    setAnimatedProps({ value: number });
  }


  return (
    <animated.div
      ref={ref}
      className="text-3xl lg:text-5xl p-2 font-bold text-green-500"
      style={{
        fontSize: inView ? "4rem" : "3rem", // Increase size when in view
      }}
    >
      {animatedProps.value.to((n) => n.toFixed(0))}
    </animated.div>
  );
};

const GlobalImpactSection = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="relative text-black py-8 px-4 md:px-8 bg-gradient-to-b from-gray-200 to-gray-300 flex flex-col justify-start items-center"
    >
      <div className="max-w-6xl w-full px-3 flex flex-col items-center">
        <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-semibold mb-4 w-full text-center">
          Making a Difference Globally
        </h1>
        <div className="h-1 w-1/2 bg-green-500 mb-8"></div>
      </div>
      <div className="mt-6 text-center max-w-3xl w-full">
        <p className="text-base md:text-lg lg:text-xl xl:text-2xl font-medium mb-6">
          Our organization positively impacts communities in over{" "}
          <AnimatedNumber number={10} /> countries through innovative
          agricultural practices and sustainable initiatives.
        </p>
        <p className="text-base md:text-lg lg:text-xl xl:text-2xl font-medium mb-10">
          With a network of over <AnimatedNumber number={100} /> laboratories
          and research centers, we lead scientific advancements in agriculture
          to ensure the prosperity of farmers worldwide.
        </p>
      </div>
      <div className="flex flex-col lg:flex-row justify-center items-center w-full max-w-6xl">
        {/* Text Section */}
        <div className="ml-4 w-full lg:w-1/2">
          <p className="text-base md:text-lg lg:text-xl xl:text-2xl font-medium mb-6">
            We support more than <AnimatedNumber number={20000} /> farmers,
            providing essential resources, knowledge, and tools to boost
            productivity.
          </p>
          <p className="text-base md:text-lg lg:text-xl xl:text-2xl font-medium mb-10">
            Implementing over <AnimatedNumber number={30} /> different schemes,
            we address various challenges faced by farmers, creating a
            resilient agricultural ecosystem.
          </p>
        </div>
      </div>
      <div className="mt-8 flex items-center max-w-6xl w-full">
        <button className="bg-green-500 text-white py-3 px-8 rounded-full text-lg hover:bg-green-600 transition duration-300 mr-4">
          Join Us
        </button>
        <a
          href="/learn-more"
          className="text-green-500 underline text-lg hover:text-green-600 transition duration-300"
        >
          Learn More
        </a>
      </div>
    </motion.div>
  );
};

export default GlobalImpactSection;

