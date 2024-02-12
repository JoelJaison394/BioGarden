import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const HeroSection = () => {
  const { ref, inView } = useInView();
  const animationControls = useAnimation();

  useEffect(() => {
    if (inView) {
      animationControls.start({
        opacity: 1,
        y: 0,
        transition: { delay: 0.5, duration: 1.5, type: "spring", stiffness: 120 },
      });
    }
  }, [inView, animationControls]);

  return (
    <div className="HeroSection h-[85vh] w-full">
      <div className="relative">
        <img
          src="https://cdn.pixabay.com/photo/2017/07/19/08/50/gardening-2518377_1280.jpg"
          alt="hero"
          className="w-full h-[85vh] object-cover absolute top-0 left-0"
        />
        <div className="absolute top-0 left-0 w-full h-[85vh] bg-black opacity-50 blur-[2px] z-10"></div>
      </div>

      <motion.div
        ref={ref}
        className="absolute pt-36 text-center w-full z-20"
        initial={{ opacity: 0, y: 50 }}
        animate={animationControls}
      >
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-9xl p-4 text-white font-bold tracking-wider">
          Where Nature Thrives, Cultivating Beauty, One Leaf at a Time.
        </h1>
        <p className="text-white text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl mx-auto mb-8">
          We’ve been the world's leading manufacturer of standardized botanical
          extracts for over 30 years. And we believe our journey has only begun.
        </p>
        <motion.button
          className="bg-green-500 text-white py-2 px-6 rounded-full text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl hover:bg-green-600 transition duration-300"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          Explore Now
        </motion.button>
      </motion.div>
    </div>
  );
};

export default HeroSection;
