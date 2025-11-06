import React from 'react'
import FadeContent from './FadeContent'
import BlurText from './BlurText'
import{ supabase } from '../supabase-client'

const Contact = () => {
  const contactInfo = [
    {
      icon: "📍",
      title: "Location",
      details: "Lilongwe City Center, Malawi",
      description: "Conveniently located in the heart of the city"
    },
    {
      icon: "📞",
      title: "Phone",
      details: "+265 123 456 789",
      description: "Call us for appointments"
    },
    {
      icon: "💬",
      title: "WhatsApp",
      details: "+265 987 654 321",
      description: "Quick booking via WhatsApp"
    },
    {
      icon: "✉️",
      title: "Email",
      details: "info@princebarbershop.mw",
      description: "Send us your inquiries"
    }
  ]

  const businessHours = [
    { day: "Monday", hours: "8:00 AM - 7:00 PM" },
    { day: "Tuesday", hours: "8:00 AM - 7:00 PM" },
    { day: "Wednesday", hours: "8:00 AM - 7:00 PM" },
    { day: "Thursday", hours: "8:00 AM - 7:00 PM" },
    { day: "Friday", hours: "8:00 AM - 8:00 PM" },
    { day: "Saturday", hours: "9:00 AM - 6:00 PM" },
    { day: "Sunday", hours: "10:00 AM - 4:00 PM" }
  ]
const [newBooking, setNewBooking] = React.useState({
  first_name: '',
  last_name: '',
  phone: '',
  service: '',
  preferred_date: '',
  message: ''
});

const [isSubmitting, setIsSubmitting] = React.useState(false);
const [submitMessage, setSubmitMessage] = React.useState('');

const handleBookingSubmit = async (e) => {
  e.preventDefault();
  setIsSubmitting(true);
  setSubmitMessage('');

  // Basic validation
  if (!newBooking.first_name.trim() || !newBooking.last_name.trim() || !newBooking.phone.trim() || !newBooking.service.trim()) {
    setSubmitMessage('Error: Please fill in all required fields (First Name, Last Name, Phone, and Service).');
    setIsSubmitting(false);
    return;
  }

  // Debug: Log the data being sent
  console.log('Submitting booking data:', newBooking);

  try {
    const { data, error } = await supabase
      .from('booking_appointment')
      .insert([newBooking]);
    
    if (error) {
      console.error('Supabase error details:', error);
      console.error('Error code:', error.code);
      console.error('Error message:', error.message);
      console.error('Error details:', error.details);
      console.error('Error hint:', error.hint);
      
      // Show more specific error message
      let errorMsg = 'Error: Failed to book appointment. ';
      if (error.message) {
        errorMsg += error.message;
      } else {
        errorMsg += 'Please try again.';
      }
      setSubmitMessage(errorMsg);
    } else {
      console.log('Booking created successfully:', data);
      setSubmitMessage('Success! Your appointment has been booked. We will contact you soon.');
      // Reset form
      setNewBooking({
        first_name: '',
        last_name: '',
        phone: '',
        service: '',
        preferred_date: '',
        message: ''
      });
    }
  } catch (err) {
    console.error('Unexpected error:', err);
    setSubmitMessage(`Error: ${err.message || 'Something went wrong. Please try again.'}`);
  } finally {
    setIsSubmitting(false);
  }
};
  return (
    <section id="contact" className='min-h-screen bg-[#ECEEDF] py-20'>
      <div className="container mx-auto px-4 flex flex-col items-center justify-center">
        <div className="text-center mb-16">
          <FadeContent blur={false} duration={1000} easing="ease-out" initialOpacity={0} delay={500}>
            <h1 className="text-4xl md:text-6xl font-bold text-[#697565] mb-6 geonova uppercase">
              <BlurText
                text="Get In Touch"
                delay={100}
                animateBy="letters"
                direction="top"
                className=""
              />
            </h1>
          </FadeContent>
          <FadeContent blur={false} duration={1000} easing="ease-out" initialOpacity={0} delay={1000}>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Ready for your next cut? Contact us today to book your appointment or visit our barbershop
            </p>
          </FadeContent>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-7xl mx-auto">
          {/* Contact Information */}
          <div>
            <FadeContent blur={false} duration={800} easing="ease-out" initialOpacity={0} delay={1200}>
              <h2 className="text-3xl font-bold text-white mb-8 hero_heading">Contact Information</h2>
            </FadeContent>
            
            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <FadeContent 
                  key={index}
                  blur={false} 
                  duration={600} 
                  easing="ease-out" 
                  initialOpacity={0} 
                  delay={1400 + (index * 200)}
                >
                  <div className="bg-gradient-to-r from-gray-800 to-gray-700 rounded-2xl p-6 hover:from-[#b98815]/20 hover:to-gray-700 transition-all duration-500 hover:scale-105 border border-gray-600 hover:border-[#b98815]/50">
                    <div className="flex items-start space-x-4">
                      <div className="text-4xl">{info.icon}</div>
                      <div>
                        <h3 className="text-xl font-bold text-white mb-2 hero_heading">{info.title}</h3>
                        <p className="text-[#b98815] font-semibold text-lg mb-1">{info.details}</p>
                        <p className="text-gray-300">{info.description}</p>
                      </div>
                    </div>
                  </div>
                </FadeContent>
              ))}
            </div>

            {/* Business Hours */}
            <FadeContent blur={false} duration={800} easing="ease-out" initialOpacity={0} delay={2000}>
              <div className="mt-12 bg-gradient-to-r from-[#b98815] to-[#d6a43a] rounded-2xl p-8">
                <h3 className="text-2xl font-bold text-white mb-6 hero_heading">Business Hours</h3>
                <div className="space-y-3">
                  {businessHours.map((schedule, index) => (
                    <div key={index} className="flex justify-between items-center text-white">
                      <span className="font-semibold">{schedule.day}</span>
                      <span className="font-bold">{schedule.hours}</span>
                    </div>
                  ))}
                </div>
              </div>
            </FadeContent>
          </div>

          {/* Contact Form */}
          <div>
            <FadeContent blur={false} duration={800} easing="ease-out" initialOpacity={0} delay={1200}>
              <h2 className="text-3xl font-bold text-white mb-8 hero_heading">Book Your Appointment</h2>
            </FadeContent>
            
            <FadeContent blur={false} duration={800} easing="ease-out" initialOpacity={0} delay={1400}>
              <form onSubmit={handleBookingSubmit} className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-8 border border-gray-700">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label className="block text-white font-semibold mb-2">First Name</label>
                    <input 
                      type="text" 
                      className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white focus:border-[#b98815] focus:outline-none transition-colors duration-300"
                      placeholder="Your first name"
                      value={newBooking.first_name}
                      onChange={(e) => setNewBooking({...newBooking, first_name: e.target.value})}
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-white font-semibold mb-2">Last Name</label>
                    <input 
                      type="text" 
                      className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white focus:border-[#b98815] focus:outline-none transition-colors duration-300"
                      placeholder="Your last name"
                      value={newBooking.last_name}
                      onChange={(e) => setNewBooking({...newBooking, last_name: e.target.value})}
                      required
                    />
                  </div>
                </div>
                
                <div className="mb-6">
                  <label className="block text-white font-semibold mb-2">Phone Number</label>
                  <input 
                    type="tel" 
                    className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white focus:border-[#b98815] focus:outline-none transition-colors duration-300"
                    placeholder="+265 XXX XXX XXX"
                    value={newBooking.phone}
                    onChange={(e) => setNewBooking({...newBooking, phone: e.target.value})}
                    required
                  />
                </div>

                <div className="mb-6">
                  <label className="block text-white font-semibold mb-2">Service</label>
                  <select className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white focus:border-[#b98815] focus:outline-none transition-colors duration-300"
                    value={newBooking.service}
                    onChange={(e) => setNewBooking({...newBooking, service: e.target.value})}
                  >
                    <option>Select a service</option>
                    <option>Classic Haircut</option>
                    <option>Beard Grooming</option>
                    <option>Hair Styling</option>
                    <option>Hair Wash & Treatment</option>
                    <option>Mustache Trimming</option>
                    <option>Hot Towel Shave</option>
                  </select>
                </div>
                
                <div className="mb-6">
                  <label className="block text-white font-semibold mb-2">Preferred Date & Time</label>
                  <input 
                    type="datetime-local" 
                    className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white focus:border-[#b98815] focus:outline-none transition-colors duration-300"
                    value={newBooking.preferred_date}
                    onChange={(e) => setNewBooking({...newBooking, preferred_date: e.target.value})}
                  />
                </div>

                <div className="mb-6">
                  <label className="block text-white font-semibold mb-2">Message (Optional)</label>
                  <textarea 
                    rows={4}
                    className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white focus:border-[#b98815] focus:outline-none transition-colors duration-300 resize-none"
                    placeholder="Any special requests or notes..."
                    value={newBooking.message}
                    onChange={(e) => setNewBooking({...newBooking, message: e.target.value})}
                  ></textarea>
                </div>

                {/* Submit Message */}
                {submitMessage && (
                  <div className={`mb-6 p-4 rounded-lg text-center font-semibold ${
                    submitMessage.includes('Success') 
                      ? 'bg-green-600 text-white' 
                      : 'bg-red-600 text-white'
                  }`}>
                    {submitMessage}
                  </div>
                )}
                
                <button 
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full px-8 py-4 font-bold rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl ${
                    isSubmitting 
                      ? 'bg-gray-500 cursor-not-allowed' 
                      : 'bg-[#b98815] hover:bg-[#d6a43a] hover:scale-105'
                  } text-white`}
                >
                  {isSubmitting ? 'Booking...' : 'Book Appointment'}
                </button>
              </form>
            </FadeContent>
          </div>
        </div>

        {/* Map Placeholder */}
        <div className="mt-16">
          <FadeContent blur={false} duration={1000} easing="ease-out" initialOpacity={0} delay={2000}>
            <div className="bg-gradient-to-r from-[#b98815] to-[#d6a43a] rounded-2xl p-8 text-center">
              <h3 className="text-2xl font-bold text-white mb-4 hero_heading">Visit Our Barbershop</h3>
              <p className="text-white/90 mb-6">
                Located in the heart of Lilongwe City Center, we're easily accessible by public transport and car
              </p>
              <div className="bg-white rounded-lg p-6 max-w-2xl mx-auto">
                <div className="text-gray-600">
                  <p className="text-lg font-semibold mb-2">📍 Prince Executive Barbershop</p>
                  <p>Lilongwe City Center, Malawi</p>
                  <p className="text-sm mt-2">Near Shoprite, Opposite Standard Bank</p>
                </div>
              </div>
            </div>
          </FadeContent>
        </div>
      </div>
    </section>
  )
}

export default Contact
