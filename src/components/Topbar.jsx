import Ecom from '../assets/Ecom.svg';
import { useState } from 'react';

const Topbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="bg-purple-400 p-4 sticky top-0 z-50">
      <div className="max-w-screen-xl mx-auto flex items-center justify-between">
        <div className="flex items-center">
          <img src={Ecom} alt="Logo" className="h-8 w-auto" />
        </div>

        <div className="flex-grow hidden md:flex mx-4">
          <input
            type="text"
            placeholder="Search..."
            className="w-full p-2 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>

        <div className="flex items-center space-x-4 md:space-x-6"> {/* Increased spacing on larger screens */}
          <div className="hidden md:flex items-center space-x-4">
            <a href="/login" className="text-white px-4 py-2 rounded-md hover:bg-indigo-600 transition-colors duration-300">
              Login
            </a>
            <a href="/signup" className="text-white px-4 py-2 rounded-md hover:bg-indigo-600 transition-colors duration-300">
              Sign Up
            </a>
          </div>

          <a href="/cart" className="text-white text-2xl relative">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="h-6 w-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M3 3h18l-1 9H4l-1-9zm2 4h14l.75 6H5.25L7 7z"
              />
            </svg>
            {/* Optional: Add a cart count badge */}
            {/* <span className="absolute top-0 right-0 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-red-100 transform translate-x-1/2 -translate-y-1/2 bg-red-600 rounded-full">
              3
            </span> */}
          </a>

          <button onClick={toggleMobileMenu} className="md:hidden text-white">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="h-6 w-6"
            >
              {isMobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16m-7 6h14"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-purple-300 p-4 flex flex-col items-center">
          <input
            type="text"
            placeholder="Search..."
            className="w-full mb-4 p-2 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
          <a href="/login" className="text-white w-full text-center py-2 rounded-md hover:bg-indigo-600 transition-colors duration-300 mb-2">
            Login
          </a>
          <a href="/signup" className="text-white w-full text-center py-2 rounded-md hover:bg-indigo-600 transition-colors duration-300">
            Sign Up
          </a>
        </div>
      )}
    </header>
  );
};

export default Topbar;