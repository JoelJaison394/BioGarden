import React from "react";
import { useSpring, animated } from "react-spring";
import SelectionComponent from "../components/SelectionComponent";
import FramerExperiences from "../components/FramerExperiences";
import Footer from "../components/Footer";
import GlobalImpactSection from "../components/GlobalImpactSection";
import SliderWithContent from "../components/SliderWithContent";
import ServicesSection from "../components/ServicesSection";
import HeroSection from "../components/HeroSection";

function Number({ n }) {
  const { number } = useSpring({
    from: { number: 0 },
    number: n,
    delay: 200,
    config: { mass: 1, tension: 20, friction: 10 },
  });
  return <animated.div>{number.to((n) => n.toFixed(0))}</animated.div>;
}

function Home() {
  const servicesData = {
    services: [
      {
        heading: "Fertilizer Formulation",
        description:
          "Crafting nutrient-rich fertilizers tailored to optimize crop health and yield, ensuring your soil thrives.",
      },
      {
        heading: "Soil Analysis Services",
        description:
          "Precise soil analysis for informed decision-making, providing insights into nutrient levels, pH balance, and overall soil health.",
      },
      {
        heading: "Seed Arrangement Solutions",
        description:
          "Expertly curated seed arrangements, designed to maximize growth potential and promote diverse and resilient crops.",
      },
      {
        heading: "Agricultural Marketplace",
        description:
          "A robust platform connecting farmers and buyers, facilitating the sale of high-quality produce and fostering agricultural community growth.",
      },
    ],
  };
  const imagesData = [
    {
      text: "We have a large laboratory to find out hybrid seeds",
      description:
        "Our state-of-the-art laboratory is equipped for researching and developing hybrid seeds to enhance crop quality and yield.",
      imageUrl:
        "https://cdn.pixabay.com/photo/2014/07/06/09/26/laboratory-385349_1280.jpg",
    },
    {
      text: "We have a large network of farmers",
      description:
        "Connecting with a vast network of farmers ensures collaboration and support throughout the agricultural community.",
      imageUrl:
        "https://cdn.pixabay.com/photo/2014/07/06/17/20/tractor-385681_960_720.jpg",
    },
    {
      text: "We have different schemes that help the farmers in building their farmlands",
      description:
        "Our diverse schemes provide farmers with valuable resources and assistance, fostering sustainable development of their farmlands.",
      imageUrl:
        "https://cdn.pixabay.com/photo/2016/02/16/12/19/indonesia-1203250_1280.jpg",
    },
  ];

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
  };

  return (
    <div className="relative w-full overflow-hidden">
      <HeroSection />
      <div className="px-4 md:px-8">
        <ServicesSection servicesData={servicesData} />
        <div className="mt-10">
          <SliderWithContent imagesData={imagesData} />
        </div>
        <GlobalImpactSection />
        <SelectionComponent />
        <div className="lg:px-20 px-2 bg-[#FDF9ED] mb-10">
          <FramerExperiences />
        </div>
      </div>
    </div>
  );
}

export default Home;
