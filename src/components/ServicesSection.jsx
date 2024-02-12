import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import ServiceCard from "./ServiceCard";

const ServicesSection = ({ servicesData }) => {
  return (
    <div className="w-full px-4 lg:px-8 flex flex-col justify-start items-center">
      <h2 className="text-3xl font-bold mb-8 text-center mt-10 lg:mt-16">
        What We Do!
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 justify-center">
        {servicesData.services.map((service, index) => (
          <AnimatedServiceCard
            key={index}
            heading={service.heading}
            description={service.description}
          />
        ))}
      </div>
    </div>
  );
};

const AnimatedServiceCard = ({ heading, description }) => {
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.5,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 20 }}
      transition={{ duration: 0.5 }}
      className="flex flex-col"
    >
      <ServiceCard heading={heading} description={description} />
    </motion.div>
  );
};

export default ServicesSection;
