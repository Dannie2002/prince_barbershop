import React, { useState, useEffect } from 'react'
import FadeContent from './FadeContent'

const Header = () => {
  const [navOpen, setNavOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className={`fixed top-0 left-0 z-50 w-full transition-all duration-300 ease-in-out ${
      isScrolled 
        ? 'bg-[#697565]/90 backdrop-blur-md border-b border-white/20 shadow-lg' 
        : 'bg-transparent'
    }`}>
      <div className='flex items-center px-4 lg:justify-between lg:px-16'>
        <FadeContent blur={false} duration={1000} easing="ease-out" initialOpacity={0} delay={400}>
        <a href="#home">
          <h1 className="py-4 font-bold text-white text-[18px] big_heading drop-shadow-lg" >
            Prince<span className='text-[#D6BD98]'> Barbershop</span> 
          </h1>
        </a>
        </FadeContent>

        {/* Desktop Nav */}
        <FadeContent blur={false} duration={1000} easing="ease-out" initialOpacity={0} delay={1000}>
        <nav className='items-center justify-center hidden px-4 lg:gap-14 lg:flex lg:mx-auto lg:relative lg:py-0 big_heading'>
            <a href="#home" className='text-[16px] font-semibold text-white hover:text-[#b98815] transition-all uppercase drop-shadow-md'>Home</a>
            <a href="#about" className='text-[16px] font-semibold text-white hover:text-[#b98815] transition-all uppercase drop-shadow-md'>About</a>
            <a href="#services" className='text-[16px] font-semibold text-white hover:text-[#b98815] transition-all uppercase drop-shadow-md'>Services</a>
            <a href="#gallery" className='text-[16px] font-semibold text-white hover:text-[#b98815] transition-all uppercase drop-shadow-md'>Gallery</a>
            <a href="#contact" className='text-[16px] font-semibold text-white hover:text-[#b98815] transition-all uppercase drop-shadow-md'>Contact</a>
        </nav>
        </FadeContent>

        {/* Mobile Menu Button */}
        <button
          className='z-50 ml-auto lg:hidden'
          onClick={() => setNavOpen(!navOpen)}
          aria-label="Open navigation"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-white drop-shadow-lg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
<FadeContent blur={false} duration={1000} easing="ease-out" initialOpacity={0} delay={1500}>
        <button className='uppercase font-bold tracking-wide hidden px-4 py-2 text-[#697565] transition duration-300 bg-[#F7F4EA] rounded lg:block hover:bg-[#a2a6af]  big_heading text-[14px]'>
          Book Now
        </button>
        </FadeContent>
      </div>

      {/* Mobile Nav Overlay */}
      {navOpen && (
        <>
          {/* Backdrop */}
          <div 
            className='fixed inset-0 z-40 bg-black bg-opacity-50'
            onClick={() => setNavOpen(false)}
          />
          
          {/* Mobile Navigation */}
          <nav className='fixed top-0 bottom-0 left-0 right-0 z-50 flex flex-col items-center justify-center gap-6 shadow-2xl bg-gradient-to-br from-white/98 to-gray-50/95 backdrop-blur-xl lg:hidden'>
            {/* Close Button */}
            <button
              className='absolute p-3 transition-all duration-300 rounded-full top-6 right-6 hover:bg-gray-100'
              onClick={() => setNavOpen(false)}
              aria-label="Close navigation"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            
            {/* Logo in Mobile Nav */}
            <div className='absolute top-6 left-6'>
              <h2 className="text-xl font-bold text-gray-800">Prince Barbershop</h2>
            </div>
            
            {/* Navigation Links */}
            <div className='flex flex-col items-center gap-6 mt-16'>
              <a href="#home" className='text-2xl font-semibold text-gray-800 hover:text-[#b98815] transition-all duration-300 hover:scale-105' onClick={() => setNavOpen(false)}>Home</a>
              <a href="#about" className='text-2xl font-semibold text-gray-800 hover:text-[#b98815] transition-all duration-300 hover:scale-105' onClick={() => setNavOpen(false)}>About</a>
              <a href="#services" className='text-2xl font-semibold text-gray-800 hover:text-[#b98815] transition-all duration-300 hover:scale-105' onClick={() => setNavOpen(false)}>Services</a>
              <a href="#gallery" className='text-2xl font-semibold text-gray-800 hover:text-[#b98815] transition-all duration-300 hover:scale-105' onClick={() => setNavOpen(false)}>Gallery</a>
              <a href="#contact" className='text-2xl font-semibold text-gray-800 hover:text-[#b98815] transition-all duration-300 hover:scale-105' onClick={() => setNavOpen(false)}>Contact</a>
            </div>
            
            {/* Book Now Button for Mobile */}
            <button className='px-8 py-4 text-white font-bold bg-gradient-to-r from-[#9b915a] to-[#d4a017] rounded-xl hover:from-[#a07712] hover:to-[#b88814] transition-all duration-300 mt-8 shadow-lg hover:shadow-xl hover:scale-105'>
              Book Now
            </button>
          </nav>
        </>
      )}
    </div>
  )
}

export default Header