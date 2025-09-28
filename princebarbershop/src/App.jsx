import React from 'react'
import Hero from './Components/Hero'
import Header from './Components/Header'
import About from './Components/About'
import Services from './Components/Services'
import Gallery from './Components/Gallery'
import Contact from './Components/Contact'
import Address from'./Components/Address'
import AOS from 'aos';
import 'aos/dist/aos.css'; 
AOS.init();



const App = () => {
  return (
    <div>
      <Header />
      <Hero />
      <About />
      <Services />
      <Gallery />
      <Contact />
      <Address />
    </div>
  )
}

export default App;