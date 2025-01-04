import { useState } from 'react'
import { Link } from 'react-scroll';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa'
import { HiMenu, HiX } from 'react-icons/hi'
import logo from '../assets/logo.png'

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="bg-white shadow-sm fixed top-0 left-0 w-full z-50">
      <div className="max-w-7xl mx-auto px-4 py-2 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <img src={logo} alt="Log" className='w-[200px] h-[72px]' />

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link
              to="services"
              smooth={true}
              duration={500}
              offset={-80}
              className="block px-3 py-2 text-[#0F0F0F] text-[12px] font-bold cursor-pointer"
            >
              OUR SERVICES
            </Link>
            <Link
              to="about"
              smooth={true}
              duration={500}
              offset={-80}
              className="block px-3 py-2 text-[#0F0F0F] text-[12px] font-bold cursor-pointer"
            >
              ABOUT US
            </Link>
            <Link
              to="contact"
              smooth={true}
              duration={500}
              offset={-80}
              className="block px-3 py-2 text-[#0F0F0F] text-[12px] font-bold cursor-pointer"
            >
              CONTACT US
            </Link>

          </nav>

          {/* Right Section - Login & Social */}
          <div className="hidden md:flex items-center space-x-6">
            <a
              href="/login"
              className="bg-[#00CCFF] text-white px-[40px] py-[14px] rounded-full text-sm font-medium duration-300 hover:bg-transparent hover:border-2 border-[#00CCFF]  hover:text-[#00CCFF] transition-colors"
            >
              LOGIN
            </a>
            <div className="flex items-center space-x-4">
              <a href="https://facebook.com" className="text-[#00CCFF] duration-300 hover:text-[#0659F7]">
                <FaFacebookF className="w-4 h-4" />
              </a>
              <a href="https://twitter.com" className="text-[#00CCFF] duration-300 hover:text-[#0659F7]">
                <FaTwitter className="w-4 h-4" />
              </a>
              <a href="https://instagram.com" className="text-[#00CCFF] duration-300 hover:text-[#0659F7]">
                <FaInstagram className="w-4 h-4" />
              </a>
              <a href="https://linkedin.com" className="text-[#00CCFF] duration-300 hover:text-[#0659F7]">
                <FaLinkedinIn className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-600 hover:text-gray-900 focus:outline-none"
            >
              {isMenuOpen ? (
                <HiX className="h-6 w-6" />
              ) : (
                <HiMenu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a
              href="/services"
              className="block px-3 py-2 text-[#0F0F0F] text-[12px] font-bold  "
            >
              OUR SERVICES
            </a>
            <a
              href="/about"
              className="block px-3 py-2 text-[#0F0F0F] text-[12px] font-bold  "
            >
              ABOUT US
            </a>
            <a
              href="/contact"
              className="block px-3 py-2 text-[#0F0F0F] text-[12px] font-bold "
            >
              CONTACT US
            </a>
            <a
              href="/login"
              className="block px-3 py-2 text-[#00A0DC] font-medium"
            >
              LOGIN
            </a>
            <div className="flex space-x-4 px-3 py-2">
              <a href="https://facebook .com" className="text-gray-400 hover:text-[#00A0DC]">
                <FaFacebookF className="w-4 h-4" />
              </a>
              <a href="https://twitter.com" className="text-gray-400 hover:text-[#00A0DC]">
                <FaTwitter className="w-4 h-4" />
              </a>
              <a href="https://instagram.com" className="text-gray-400 hover:text-[#00A0DC]">
                <FaInstagram className="w-4 h-4" />
              </a>
              <a href="https://linkedin.com" className="text-gray-400 hover:text-[#00A0DC]">
                <FaLinkedinIn className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}