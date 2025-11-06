import React from 'react'
import BlurText from './BlurText'
import AboutImage from'../assets/images/Quest.jpg' 
import aboutimage from'../assets/images/aboutimage.png'
import blueimage from'../assets/images/AboutImage.jpg'
import Jaliwa from'../assets/images/Jaliwa.jpg'
import FadeContent from './FadeContent'
import GradientText from './GradientText'
import CountUp from './CountUp'
import Noise from'../assets/images/noise.png' 

const About = () => {
  return (
    <section id="about" className='min-h-screen bg-[#ECEEDF] relative' >
   
      <div className="container mx-auto py-6 px-4 lg:py-24 flex flex-col items-center justify-center">
        <h1 className="uppercase text-[42px] leading-[42px] text-[#494709] lg:text-[54px] lg:leading-[54px] font-bold text-center mb-8 granush lg:max-w-2xl"data-aos="fade-down" data-aos-duration="2500">Know Everything about <span className='text-[#D6BD98]'>Prince Barbershop</span></h1>


       <div className="grid grid-cols-1 md:grid-cols-6 gap-6 md:max-w-[1200px] md:auto-rows-[180px]">

           <div className="relative col-1 md:col-span-3 md:row-span-2 overflow-hidden rounded-2xl group bg-[#0b0b0b] p-8 md:p-12" data-aos="fade-right" data-aos-duration="2500">
            <div className='absolute inset-0 opacity-10 -z-10'>
              <img src={Noise} alt="Noise texture" className='w-full h-full object-cover'/>
            </div>
            <div className='rounded-full blur-2xl absolute top-0 left-0 w-22 h-full bg-gradient-to-b from-[#37569f] via-transparent to-transparent -z-10'></div>
             <div className='rounded-full blur-2xl absolute bottom-0  right-0 w-22 h-33 bg-gradient-to-b from-[#37569f] via-transparent to-transparent -z-10'></div>
       <h1 className='font-bold text-3xl md:text-4xl granush uppercase tracking-wide text-[#d9d8d1]'> <span className='text-[#D6BD98]'>Who</span> we are</h1>
       <p className='mt-4 text-[20px] md:text-[19px] text-[#F7F4EA] leading-relaxed'>Prince Executive Barbershop is Malawi's premier grooming destination, where traditional barbering techniques meet modern style. 
        We've been serving the community with exceptional haircuts, beard grooming, and styling services for over a decade.</p>
        <a href='' className='inline-block mt-6 px-12 rounded-lg py-2 text-[#697565] bg-[#F7F4EA] hover:bg-[#D6BD98] font-bold border-b-2 border-transparent tracking-wider hover:border-white hover:scale-104 hover:text-white transition-all duration-300'>Learn More</a>
            </div>
              <div className="col-1 md:col-span-3 md:row-span-2 overflow-hidden rounded-2xl relative group" data-aos="slide-left" data-aos-duration="2500">
               <img src={Jaliwa} alt="About us image" className='w-full h-full object-cover block'/>
              
               </div>
            
            <div className="h-auto relative overflow-hidden flex flex-col md:flex-row md:row-span-2 md:col-span-4 group p-8 md:p-12 bg-linear-[90deg,#697565] rounded-2xl" data-aos="fade-up" data-aos-duration="2600">
               <div className='absolute inset-0 opacity-10 -z-10'>
              <img src={Noise} alt="Noise texture" className='w-full h-full object-cover'/>
            </div>
             <div className='space-y-4 md:w-1/2 lg:space-y-0'>
                    <h1 className='font-bold text-[42px] leading-[42px] md:text-4xl text-[#cda70d] granush uppercase tracking-normal'>
              How Our Barbershop Started
                      </h1>
                     <p className="text-[#F7F4EA] leading-relaxed text-[20px] md:text-[20+px]">Founded with a vision to bring world-class grooming services to Malawi, Prince Barbershop began as a small shop with big dreams. Our founder, Prince, started with just one chair and a passion for the art of barbering.</p>
              </div>
             <div className='md:w-1/2 mt-6 md:mt-0'>
             <img src={aboutimage} alt="About us image" className='w-full h-full object-contain block rounded-lg'/>

              </div>

            </div>

            <div className="overflow-hidden flex flex-col group md:col-span-2 md:row-span-2 p-8 md:p-6 bg-[#697565] hover:scale-105 rounded-2xl space-y-8 lg:space-y-6 items-center justify-center text-center text-white" data-aos="fade-left" data-aos-duration="2800">
          
              <div>
                     <GradientText colors={['#D6BD98','#D6BD98']} animationSpeed={2}>
                    <CountUp end={99} suffix='%'  duration={3} className="font-bold text-3xl md:text-[52px] geonova uppercase tracking-wide"/>
                  </GradientText>
                <h2 className="text-lg">Customer Satisfaction</h2>
              </div>
               <div>
                     <GradientText colors={['#d5af2f','#D6BD98','#D6BD98']} animationSpeed={2}>
                    <CountUp end={10} suffix='+'  duration={5} className="font-bold text-3xl md:text-[52px] geonova uppercase tracking-wide"/>
                  </GradientText>
                <h2 className="text-lg">Years of experience</h2>
              </div>
                <div className='flex flex-col items-center justify-center space-y-0'>
                  <GradientText colors={['#d5af2f','#D6BD98']} animationSpeed={2}>
                    <CountUp end={500} suffix='+'  duration={3} className="font-bold text-3xl md:text-[52px] geonova uppercase tracking-wide"/>
                  </GradientText>
                <h2 className="text-lg">Happy Clients Served</h2>
              </div>
          

            </div>

     </div>
     <div>



     </div>

   </div>




    
    </section>
  )
}

export default About