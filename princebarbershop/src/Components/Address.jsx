import React from 'react'
import Social_Icons from './Social_Icons'
import FadeContent from './FadeContent'
import BlurText from './BlurText'

const Address = () => {
  return (
    <div className='bg-[#ECEEDF] py-16'>
        <div className='p-6 lg:px-44 lg:py-22 mx-auto flex flex-col items-center justify-center'>
            <h1 className='font-bold text-4xl md:text-[52px] max-w-2xl leading-tight tracking-wide hero_heading text-center mb-8'>
                <BlurText
                  text="Connect With Us"
                  delay={60}
                  animateBy="letters"
                  direction="top"
                  className=""
                />
            </h1>
            <p className="text-lg md:text-xl text-gray-600 text-center mb-8 max-w-2xl">
              Follow us on social media for the latest updates, styling tips, and special offers
            </p>
            <div className='p-6 flex flex-col lg:w-6xl rounded-2xl items-center justify-between lg:border-2 border-gray-300 bg-white shadow-lg'>
              <Social_Icons />
            </div>

            <div className="mt-12 text-center">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4 hero_heading">Visit Our Barbershop</h2>
              <p className="text-lg text-gray-600 mb-4">📍 Lilongwe City Center, Malawi</p>
              <p className="text-gray-600">Near Shoprite, Opposite Standard Bank</p>
            </div>

        </div>

      </div>
  )
}

export default Address;