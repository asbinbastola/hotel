// src/components/ReservationForm.jsx
import React from 'react';

const ReservationForm = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold mb-4 text-center">Reserve Now</h2>
      <div className="bg-white shadow-lg rounded-lg p-8 mt-8 mx-auto max-w-4xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <div>
            <label htmlFor="checkin" className="block text-gray-700">Check In</label>
            <input type="date" id="checkin" className="border border-gray-300 p-2 rounded-md w-full" placeholder="Check In" />
          </div>
          <div>
            <label htmlFor="checkout" className="block text-gray-700">Check Out</label>
            <input type="date" id="checkout" className="border border-gray-300 p-2 rounded-md w-full" placeholder="Check Out" />
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <div>
            <label htmlFor="adults" className="block text-gray-700">Adults</label>
            <select id="adults" className="border border-gray-300 p-2 rounded-md w-full">
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
            </select>
          </div>
          <div>
            <label htmlFor="children" className="block text-gray-700">Children</label>
            <select id="children" className="border border-gray-300 p-2 rounded-md w-full">
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
            </select>
          </div>
        </div>
        <button className="bg-yellow-500 text-white py-2 px-4 rounded-md w-full hover:bg-yellow-600 transition duration-300">Check Availability</button>
      </div>
    </div>
  );
};

export default ReservationForm;
