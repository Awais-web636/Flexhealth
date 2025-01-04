import React, { useState, useEffect } from 'react';
import { FaArrowUp } from 'react-icons/fa';

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  // Toggle visibility of the scroll arrow based on scroll position
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);

    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  // Scroll-to-top function
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <div>
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-5 right-5 bg-[#00CCFF] text-white p-3 rounded-full shadow-md hover:bg-[#0659F7] transition duration-300"
        >
          <FaArrowUp className="w-4 h-4" />
        </button>
      )}
    </div>
  );
}
