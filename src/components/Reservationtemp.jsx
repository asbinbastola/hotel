
import React, { useState } from 'react';

const Reservationtemp = () => {
    return (
        <div className="max-w-xl mx-auto p-8 bg-white rounded-lg shadow-lg opacity-100">
            <form className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Name</label>
                        <input type="text" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm" placeholder="Name" />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Phone</label>
                        <input type="text" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm" placeholder="Phone" />
                    </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Email</label>
                        <input type="email" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm" placeholder="Email" />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Date Check In</label>
                        <input type="date" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm" placeholder="mm/dd/yyyy" />
                    </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Date Check Out</label>
                        <input type="date" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm" placeholder="mm/dd/yyyy" />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Adults</label>
                        <select className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm">
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                        </select>
                    </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Children</label>
                        <select className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm">
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                        </select>
                    </div>
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-700">Notes</label>
                    <textarea className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm" placeholder="Notes"></textarea>
                </div>
                <div className="text-center">
                    <button type="submit" className="px-6 py-2 bg-red-600 text-white rounded-full hover:bg-purple-700 transition duration-300">Reserve Now</button>
                </div>
            </form>
        </div>
    );
};





const Reservation = () => {
    const [showForm, setShowForm] = useState(false);

    return (
        <div className="relative bg-cover bg-center h-screen" style={{ backgroundImage: 'url(./src/assets/img/pool.jpg)' }}>
            <div className="absolute inset-0 bg-black opacity-50"></div>
            <div className="relative z-10 flex items-center justify-center h-screen">
                <div className="text-center text-white">
                    <h1 className="text-2xl md:text-4xl font-bold mb-4   opacity-90">A Best Place To Stay. Reserve Now!</h1>
                    <button 
                        onClick={() => setShowForm(true)} 
                        className="px-6 py-2 border-2 border-white text-white rounded-full hover:bg-white hover:text-black transition duration-300">
                        Reserve Now
                    </button>
                </div>
            </div>
            {showForm && (
                <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 z-20">
                    <Reservationtemp/>
                </div>
            )}
        </div>
    );
};

export default Reservation;





