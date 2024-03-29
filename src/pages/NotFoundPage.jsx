import React from "react";
import { Link } from "react-router-dom";

const NotFoundPage = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gray-100">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-gray-800 mb-4">404</h1>
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Page Not Found</h2>
        <p className="text-lg text-gray-600 mb-8">Oops! The page you're looking for doesn't exist.</p>
        <Link
          to="/"
          className="text-lg text-green-600 hover:text-green-700 transition duration-300"
        >
          Go back to home
        </Link>
      </div>
    </div>
  );
};

export default NotFoundPage;
