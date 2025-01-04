import { useState } from 'react'
import { FaFacebook, FaLinkedin, FaInstagram } from 'react-icons/fa'

export default function Contactus() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle form submission here
    console.log('Form submitted:', formData)
  }

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-600 to-blue-400 p-4 md:p-8 my-16 mx-4 md:mx-16 rounded-[20px]" id='contact'>
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Left Side - Contact Form */}
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6">
            <h2 className="text-3xl font-bold text-white mb-8 text-center">Contact Us</h2>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <input
                  type="text"
                  placeholder="Name *"
                  className="w-full bg-white/10 border-0 rounded-md px-4 py-2 text-white placeholder:text-gray-300 focus:outline-none focus:ring-2 focus:ring-cyan-400"
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  required
                />
              </div>

              <div>
                <input
                  type="email"
                  placeholder="Email *"
                  className="w-full bg-white/10 border-0 rounded-md px-4 py-2 text-white placeholder:text-gray-300 focus:outline-none focus:ring-2 focus:ring-cyan-400"
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  required
                />
              </div>

              <div className="flex gap-2">
                <select className="bg-white/10 border-0 text-white rounded-md px-3 py-2 w-24 focus:outline-none focus:ring-2 focus:ring-cyan-400">
                  <option value="+1">+1</option>
                  <option value="+44">+44</option>
                  <option value="+91">+91</option>
                </select>
                <input
                  type="tel"
                  placeholder="Phone Number"
                  className="flex-1 bg-white/10 border-0 rounded-md px-4 py-2 text-white placeholder:text-gray-300 focus:outline-none focus:ring-2 focus:ring-cyan-400"
                  value={formData.phone}
                  onChange={(e) => setFormData({...formData, phone: e.target.value})}
                />
              </div>

              <div>
                <textarea
                  placeholder="Message *"
                  className="w-full bg-white/10 border-0 rounded-md px-4 py-2 text-white placeholder:text-gray-300 focus:outline-none focus:ring-2 focus:ring-cyan-400 min-h-[150px] resize-none"
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  required
                />
              </div>

              <button
                type="submit"
                className="w-full bg-cyan-400 hover:bg-cyan-500 text-white font-semibold py-3 rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-400"
              >
                SEND
              </button>
            </form>
          </div>

          {/* Right Side - Map and Social Links */}
          <div className="space-y-6">
            <div className="w-full h-[300px] md:h-[400px] rounded-lg overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d387193.30596073366!2d-74.25986548248684!3d40.69714941932609!2m3!1f0!2f0!3f0!3m2!1i1024!2i768 !4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2s!4v1672909876543!5m2!1sen!2s"
                className="w-full h-full border-0"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>

            <div className="text-center">
              <p className="text-white text-lg mb-4">
                We are available 24/7 to assist you, so you can find the best caregivers.
              </p>
              <div className="flex justify-center gap-6">
                <a href="#" className="text-white hover:text-cyan-400 transition-colors">
                  <FaFacebook className="w-6 h-6" />
                </a>
                <a href="#" className="text-white hover:text-cyan-400 transition-colors">
                  <FaInstagram className="w-6 h-6" />
                </a>
                <a href="#" className="text-white hover:text-cyan-400 transition-colors">
                  <FaLinkedin className="w-6 h-6" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}