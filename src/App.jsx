// src/App.jsx
import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ReservationForm from './components/ReservationForm';
import Home from './components/Home';
import Room from './components/Room';
import About from './components/About';
import Event from './components/Event';
import RestaurantAndMenu from './components/ResturantAndMenu';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Reservationtemp from './components/Reservationtemp';
//import Reservation from './components/Reservation';

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <ReservationForm />
      <section id="home" className="mt-12">
        <Home />
      </section>
      <section id="room" className="mt-12">
        <Room />
      </section>
      <section id="restaurant-and-menu" className="mt-12">
        <RestaurantAndMenu />
      </section>
      <section id="event" className="mt-12">
        <Event />
      </section>
      <section id="about" className="mt-12">
        <About />
      </section>
      <section id="reservation" className="mt-12">
        <Reservationtemp/>
      </section>
     
      <section id="contact" className="mt-12">
        <Contact />
      </section>

      <Footer />
    </div>
  );
}

export default App;



