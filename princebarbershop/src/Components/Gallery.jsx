import React, { useState } from 'react'
import FadeContent from './FadeContent'
import BlurText from './BlurText'

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null)

  // Gallery images - using existing images and adding some placeholder descriptions
  const galleryImages = [
    {
      src: "/src/assets/images/barber_hero.jpg",
      alt: "Professional haircut in progress",
      category: "Haircuts",
      description: "Precision cutting techniques"
    },
    {
      src: "/src/assets/images/AboutImage.jpg",
      alt: "Barbershop interior",
      category: "Interior",
      description: "Modern barbershop atmosphere"
    },
    {
      src: "/src/assets/images/aboutimage.png",
      alt: "Barber tools and equipment",
      category: "Tools",
      description: "Professional grooming equipment"
    },
    {
      src: "/src/assets/images/Quest.jpg",
      alt: "Customer satisfaction",
      category: "Service",
      description: "Happy customers, quality service"
    },
    {
      src: "/src/assets/images/barber_hero_image.jpg",
      alt: "Beard grooming service",
      category: "Beard",
      description: "Expert beard styling"
    }
  ]

  const categories = ["All", "Haircuts", "Beard", "Interior", "Tools", "Service"]
  const [activeCategory, setActiveCategory] = useState("All")

  const filteredImages = activeCategory === "All" 
    ? galleryImages 
    : galleryImages.filter(img => img.category === activeCategory)

  return (
    <div id="gallery" className='min-h-screen bg-[#ECEEDF] py-20'>
      <div className=" mx-auto px-4 flex flex-col items-center justify-center">
        <div className="mb-16">
          <FadeContent blur={false} duration={1000} easing="ease-out" initialOpacity={0} delay={500}>
            <h1 className="text-4xl md:text-6xl font-bold text-[#697565] mb-6 geonova">
              <BlurText
                text="Our Work Gallery"
                delay={100}
                animateBy="letters"
                direction="top"
                className=""
              />
            </h1>
          </FadeContent>
          <FadeContent blur={false} duration={1000} easing="ease-out" initialOpacity={0} delay={1000}>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Take a look at our recent work and see why Prince Barbershop is the premier choice in Malawi
            </p>
          </FadeContent>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category, index) => (
            <FadeContent 
              key={category}
              blur={false} 
              duration={600} 
              easing="ease-out" 
              initialOpacity={0} 
              delay={1200 + (index * 100)}
            >
              <button
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                  activeCategory === category
                    ? 'bg-[#b98815] text-white shadow-lg'
                    : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-300'
                }`}
              >
                {category}
              </button>
            </FadeContent>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {filteredImages.map((image, index) => (
            <FadeContent 
              key={index}
              blur={false} 
              duration={800} 
              easing="ease-out" 
              initialOpacity={0} 
              delay={1400 + (index * 200)}
            >
              <div 
                className="group cursor-pointer bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-105"
                onClick={() => setSelectedImage(image)}
              >
                <div className="relative overflow-hidden">
                  <img 
                    src={image.src} 
                    alt={image.alt}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center">
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="bg-white rounded-full p-3">
                        <svg className="w-6 h-6 text-[#b98815]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-2 hero_heading">
                    {image.description}
                  </h3>
                  <span className="text-[#b98815] font-semibold text-sm uppercase tracking-wide">
                    {image.category}
                  </span>
                </div>
              </div>
            </FadeContent>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <FadeContent blur={false} duration={1000} easing="ease-out" initialOpacity={0} delay={2000}>
            <div className="bg-gradient-to-r from-[#b98815] to-[#d6a43a] rounded-2xl p-8 max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-white mb-4 hero_heading">
                Ready to Be Our Next Success Story?
              </h2>
              <p className="text-white/90 mb-6 text-lg">
                Book your appointment today and let us create your perfect look
              </p>
              <button className="px-8 py-4 bg-white text-[#b98815] font-bold rounded-lg hover:bg-gray-100 transition-all duration-300 hover:scale-105 shadow-lg">
                Book Your Appointment
              </button>
            </div>
          </FadeContent>
        </div>
      </div>

      {/* Image Modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-4xl max-h-full">
            <img 
              src={selectedImage.src} 
              alt={selectedImage.alt}
              className="max-w-full max-h-full object-contain rounded-lg"
            />
            <button 
              className="absolute top-4 right-4 text-white bg-black bg-opacity-50 rounded-full p-2 hover:bg-opacity-75 transition-all duration-300"
              onClick={() => setSelectedImage(null)}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <div className="absolute bottom-4 left-4 right-4 bg-black bg-opacity-50 rounded-lg p-4">
              <h3 className="text-white text-xl font-bold mb-2">{selectedImage.description}</h3>
              <span className="text-[#b98815] font-semibold">{selectedImage.category}</span>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default Gallery
