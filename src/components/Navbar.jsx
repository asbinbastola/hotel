import React, { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-white shadow-md fixed top-0 left-0 right-0 z-50">
      <div className="container mx-auto px-4 py-2 flex justify-between items-center">
        <div className="flex items-center space-x-4">
          <a
            href="#home"
            className="text-gray-900 hover:text-yellow-500 transition duration-300 ease-in-out relative inline-block"
          >
            Home
          </a>
        </div>
        <div className="flex items-center">
          <button
            onClick={toggleMenu}
            className="text-gray-900 hover:text-yellow-500 transition duration-300 ease-in-out md:hidden"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          </button>
          <div className={`${isOpen ? 'block' : 'hidden'} md:flex md:space-x-4 ml-auto`}>
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
      </div>
      <div className={`${isOpen ? 'block' : 'hidden'} md:hidden bg-white`}>
        <a
          href="#room"
          className="block text-gray-900 hover:text-yellow-500 transition duration-300 ease-in-out py-2 px-4"
        >
          Room
        </a>
        <a
          href="#about"
          className="block text-gray-900 hover:text-yellow-500 transition duration-300 ease-in-out py-2 px-4"
        >
          About
        </a>
        <a
          href="#event"
          className="block text-gray-900 hover:text-yellow-500 transition duration-300 ease-in-out py-2 px-4"
        >
          Event
        </a>
        <a
          href="#reservation"
          className="block text-gray-900 hover:text-yellow-500 transition duration-300 ease-in-out py-2 px-4"
        >
          Reservation
        </a>
        <a
          href="#contact"
          className="block text-gray-900 hover:text-yellow-500 transition duration-300 ease-in-out py-2 px-4"
        >
          Contact
        </a>
      </div>
    </nav>
  );
};

export default Navbar;





// import React from 'react';



 

// const Navbar = () => {
//   return (
//     <nav className="bg-white shadow-md fixed top-0 left-0 right-0 z-50">
//       <div className="container mx-auto px-4 py-2 flex justify-between items-center">
    
      
        
//         <div className="space-x-4 flex">
//           <a
//             href="#home"
//             className="text-gray-900 hover:text-yellow-500 transition duration-300 ease-in-out relative inline-block"
//           >
//             Home
//           </a>
//           <a
//             href="#room"
//             className="text-gray-900 hover:text-yellow-500 transition duration-300 ease-in-out relative inline-block"
//           >
//             Room
//           </a>
//           <a
//             href="#about"
//             className="text-gray-900 hover:text-yellow-500 transition duration-300 ease-in-out relative inline-block"
//           >
//             About
//           </a>
//           <a
//             href="#event"
//             className="text-gray-900 hover:text-yellow-500 transition duration-300 ease-in-out relative inline-block"
//           >
//             Event
//           </a>
//           <a
//             href="#reservation"
//             className="text-gray-900 hover:text-yellow-500 transition duration-300 ease-in-out relative inline-block"
//           >
//             Reservation
//           </a>
//           <a
//             href="#contact"
//             className="text-gray-900 hover:text-yellow-500 transition duration-300 ease-in-out relative inline-block"
//           >
//             Contact
//           </a>
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;

