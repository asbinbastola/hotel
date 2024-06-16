import React from 'react';

const Contact = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold">Contact Us</h2>
        <p className="text-gray-600 mt-4">
          Far far away, behind the word mountains, far from the countries Vokalia and Consonantia,
          there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the
          Semantics, a large language ocean.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <form className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-gray-700">Name</label>
              <input type="text" id="name" className="border border-gray-300 p-2 rounded-md w-full" placeholder="Your Name" />
            </div>
            <div>
              <label htmlFor="phone" className="block text-gray-700">Phone</label>
              <input type="tel" id="phone" className="border border-gray-300 p-2 rounded-md w-full" placeholder="Your Phone" />
            </div>
            <div>
              <label htmlFor="email" className="block text-gray-700">Email</label>
              <input type="email" id="email" className="border border-gray-300 p-2 rounded-md w-full" placeholder="Your Email" />
            </div>
            <div>
              <label htmlFor="message" className="block text-gray-700">Write Message</label>
              <textarea id="message" className="border border-gray-300 p-2 rounded-md w-full" rows="4" placeholder="Your Message"></textarea>
            </div>
            <button type="submit" className="bg-red-500 text-white py-2 px-4 rounded-md hover:bg-red-600 transition duration-300">Send Message</button>
          </form>
        </div>
        <div className="flex flex-col justify-center">
          <div className="mb-6">
            <h3 className="text-xl font-bold">ADDRESS:</h3>
            <p className="text-gray-600">98 West 21th Street, Suite 721</p>
            <p className="text-gray-600">New York NY 10016</p>
          </div>
          <div className="mb-6">
            <h3 className="text-xl font-bold">PHONE:</h3>
            <p className="text-gray-600">(+1) 234 4567 8910</p>
          </div>
          <div>
            <h3 className="text-xl font-bold">EMAIL:</h3>
            <p className="text-gray-600">info@yourdomain.com</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
