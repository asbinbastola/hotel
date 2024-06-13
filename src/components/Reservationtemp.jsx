
import React from 'react';

const Reservationtemp = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold mb-4">Reserve Now</h2>
      <div className="bg-white shadow-lg rounded-lg p-8 mx-auto max-w-4xl">
        <form className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label htmlFor="name" className="block text-gray-700">Name</label>
            <input type="text" id="name" className="border border-gray-300 p-2 rounded-md w-full" placeholder="Name" />
          </div>
          <div>
            <label htmlFor="phone" className="block text-gray-700">Phone</label>
            <input type="tel" id="phone" className="border border-gray-300 p-2 rounded-md w-full" placeholder="Phone" />
          </div>
          <div>
            <label htmlFor="email" className="block text-gray-700">Email</label>
            <input type="email" id="email" className="border border-gray-300 p-2 rounded-md w-full" placeholder="Email" />
          </div>
          <div>
            <label htmlFor="checkin" className="block text-gray-700">Date Check In</label>
            <input type="date" id="checkin" className="border border-gray-300 p-2 rounded-md w-full" placeholder="Date Check In" />
          </div>
          <div>
            <label htmlFor="checkout" className="block text-gray-700">Date Check Out</label>
            <input type="date" id="checkout" className="border border-gray-300 p-2 rounded-md w-full" placeholder="Date Check Out" />
          </div>
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
          <div className="col-span-1 md:col-span-2">
            <label htmlFor="notes" className="block text-gray-700">Notes</label>
            <textarea id="notes" className="border border-gray-300 p-2 rounded-md w-full" rows="4" placeholder="Notes"></textarea>
          </div>
          <div className="col-span-1 md:col-span-2 flex justify-center">
            <button type="submit" className="bg-red-500 text-white py-2 px-4 rounded-md hover:bg-purple-600 transition duration-300">Reserve Now</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Reservationtemp;
