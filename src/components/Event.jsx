// src/components/Event.jsx
import React from 'react';

const events = [
  {
    date: 'February 26, 2018',
    title: 'Travel Hacks to Make Your Flight More Comfortable',
    description: 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.',
    imageUrl: './src/assets/img/evi.jpg',
  },
  {
    date: 'February 26, 2018',
    title: '5 Job Types That Allow You To Earn As You Travel The World',
    description: 'Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.',
    imageUrl: './src/assets/img/evii.jpg',
  },
  {
    date: 'February 26, 2018',
    title: '30 Great Ideas On Gifts For Travelers',
    description: 'A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country.',
    imageUrl: './src/assets/img/eviii.jpg',
  },
];

const Event = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold">Events</h2>
        <p className="text-gray-600 mt-4">
          Far far away, behind the word mountains, far from the countries Vokalia and Consonantia,
          there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the
          Semantics, a large language ocean.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {events.map((event, index) => (
          <div key={index} className="bg-white shadow-lg rounded-lg overflow-hidden">
            <img src={event.imageUrl} alt={event.title} className="w-full h-48 object-cover" />
            <div className="p-6">
              <div className="text-gray-600 text-sm mb-2">{event.date}</div>
              <h3 className="text-lg font-semibold mb-2">{event.title}</h3>
              <p className="text-gray-600">{event.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Event;
