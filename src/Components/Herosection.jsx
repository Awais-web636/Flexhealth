import { FaPlay } from 'react-icons/fa';
import Heroimage from '../assets/Hero image.png';

export default function Herosection() {
  return (
    <div className="min-h-screen bg-blue-600 relative overflow-hidden flex flex-col lg:flex-row">
      {/* Main content */}
      <div className="container mx-auto px-4 sm:px-8 lg:px-16 pt-12 pb-32 flex flex-col justify-between lg:w-1/2">
        <div className="max-w-2xl">
          <h1 className="text-[24px] md:text-[40px] lg:text-[52px] md:w-[800px] font-bold text-white mb-8 mt-8">
            The Biggest Care Services Platform In America
          </h1>

          <div className="mb-12">
            <p className="text-[#00CCFF] text-[20px] md:text-[30px] mb-4">
              Click Play To See How It Works
            </p>
            <button
              className="bg-white/10 hover:bg-white/20 text-white rounded-full p-4 transition-all duration-300"
              onClick={() => console.log('Play clicked')}
            >
              <FaPlay className="w-8 h-8" />
            </button>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 mb-8">
            <button
              className="px-6 py-3 bg-[#FFFFFF] text-[#0659F7] cursor-pointer hover:text-[#00CCFF] rounded-[30px] font-semibold transition-all duration-300"
              onClick={() => console.log('Find a Caregiver clicked')}
            >
              Find a Caregiver
            </button>
            <button
              className="px-6 py-3 bg-[#FFFFFF] text-[#0659F7] cursor-pointer hover:text-[#00CCFF] rounded-[30px] font-semibold transition-all duration-300"
              onClick={() => console.log('Work with Us clicked')}
            >
              Work with Us
            </button>
          </div>
        </div>
      </div>

      {/* Image section with increased margin */}
      <div className="relative py-4 w-full lg:w-1/2 lg:ml-8 flex justify-center md:mt-4"> {/* Adjusted lg:ml-8 for less space on larger screens */}
        <img
          src={Heroimage}
          alt="Healthcare professionals providing care"
          className="object-cover w-full max-w-[400px] h-auto"
        />
      </div>

      {/* Background hexagon shape */}
      <div className="absolute left-0 bottom-0 opacity-10">
        <div className="w-48 h-48 border-8 border-white/20 rotate-45 -translate-x-24 translate-y-24" />
      </div>

      {/* Curved bottom edge */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg
          viewBox="0 0 1440 200"
          className="w-full h-auto"
          preserveAspectRatio="none"
        >
          <path
            fill="#ffffff"
            d="M0,32L48,37.3C96,43,192,53,288,80C384,107,480,149,576,154.7C672,160,768,128,864,112C960,96,1056,96,1152,90.7C1248,85,1344,75,1392,69.3L1440,64L1440,200L1392,200C1344,200,1248,200,1152,200C1056,200,960,200,864,200C768,200,672,200,576,200C480,200,384,200,288,200C192,200,96,200,48,200L0,200Z"
          />
        </svg>
      </div>
    </div>
  );
}