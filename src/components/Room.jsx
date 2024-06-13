// src/components/RoomList.jsx
import React from 'react';

const rooms = [
  {
    name: 'Junior Suite',
    price: '$100/Night',
    image: './src/assets/img/room2.jpg', // replace with actual image URL
    beds: 3,
    baths: 2,
    wifi: true,
    rating: 5,
    description: 'Erat ipsum justo amet duo et elitr dolor, est duo duo eos lorem sed diam stet diam sed stet lorem.'
  },
  {
    name: 'Executive Suite',
    price: '$100/Night',
    image: './src/assets/img/room1.jpg', // replace with actual image URL
    beds: 3,
    baths: 2,
    wifi: true,
    rating: 5,
    description: 'Erat ipsum justo amet duo et elitr dolor, est duo duo eos lorem sed diam stet diam sed stet lorem.'
  },
  {
    name: 'Super Deluxe',
    price: '$100/Night',
    image: './src/assets/img/room4.jpg', // replace with actual image URL
    beds: 3,
    baths: 2,
    wifi: true,
    rating: 5,
    description: 'Erat ipsum justo amet duo et elitr dolor, est duo duo eos lorem sed diam stet diam sed stet lorem.'
  }
];

const Room = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold mb-8 text-center">Explore Our Rooms</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {rooms.map((room, index) => (
          <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
            <img className="w-full h-48 object-cover" src={room.image} alt={room.name} />
            <div className="p-6">
              <div className="flex justify-between items-center">
                <h3 className="text-xl font-bold">{room.name}</h3>
                <span className="bg-yellow-500 text-white px-2 py-1 rounded">{room.price}</span>
              </div>
              <div className="flex items-center mt-2">
                {[...Array(room.rating)].map((_, i) => (
                  <svg key={i} className="w-4 h-4 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10 15l-5.878 3.09L5.5 12.036 1 8.454l5.936-.865L10 2.5l3.064 5.089L19 8.454l-4.5 3.582 1.378 5.454z" />
                  </svg>
                ))}
              </div>
              <div className="flex items-center mt-4">
                <span className="text-gray-600 mr-2">Beds: {room.beds}</span>
                <span className="text-gray-600 mr-2">Baths: {room.baths}</span>
                <span className="text-gray-600">Wifi: {room.wifi ? 'Yes' : 'No'}</span>
              </div>
              <p className="text-gray-600 mt-4">{room.description}</p>
              <div className="mt-4 flex justify-between">
                <button className="bg-yellow-500 text-white px-4 py-2 rounded">View Details</button>
                <button className="bg-blue-600 text-white px-4 py-2 rounded">Book Now</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Room;
