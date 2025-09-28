  import React from 'react'
import BlurText from './BlurText'
import FadeContent from './FadeContent'
import heroBg from '../assets/images/barber_hero.jpg'
import ink from'../assets/images/ink.png'
import arrow from'../assets/images/arrow.png'
import electric from'../assets/images/electric.png'
import GradientText from './GradientText'

const Hero = () => {
  return (
    <div id="home" className='relative bg-[url("/src/assets/images/barber_hero.jpg")] h-screen bg-cover bg-center flex items-center justify-center text-white text-4xl font-bold'>
        <div className='absolute inset-0 bg-black opacity-80'></div>
         
        <div className='relative z-10 text-center px-6 md:px-0 md:max-w-[1200px]'>
          <FadeContent blur={false} duration={1000} easing="ease-out" initialOpacity={0} delay={2000}>
            <h1 className='text-[43px] leading-[43px]  md:text-[84px] md:leading-[84px] font-extrabold mb-4 granush tracking-wider uppercase'>Welcome to <span className='text-[#D6BD98]'>Prince Executive Barbershop</span></h1>
            </FadeContent>
             <FadeContent blur={false} duration={1000} easing="ease-out" initialOpacity={0} delay={2200}>
            <p className='text-[26px] leading-[26px] md:text-[24px] md:leading-[24px] mb-8 max-w-xl mx-auto  tracking-wider'>Where Style Meets Tradition •<span className='text-[#D6BD98] '> Premium Grooming Experience in Malawi</span> 
            </p>
         
            </FadeContent>
            <div className='flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center'>
              <FadeContent blur={false} duration={1000} easing="ease-out" initialOpacity={0} delay={2400}>
                <a href="#gallery" className="uppercase text-[#2a2c27] inline-flex items-center justify-center px-6 py-3 font-bold  bg-[#DCD7C9] rounded-lg border-[#36515c]  hover:bg-[#D6BD98] hover:border-[#d6a43a] box-border text-[16px] sm:text-[18px] shadow-lg hover:shadow-xl hover:-translate-y-2 transition duration-700 ease-in-out">
                   <span className="relative z-10">View Gallery</span>
                   
                 </a>
              </FadeContent>
              <FadeContent blur={false} duration={1000} easing="ease-out" initialOpacity={0} delay={2600}>
                  <a href="#services" className="uppercase hover:text-[#2a2c27] w-full inline-flex items-center justify-center px-6 py-3 font-bold text-white transition-all duration-300 bg-transparent border-2 rounded-lg border-[#DCD7C9] box-border hover:border-none btn-fill-sweep text-[16px] sm:text-[18px] shadow-lg hover:shadow-xl hover:scale-105">
                   <span className="relative z-10">Our Services</span>
                 </a>
              </FadeContent>
            </div>
         
        </div>
    </div>
  )
}

export default Hero;