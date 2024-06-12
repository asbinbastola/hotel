import React from "react";

const Hero = () => {
  return (
    <div
      className="relative h-screen bg-cover bg-center"
      style={{ backgroundImage: "url('./src/assets/img/pic1.jpg')" }}
    >
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          A Best Place To Stay
        </h1>
        <p className="text-xl mb-8">WELCOME TO 5 ⭐ HOTEL</p>
        
      </div>
    </div>
  );
};

export default Hero;
