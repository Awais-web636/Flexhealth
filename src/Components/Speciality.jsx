import React, { useState, useEffect } from 'react';
import { FaArrowRight } from 'react-icons/fa';
import Scaregiver from '../assets/Scaregiver.png'
import Registered from '../assets/Registered.png'
import Physical from '../assets/Physical.png'
function Speciality() {
  const [activeButton, setActiveButton] = useState('Caregiver'); // Set initial active button

  useEffect(() => {
    // Simulate clicking the Caregiver button on page load
    setActiveButton('Caregiver');
  }, []);

  const handleButtonClick = (button) => {
    setActiveButton(button);
  };

  return (
    <div className="container mx-auto px-16 py-8">
       <div className="text-center mb-12">
        <h2 className="text-3xl font-bold mb-2">Our Speciality</h2>
        <div className="w-12 h-1 bg-blue-500 mx-auto"></div>
      </div>
      <div className="flex flex-wrap justify-center space-x-8 mb-8 ">
        <button
          className={`px-4 py-2 rounded-[20px]   hover:bg-blue-[#0047CA] font-bold
          focus:outline-none focus:ring-2
           focus:ring-blue-300 ${activeButton === 'Caregiver' ? 'bg-blue-700 text-white' : 'text-[#0047CA]'
            }`}
          onClick={() => handleButtonClick('Caregiver')}
        >
          Caregiver
        </button>
        <button
          className={`px-4 py-2 rounded-[20px] font-bold  hover:bg-blue-[#0047CA]
          focus:outline-none focus:ring-2
           focus:ring-blue-300 ${activeButton === 'Registered and licensed nurses' ? 'bg-blue-700 text-white'
           : 'text-[#0047CA]'
            }`}
          onClick={() => handleButtonClick('Registered and licensed nurses')}
        >
          Registered and licensed nurses
        </button>
        <button
          className={`px-4 py-2 rounded-[20px] font-bold hover:bg-blue-[#0047CA]
          focus:outline-none focus:ring 2
           focus:ring-blue-300 ${activeButton === 'Physical, occupational and speech therapists'
            ? 'bg-blue-700 text-white'
            : 'text-[#0047CA]'
            }`}
          onClick={() =>
            handleButtonClick('Physical, occupational and speech therapists')
          }
        >
          Physical, occupational and speech therapists
        </button>
      </div>
      <div>
        {activeButton === 'Caregiver' && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="relative">
              <img
                src={Scaregiver}
                alt="Caregiver"
                className="rounded-md shadow-md"
              />

            </div>

            <div className="p-4">
              <h2 className="text-2xl font-bold mb-4">Caregiver</h2>
              <p className='text-[16px] text-[#969595]'>
                A Caregiver's job is in many cases vital for in-home care assistance,
                because he is the one who spends the most time with the elderly
                person. This allows the caregiver to notice even the slightest changes
                in the person's attitude, in addition they also do:
              </p>
              <ul className="ml-8 mt-4">
                <li className="flex items-center space-x-2">
                  <FaArrowRight />
                  <span>Provide assistance with daily activities.</span>
                </li>
                <li className="flex items-center space-x-2">
                  <FaArrowRight />
                  <span>Companionship.</span>
                </li>
                <li className="flex items-center space-x-2">
                  <FaArrowRight />
                  <span>Medication Reminder.</span>
                </li>
                <li className="flex items-center space-x-2">
                  <FaArrowRight />
                  <span>Accompanying appointments.</span>
                </li>
              </ul>
            </div>
          </div>
        )}
        {activeButton === 'Registered and licensed nurses' && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="relative">
              <img
                src={Registered}
                alt="Caregiver"
                className="rounded-md shadow-md"
              />

            </div>

            <div className="p-4">
              <h2 className="text-2xl font-bold mb-4">Registered and licensed nurses</h2>
              <p className='text-[16px] text-[#969595]'>
                One of the major advantages of Home nursing services is the constant care and regular check on the
                patient. Improvement in health is monitored by professionals, who have the right kind of expertise to
                handle different situations. They also will make sure you get a full range of health services at home
                such as:
              </p>
              <ul className="ml-8 mt-4">
                <li className="flex items-center space-x-2">
                  <FaArrowRight />
                  <span>Administration of Medications & Management.</span>
                </li>
                <li className="flex items-center space-x-2">
                  <FaArrowRight />
                  <span>Post-Surgery-Recovery.</span>
                </li>
                <li className="flex items-center space-x-2">
                  <FaArrowRight />
                  <span>I.V. Infusion Therapy.</span>
                </li>
                <li className="flex items-center space-x-2">
                  <FaArrowRight />
                  <span>Wound management.</span>
                </li>
              </ul>
            </div>
          </div>
        )}
        {activeButton === 'Physical, occupational and speech therapists' && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="relative">
              <img
                src={Physical}
                alt="Caregiver"
                className="rounded-md shadow-md"
              />

            </div>

            <div className="p-4">
              <h2 className="text-2xl font-bold mb-4">Physical, occupational and speech therapists</h2>
              <p className='text-[16px] text-[#969595]'>
                Since each of these professionals has a different area of expertise, together they would form a great
                rehabilitation team that by working under the supervision of the patient’s physician can lead to
                getting the patient back to normal, there is an extensive range of activities such as:
              </p>
              <ul className="ml-8 mt-4">
                <li className="flex items-center space-x-2">
                  <FaArrowRight />
                  <span>Balance and gait training, muscle re-education, and therapeutic exercises.</span>
                </li>
                <li className="flex items-center space-x-2">
                  <FaArrowRight className='text-[25px]' />
                  <span>Re-training for self-care skills including feeding, dressing, bathing, grooming, personal
                   hygiene, and toileting.</span>
                </li>
                <li className="flex items-center space-x-2">
                  <FaArrowRight />
                  <span>Identifying normal and abnormal swallowing anatomy and physiology.</span>
                </li>
              </ul>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Speciality;