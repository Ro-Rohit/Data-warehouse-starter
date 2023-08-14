import React from 'react';

// import animate on scroll
import Aos from 'aos';
import 'aos/dist/aos.css';

// import components
import Hero from './components/Hero';
import About from './components/About';
import Features from './components/Features';
import Testimonials from './components/Testimonials';
import CtaSection from './components/CtaSection';
import Footer from './components/Footer';
import Copyright from './components/Copyright';



const App = () => {
  Aos.init({
    duration: 1000,
    offset: 0,
  })

  return <div className='overflow-hidden'>
    <Hero />
    <About />
    <Features />
    <Testimonials />
    <CtaSection />
    <Footer />
    <Copyright />


  </div>;
};

export default App;
