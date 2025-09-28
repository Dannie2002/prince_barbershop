import React from 'react'
import FadeContent from './FadeContent'
import BlurText from './BlurText'
import GradientText from './GradientText'
import ClassicBarberIcon from '../assets/images/classic_haircut.svg'

const Services = () => {
  const services = [
    {
      title: "Classic Haircuts",
      description: "Traditional and modern haircuts tailored to your style and face shape",
      price: "From MK 2,500"
    },
    {
      title: "Beard Grooming",
      description: "Professional beard trimming, shaping, and styling services",
      price: "From MK 1,500"
    },
    {
      title: "Hair Styling",
      description: "Premium hair styling for special occasions and everyday looks",
      price: "From MK 3,000"
    },
    {
      title: "Hair Wash & Treatment",
      description: "Deep cleansing and nourishing treatments for healthy hair",
      price: "From MK 2,000"
    },
    {
      title: "Mustache Trimming",
      description: "Precise mustache trimming and styling for the perfect look",
      price: "From MK 1,000"
    },
    {
      title: "Hot Towel Shave",
      description: "Traditional hot towel shave for the ultimate grooming experience",
      price: "From MK 2,500"
    }
  ]

  return (
    <section id="services" className='min-h-screen bg-[#E2DFD0] py-20'>
      <div className="container mx-auto px-4 flex flex-col items-center justify-center">
        <div className="text-center mb-16">
          <FadeContent blur={false} duration={1000} easing="ease-out" initialOpacity={0} delay={500}>
       
            <h1 className="uppercase text-[42px] leading-[42px] text-[#697565] lg:text-[54px] lg:leading-[54px] font-bold text-center mb-8 geonova lg:max-w-2xl">
                
              <BlurText
                text="Our Premium Services"
                delay={380}
                animateBy="words"
                direction="top"
                className=""
              />
              
            </h1>
            
          </FadeContent>
          <FadeContent blur={false} duration={1000} easing="ease-out" initialOpacity={0} delay={1000}>
            <p className="text-xl text-[#584d2b] max-w-2xl mx-auto leading-relaxed">
              Experience the finest grooming services in Malawi with our skilled barbers and premium techniques
            </p>
          </FadeContent>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {services.map((service, index) => (
            <FadeContent 
              key={index}
              blur={false} 
              duration={800} 
              easing="ease-out" 
              initialOpacity={0} 
              delay={1200 + (index * 200)}
            >
              <div className="bg-[#697565] rounded-2xl p-8 transition-all duration-500 hover:scale-105 hover:shadow-2xl group">
                <div className="mb-6 text-center group-hover:scale-110 transition-transform duration-300">
                  <img 
                    src={ClassicBarberIcon} 
                    alt="Barber icon" 
                    className="w-36 h-36 mx-auto"
                  />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4 text-center geonova">
                  {service.title}
                </h3>
                <p className="text-gray-300 mb-6 text-center leading-relaxed">
                  {service.description}
                </p>
                <div className="text-center">
                  <span className="text-[#D6BD98] font-bold text-xl">
                    {service.price}
                  </span>
                </div>
                <div className="mt-6 text-center">
                  <button className="px-12 py-2 bg-[#D6BD98] text-[#F7F4EA] font-semibold rounded-lg hover:bg-[#d6a43a] transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl">
                    Book Now
                  </button>
                </div>
              </div>
            </FadeContent>
          ))}
        </div>

        <div className="text-center mt-16 transition-all duration-500 hover:scale-105 hover:shadow-2xl">
          <FadeContent blur={false} duration={1000} easing="ease-out" initialOpacity={0} delay={2000}>
            <div className="bg-gradient-to-r from-[#D6BD98] to-[#697565] rounded-2xl p-8 max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-white mb-4 geonova">
                Ready for Your Next Cut?
              </h2>
              <p className="text-white/90 mb-6 text-lg">
                Book your appointment today and experience the Prince Barbershop difference
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="px-8 py-4 bg-[#DCD7C9] text-[#b98815] font-bold rounded-lg hover:bg-gray-100 transition-all duration-300 hover:scale-105 shadow-lg">
                  Call: +265 123 456 789
                </button>
                <button className="px-8 py-4 bg-transparent border-2 border-[#DCD7C9] text-white font-bold rounded-lg hover:bg-white hover:text-[#b98815] transition-all duration-300 hover:scale-105">
                  WhatsApp Booking
                </button>
              </div>
            </div>
          </FadeContent>
        </div>
      </div>
    </section>
  )
}

export default Services
