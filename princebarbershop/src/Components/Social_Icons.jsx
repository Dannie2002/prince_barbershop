import React from 'react'
import { FaFacebook, FaInstagram, FaWhatsapp, FaPhone } from 'react-icons/fa';

const Social_Icons = () => {
  return (
    <div className="flex flex-wrap justify-center gap-6">
      <a href="https://facebook.com/princebarbershop" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center w-16 h-16 md:w-20 md:h-20 transition-all duration-300 bg-[#b98815] rounded-full hover:bg-[#d6a43a] hover:scale-110 shadow-lg hover:shadow-xl" aria-label="Facebook">
        <FaFacebook className="text-white" size={30} />
      </a>
      <a href="https://instagram.com/princebarbershop" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center w-16 h-16 md:w-20 md:h-20 transition-all duration-300 bg-[#b98815] rounded-full hover:bg-[#d6a43a] hover:scale-110 shadow-lg hover:shadow-xl" aria-label="Instagram">
        <FaInstagram className="text-white" size={30} />
      </a>
      <a href="https://wa.me/265123456789" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center w-16 h-16 md:w-20 md:h-20 transition-all duration-300 bg-[#b98815] rounded-full hover:bg-[#d6a43a] hover:scale-110 shadow-lg hover:shadow-xl" aria-label="WhatsApp">
        <FaWhatsapp className="text-white" size={30} />
      </a>
      <a href="tel:+265123456789" className="flex items-center justify-center w-16 h-16 md:w-20 md:h-20 transition-all duration-300 bg-[#b98815] rounded-full hover:bg-[#d6a43a] hover:scale-110 shadow-lg hover:shadow-xl" aria-label="Phone">
        <FaPhone className="text-white" size={30} />
      </a>
    </div>
  )
}

export default Social_Icons; 