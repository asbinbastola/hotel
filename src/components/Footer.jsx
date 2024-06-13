// src/components/Footer.jsx
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h3 className="text-lg font-bold mb-4">About Us</h3>
          <ul>
            <li><a href="#about" className="hover:underline">About Us</a></li>
            <li><a href="#" className="hover:underline">Terms & Conditions</a></li>
            <li><a href="#" className="hover:underline">Privacy Policy</a></li>
            <li><a href="#room" className="hover:underline">Rooms</a></li>
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-bold mb-4">Contact Us</h3>
          <ul>
            <li>Address: Pokhara Viewpoint</li>
            <li>Phone:9866061842</li>
            <li>Email:sisirbastola92@gmail.com</li>
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-bold mb-4">Newsletter</h3>
          <form>
            <input type="email" placeholder="Email..." className="w-full p-2 mb-4 text-gray-900" />
            <button className="bg-red-500 text-white py-2 px-4 w-full rounded-md hover:bg-purple-600 transition duration-300">Sign Up</button>
          </form>
        </div>
      </div>
      <div className="container mx-auto px-4 mt-8 text-center border-t border-gray-700 pt-4">
        <p>Copyright © 2024 All rights reserved | This template is made by Asbin bastola</p>
        <div className="mt-4 space-x-4">
          <a href="#" className="hover:text-yellow-500"><i className="fab fa-facebook-f"></i></a>
          <a href="#" className="hover:text-yellow-500"><i className="fab fa-twitter"></i></a>
          <a href="#" className="hover:text-yellow-500"><i className="fab fa-linkedin-in"></i></a>
          <a href="#" className="hover:text-yellow-500"><i className="fab fa-vimeo-v"></i></a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
