import React from 'react';
import ImageSlider from './ImageSlider';
import heroBg from '../assets/images/barber_hero.jpg';
import Barbershop from '../assets/images/babershop.jpg';
import baber_1 from '../assets/images/baber_1.jpg';

const images = [heroBg, Barbershop, baber_1];

const Hero = () => (
  <section id="home" className="h-screen">
    <ImageSlider images={images} className="h-screen">
      <div className="items-start justify-center h-full flex flex-col lg:px-24">
        <h4 className="text-[43px] leading-[43px] md:text-[20px] md:leading-[20px] text-[#ffffff] strenx font-extrabold mb-4 tracking-wider">
          Welcome to <span className="text-[#D6BD98]">Prince Executive Barbershop</span>
        </h4>
        <h1 className="text-[26px] leading-[26px] strenx text-[#ffffff] md:text-[64px] md:leading-[64px] mb-8 max-w-4xl tracking-wider">
          More Than a Haircut,<br />
          It's an <span className="text-[#A0E6D7]">experience</span>
        </h1>
        <p className="text-[18px] lg:max-w-2xl text-[#ffffff]">
          Serving the community for over 20 years with quality cuts and great conversation
        </p>
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center mt-8">
          <a
            href="#gallery"
            className="uppercase text-[#2a2c27] inline-flex items-center justify-center px-6 py-3 font-bold bg-[#DCD7C9] rounded-lg border-[#36515c] hover:bg-[#D6BD98] hover:border-[#d6a43a] box-border text-[16px] sm:text-[18px] shadow-lg hover:shadow-xl hover:-translate-y-2 transition duration-700 ease-in-out"
          >
            <span className="relative z-10">View Gallery</span>
          </a>
          <a
            href="#services"
            className="uppercase hover:text-[#2a2c27] w-full inline-flex items-center justify-center px-6 py-3 font-bold text-white transition-all duration-300 bg-transparent border-2 rounded-lg border-[#DCD7C9] box-border hover:border-none text-[16px] sm:text-[18px] shadow-lg hover:shadow-xl hover:scale-105"
          >
            <span className="relative z-10">Our Services</span>
          </a>
        </div>
      </div>
    </ImageSlider>
  </section>
);

export default Hero;