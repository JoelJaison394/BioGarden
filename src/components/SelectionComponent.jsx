import React, { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const NewsArticle = ({ newspaper, title, description, imageUrl }) => {
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.5,
  });

  return (
    <motion.div
      ref={ref}
      className="border p-4 mb-4 flex flex-col lg:flex-row items-center lg:w-[50rem]"
      initial={{ x: 200, opacity: 0 }}
      animate={{ x: inView ? 0 : 200, opacity: inView ? 1 : 0 }}
      transition={{ duration: 0.5 }}
    >
      <img src={imageUrl} alt={title} className="w-full lg:w-1/2 lg:h-40 object-cover mb-4 lg:mb-0 lg:mr-4" />
      <div>
        <h2 className="text-lg font-semibold mb-1">{newspaper}</h2>
        <h3 className="text-base font-medium mb-2">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
    </motion.div>
  );
};

const WorkItem = ({ title, description, imageUrl }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  return (
    <motion.div
      ref={ref}
      className="border p-4 mb-4 flex flex-col lg:flex-row items-center lg:w-[50rem]"
      initial={{ x: -200, opacity: 0 }}
      animate={{ x: inView ? 0 : -200, opacity: inView ? 1 : 0 }}
      transition={{ duration: 0.5 }}
    >
      <img src={imageUrl} alt={title} className="w-full lg:w-1/2 lg:h-40 object-cover mb-4 lg:mb-0 lg:mr-4" />
      <div>
        <h2 className="text-lg font-semibold mb-1">{title}</h2>
        <p className="text-gray-600">{description}</p>
        <button className="bg-green-500 text-white py-2 px-4 mt-2 rounded-full hover:bg-green-600 transition duration-300">
          Learn More
        </button>
      </div>
    </motion.div>
  );
};

const SelectionComponent = () => {
  const [selectedOption, setSelectedOption] = useState("latestNews");

  const handleOptionClick = (option) => {
    setSelectedOption(option);
  };

  return (
    <div className="flex flex-col items-center">
      <div className="mb-4 flex mt-8 text-2xl">
        <motion.div
          className={`cursor-pointer mr-4 ${
            selectedOption === "latestNews" ? "border-b-2 border-green-500 font-bold" : ""
          }`}
          onClick={() => handleOptionClick("latestNews")}
          whileHover={{ scale: 1.1 }}
        >
          Latest News
        </motion.div>

        <motion.div
          className={`cursor-pointer ${
            selectedOption === "ourWorks" ? "border-b-2 border-green-500 font-bold" : ""
          }`}
          onClick={() => handleOptionClick("ourWorks")}
          whileHover={{ scale: 1.1 }}
        >
          Our Works
        </motion.div>
      </div>

      <div className="mt-8 w-full lg:w-[70%] xl:w-[60%] 2xl:w-[50%]">
        {selectedOption === "latestNews" && (
          <>
            <h2 className="text-3xl font-bold mb-4">Latest News</h2>
            <NewsArticle
              newspaper="Daily News"
              title="Breaking News: Exciting Developments in Agriculture"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
              imageUrl="https://img.etimg.com/thumb/msid-107526103,width-160,height-120,imgsize-33094/food-ministry-lowers-stock-limit-for-wheat.jpg"
            />
            <NewsArticle
              newspaper="Weekly Gazette"
              title="Innovative Solutions for Sustainable Farming Practices"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
              imageUrl="https://img.etimg.com/thumb/msid-107457296,width-160,height-120,imgsize-102110/no-proposal-to-hike-pm-kisan-amount-from-rs-6000/yr-agriculture-minister-arjun-munda.jpg"
            />
            <NewsArticle
              newspaper="Agriculture Times"
              title="Global Collaboration to Address Climate Change in Agriculture"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
              imageUrl="https://img.etimg.com/thumb/msid-107335718,width-160,height-120,imgsize-294476/not-just-green-white-blue-too-budget-proposal-on-increasing-output-of-oilseeds-milk-aquaculture-products-to-help-india-reduce-dependence-on-imports.jpg"
            />
          </>
        )}

        {selectedOption === "ourWorks" && (
          <>
            <h2 className="text-3xl font-bold mb-4">Our Works</h2>
            <WorkItem
              title="Work Title 1"
              description="Description for Work Item 1."
              imageUrl="https://img.etimg.com/thumb/msid-107300985,width-160,height-120,imgsize-28398/government-sells-71-lakh-tonnes-wheat-so-far-in-open-market-to-keep-prices-under-control.jpg"
            />
            <WorkItem
              title="Work Title 2"
              description="Description for Work Item 2."
              imageUrl="https://static.toiimg.com/thumb/imgsize-123456,msid-101771329,width-300,resizemode-4/101771329.jpg"
            />
            <WorkItem
              title="Work Title 3"
              description="Description for Work Item 3."
              imageUrl="https://static.toiimg.com/thumb/imgsize-123456,msid-103564776,width-300,resizemode-4/103564776.jpg"
            />
          </>
        )}
      </div>
    </div>
  );
};

export default SelectionComponent;
