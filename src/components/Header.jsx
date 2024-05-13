import React from "react";
import backgroundImage from "../assets/background_section1.jpg"; // Import the background image

const Header = () => {
  return (
    <nav>
      <div className="navbar bg-custom relative">
        <div className="flex-1">
          <img src="" alt="Logo" className="h-8 w-auto" />
        </div>
        <div className="navbar-end lg:hidden">
          {/* Burger Menu Button */}
          <button className="btn btn-ghost btn-circle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-gray-500 hover:text-gray-800 transition-colors duration-300"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
        </div>
        <div className="flex-none hidden lg:flex">
          {/* Desktop Menu Items */}
          <ul className="menu menu-horizontal px-1 flex justify-center lg:justify-center items-center w-full pl-72">
            <li className="mr-4">
              <a>Home</a>
            </li>
            <li className="mr-4">
              <a>Product</a>
            </li>
            <li className="mr-4">
              <a>Promo</a>
            </li>
            <li className="mr-4">
              <a>About</a>
            </li>
            <li className="mr-4">
              <a>Contact</a>
            </li>
          </ul>
        </div>
        <div className="navbar-end flex-none">
          {/* Magnifying Glass Icon */}
          <button className="btn btn-ghost btn-circle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-gray-500 hover:text-gray-800 transition-colors duration-300"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M15 15l5 5M10 14a4 4 0 11-8 0 4 4 0 018 0z"
              />
            </svg>
          </button>
        </div>
      </div>
      <div className="relative bg-custom">
        <div
          className="bg-cover bg-center bg-no-repeat h-96 flex items-center justify-center"
          style={{
            backgroundImage: `url(${backgroundImage})`, // Set the background image
            backgroundSize: "100% auto", // Scale the background image to be as large as possible within the container's width while maintaining aspect ratio
            backgroundPosition: "center", // Center the background image
          }}
        >
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-400">NEW EXPERIENCE</h1>
            <h3 className="text-xl text-gray-400 mt-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </h3>
            <button className="btn btn-gray400 mt-6 text-white bg-gray-700">
              REGISTER NOW
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
