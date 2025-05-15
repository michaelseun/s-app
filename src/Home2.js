import React from 'react'
import Navsec from './Pages/User/Navsec'
import Hero from './Pages/User/Hero'
import Courses from './Pages/User/Courses';
import Footer from './Pages/User/Footer';
import Career from './Pages/User/Career';
import Faq from './Pages/User/Faq';

const Home2 = () => {
  return (
    <div>
      <Navsec/>
      <Hero/>
      <Courses/>
      <Career/>
      <Faq/>
      <Footer/>
    </div>
  );
}

export default Home2;
