import React from "react";

const ServiceCard = ({ heading, description }) => {
  return (
    <div className="bg-slate-200 p-4 ml-1 mr-1 rounded-lg shadow-md  w-80 lg:w-64">
      <h3 className="text-2xl font-semibold mb-2">{heading}</h3>
      <div className="h-1 w-auto bg-green-600"></div>
      <p className="text-gray-600 text-lg mt-4">{description}</p>
    </div>
  );
};

export default ServiceCard;

