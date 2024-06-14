// src/components/Navbar.jsx
import React from 'react';



 

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md fixed top-0 left-0 right-0 z-50">
      <div className="container mx-auto px-4 py-2 flex justify-between items-center">
      <div className="text-2xl font-bold text-gray-800">Sisir's Hotel</div> 
      
        
        <div className="space-x-4 flex">
          <a
            href="#home"
            className="text-gray-900 hover:text-yellow-500 transition duration-300 ease-in-out relative inline-block"
          >
            Home
          </a>
          <a
            href="#room"
            className="text-gray-900 hover:text-yellow-500 transition duration-300 ease-in-out relative inline-block"
          >
            Room
          </a>
          <a
            href="#about"
            className="text-gray-900 hover:text-yellow-500 transition duration-300 ease-in-out relative inline-block"
          >
            About
          </a>
          <a
            href="#event"
            className="text-gray-900 hover:text-yellow-500 transition duration-300 ease-in-out relative inline-block"
          >
            Event
          </a>
          <a
            href="#reservation"
            className="text-gray-900 hover:text-yellow-500 transition duration-300 ease-in-out relative inline-block"
          >
            Reservation
          </a>
          <a
            href="#contact"
            className="text-gray-900 hover:text-yellow-500 transition duration-300 ease-in-out relative inline-block"
          >
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

