import React from 'react';
import TopBar from './components/TopBar.jsx';
import NavBar from './components/NavBar.jsx';
import Hero from './components/Hero.jsx';
import Activities from './components/Activities.jsx';
import Bookings from './components/Bookings.jsx';
import Galary from './components/Galary.jsx';
import Contact from './components/Contact.jsx';
import Footer from './components/Footer.jsx';

function App() {
  return (
  <div>
      <TopBar />
      <NavBar />
      <Hero />
      <Activities/>
      <Bookings />
      <Galary />
      <Contact />
      <Footer />
    </div>
  )
}

export default App;