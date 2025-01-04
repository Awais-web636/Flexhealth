import React from 'react'
import Whoweare from '../assets/Whowe.png'
import { FaArrowRight } from 'react-icons/fa';
function Whowe() {
  return (
    <div className='container mx-auto px-16 py-8' id='about'>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="relative">
          <img
            src={Whoweare}
            alt="Caregiver"
            className="rounded-md shadow-md"
          />

        </div>

        <div className="p-4">
          <h2 className="text-2xl font-bold mb-4">Who We Are</h2>
          <p className='text-[16px] text-[#969595]'>
            We’re the leading national marketplace for healthcare professionals and caregivers. We aim to empower
            families to easily find, hire, manage and pay caregivers who match their specific needs, location, budget,
            and timetable.
          </p>
          <p>We’re committed to providing</p>
          <ul className="ml-8 mt-4">
            <li className="flex items-center space-x-2">
              <FaArrowRight />
              <span>Ease to the hiring and managing process.</span>
            </li>
            <li className="flex items-center space-x-2">
              <FaArrowRight/>
              <span>Licensed & experienced providers.</span>
            </li>
            <li className="flex items-center space-x-2">
              <FaArrowRight />
              <span>Responsive customer support team.</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Whowe
