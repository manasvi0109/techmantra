import React, { useState } from 'react'
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Hero/Hero'
import Services from './Components/Services/Services'
import Title from './Components/Title/Title'
import About from './Components/About/About'
import Pricing from './Components/Pricing/Pricing'
import Contact from './Components/Contact/Contact'
import Footer from './Components/Footer/Footer'
import Users from './Components/Users/Users';

const App = () => {

  const [playState, setPlayState] = useState(false);

  return (
    <div>
     <Navbar/>
     <Hero/>
     <div className="container">
        <Title subTitle='Delivering smart solutions tailored for your business growth.' title='Our Services'/>
        <Services/>
        <About setPlayState={setPlayState}/>
        <Title subTitle='Pricing' title='Pick your Plan'/>
        <Pricing/>
        <Title subTitle='Contact Us' title='Get in Touch'/>
        <Contact/>
        <Users/>
        <Footer/>
     </div>
    </div>
  )
}

export default App