


import React, { useState } from 'react';

const RestaurantAndMenu = () => {
  const [currentSection, setCurrentSection] = useState('Mains');

  const menuSections = {
    Mains: [
      { name: 'Murgh Tikka Masala', price: '$20.00', description: 'A delightful blend of spices and chicken.' },
      { name: 'Fish Moilee', price: '$35.00', description: 'A rich and creamy fish curry from Kerala.' },
      { name: 'Safed Gosht', price: '$15.00', description: 'A mild and flavorful mutton curry.' },
    ],
    Desserts: [
      { name: 'Banana Split', price: '$11.00', description: 'A delightful dessert with bananas and ice cream.' },
      { name: 'Apple Strudel', price: '$42.00', description: 'A traditional Austrian dessert with apples.' },
      { name: 'Sticky Toffee Pudding', price: '$72.00', description: 'A rich dessert with sticky toffee sauce.' },
    ],
    Drinks: [
      { name: 'Spring Water', price: '$32.00', description: 'Refreshing spring water.' },
      { name: 'Coke, Diet Coke, Coke Zero', price: '$14.00', description: 'Classic sodas.' },
      { name: 'Orange Fanta', price: '$93.00', description: 'Orange flavored soda.' },
    ],
  };

  return (
    <div className="relative bg-cover bg-center" style={{ backgroundImage: "url('./src/assets/img/dish3.jpg')" }}>
      <div className="absolute inset-0 bg-black opacity-70"></div>
      <div className="relative container mx-auto px-4 py-12 text-white">
        <h2 className="text-4xl font-bold text-center mb-8">Our Restaurant Menu</h2>
        <p className="text-center mb-12">Discover our delicious menu items, carefully prepared with fresh ingredients to tantalize your taste buds.</p>
        <div className="flex justify-center mb-8">
          <nav className="flex space-x-4">
            <button onClick={() => setCurrentSection('Mains')} className={`text-white hover:text-yellow-500 ${currentSection === 'Mains' && 'font-bold'}`}>Mains</button>
            <button onClick={() => setCurrentSection('Desserts')} className={`text-white hover:text-yellow-500 ${currentSection === 'Desserts' && 'font-bold'}`}>Desserts</button>
            <button onClick={() => setCurrentSection('Drinks')} className={`text-white hover:text-yellow-500 ${currentSection === 'Drinks' && 'font-bold'}`}>Drinks</button>
          </nav>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {menuSections[currentSection].map((item, index) => (
            <div key={index} className="bg-white bg-opacity-10 p-6 rounded-lg shadow-lg">
              <h4 className="text-lg font-bold mb-2">{item.name}</h4>
              <h3 className="text-xl text-yellow-500 font-semibold mb-2">{item.price}</h3>
              <p className="text-sm">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RestaurantAndMenu;




// import React from 'react';

// const RestaurantAndMenu = () => {
//   const menuItems = [
//     { name: 'Murgh Tikka Masala', price: '$20.00', description: 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.' },
//     { name: 'Fish Moilee', price: '$35.00', description: 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.' },
//     { name: 'Safed Gosht', price: '$15.00', description: 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.' },
//     { name: 'French Toast Combo', price: '$10.00', description: 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.' },
//     { name: 'Vegie Omelet', price: '$8.35', description: 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.' },
//     { name: 'Chorizo & Egg Omelet', price: '$22.00', description: 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.' },
//   ];

//   return (
//     <div className="relative bg-cover bg-center" style={{ backgroundImage: "url('your-image-url')" }}>
//       <div className="absolute inset-0 bg-black opacity-50"></div>
//       <div className="relative container mx-auto px-4 py-12 text-white">
//         <h2 className="text-4xl font-bold text-center mb-8">Our Restaurant Menu</h2>
//         <p className="text-center mb-12">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>
//         <div className="flex justify-center mb-8">
//           <nav className="flex space-x-4">
//             <a href="#" className="text-white hover:text-yellow-500">Mains</a>
//             <a href="#" className="text-white hover:text-yellow-500">Desserts</a>
//             <a href="#" className="text-white hover:text-yellow-500">Drinks</a>
//           </nav>
//         </div>
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//           {menuItems.map((item, index) => (
//             <div key={index} className="bg-white bg-opacity-10 p-6 rounded-lg shadow-lg">
//               <h3 className="text-xl font-bold mb-2">{item.price}</h3>
//               <h4 className="text-lg mb-2">{item.name}</h4>
//               <p className="text-sm">{item.description}</p>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default RestaurantAndMenu;
