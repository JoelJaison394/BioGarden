import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const SliderWithContent = ({ imagesData }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
  };

  return (
    <div className="mt-10">
      <Slider {...settings}>
        {imagesData.map((item, index) => (
          <div key={index} className="relative mb-0">
            <div className="bg-black bg-opacity-50 absolute top-0 left-0 w-full h-full p-4">
              <div className="w-full lg:w-[70%] mt-16 lg:mt-32">
                <h1 className="text-white sm:text-xl  lg:text-7xl xl:text-5xl font-semibold">{item.text}</h1>
                <p className="text-white text-xs lg:text-xl xl:text-lg mt-4 lg:mt-6">{item.description}</p>
              </div>
            </div>
            <img
              src={item.imageUrl}
              alt=""
              className="w-full h-[50vh] lg:h-[81vh] object-cover"
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default SliderWithContent;
