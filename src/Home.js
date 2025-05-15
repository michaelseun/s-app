import React from 'react'
import Nav from './Pages/Navbar/Nav'
import FirstSection from './Pages/HomeComp/FirstSection'
import SecondSection from './Pages/HomeComp/SecondSection'
import ThirdSection from './Pages/HomeComp/ThirdSection'
import FourthSection from './Pages/HomeComp/FourthSection'






const Home = () => {
  return (
    <div>
      <Nav/>
      <FirstSection/>
      <SecondSection/>
      <ThirdSection/>
      <FourthSection/>
  
    </div>
  )
}

export default Home
