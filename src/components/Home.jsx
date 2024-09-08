
import React from 'react';

const Home = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="grid grid-cols-2 gap-4">
          <div className="aspect-w-1 aspect-h-1">
            <img src="./src/assets/img/homiii.jpg" alt="Room Image 1" className="w-full h-full object-cover rounded-lg" />
          </div>
          <div className="aspect-w-1 aspect-h-1">
            <img src="./src/assets/img/homii.jpg" alt="Room Image 2" className="w-full h-full object-cover rounded-lg" />
          </div>
          <div className="aspect-w-1 aspect-h-1">
            <img src="./src/assets/img/homiv.jpg" alt="Room Image 3" className="w-full h-full object-cover rounded-lg" />
          </div>
          <div className="aspect-w-1 aspect-h-1">
            <img src="./src/assets/img/homv.jpg" alt="Room Image 4" className="w-full h-full object-cover rounded-lg" />
          </div>
        </div>
        <div className="flex flex-col justify-center">
          <h2 className="text-4xl font-bold mb-4">Welcome to our residence</h2>
          <p className="mb-4">
            Beginning blessed second a creepeth. Darkness wherein fish years good air whose after seed appear midst evenin, 
            appear void give third bearing divide one so blessed moved firmament gathered.
          </p>
          <p className="mb-8">
            Beginning blessed second a creepeth. Darkness wherein fish years good air whose after seed appear midst evenin, 
            appear void give third bearing divide one so blessed.
          </p>
          <a href="#" className="bg-red-500 text-white py-2 px-4 rounded-md hover:bg-purple-600 transition duration-300">Learn More</a>
        </div>
      </div>
    </div>
  );
};

export default Home;
