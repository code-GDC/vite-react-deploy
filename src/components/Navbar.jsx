import { useState } from 'react';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="bg-purple-100 text-gray-900 sticky top-0 z-50 ">
      <div className="max-w-screen-xl mx-auto flex flex-wrap md:flex-nowrap text-sm items-center justify-between py-2 px-4">
        <div className="flex items-center">
          <button onClick={toggleMobileMenu} className="md:hidden text-gray-900 p-2">
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

        <div className={`w-full md:w-auto flex flex-col md:flex-row md:items-center space-y-2 md:space-y-0 md:space-x-6 ${isMobileMenuOpen ? 'flex' : 'hidden md:flex'}`}>
          <div className="relative group">
            <a href="#" className="hover:bg-gray-200 px-4 py-2 rounded-md inline-block">
              Explore (New!)
            </a>
            <div className="absolute left-0 hidden bg-white shadow-lg rounded-md w-48 mt-1 group-hover:block z-10"> {/* Added z-index */}
              <a href="#" className="block px-4 py-2 hover:bg-gray-100">
                Saved
              </a>
            </div>
          </div>

          {/* Repeat this structure for other dropdowns */}
          <div className="relative group">
            <a href="#" className="hover:bg-gray-200 px-4 py-2 rounded-md inline-block">
              Electronics
            </a>
            <div className="absolute left-0 hidden bg-white shadow-lg rounded-md w-48 mt-1 group-hover:block z-10">
              <a href="#" className="block px-4 py-2 hover:bg-gray-100">
                Expand: Electronics
              </a>
            </div>
          </div>
          <div className="relative group">
            <a href="#" className="hover:bg-gray-200 px-4 py-2 rounded-md inline-block">
              Motors
            </a>
            <div className="absolute left-0 hidden bg-white shadow-lg rounded-md w-48 mt-1 group-hover:block z-10">
              <a href="#" className="block px-4 py-2 hover:bg-gray-100">
                Expand: Motors
              </a>
            </div>
          </div>
          <div className="relative group">
            <a href="#" className="hover:bg-gray-200 px-4 py-2 rounded-md inline-block">
              Fashion
            </a>
            <div className="absolute left-0 hidden bg-white shadow-lg rounded-md w-48 mt-1 group-hover:block z-10">
              <a href="#" className="block px-4 py-2 hover:bg-gray-100">
                Expand: Fashion
              </a>
            </div>
          </div>
          <div className="relative group">
            <a href="#" className="hover:bg-gray-200 px-4 py-2 rounded-md inline-block">
              Collectibles and Art
            </a>
            <div className="absolute left-0 hidden bg-white shadow-lg rounded-md w-48 mt-1 group-hover:block z-10">
              <a href="#" className="block px-4 py-2 hover:bg-gray-100">
                Expand: Collectibles and Art
              </a>
            </div>
          </div>
          <div className="relative group">
            <a href="#" className="hover:bg-gray-200 px-4 py-2 rounded-md inline-block">
              Sports
            </a>
            <div className="absolute left-0 hidden bg-white shadow-lg rounded-md w-48 mt-1 group-hover:block z-10">
              <a href="#" className="block px-4 py-2 hover:bg-gray-100">
                Expand: Sports
              </a>
            </div>
          </div>
          <div className="relative group">
            <a href="#" className="hover:bg-gray-200 px-4 py-2 rounded-md inline-block">
              Health & Beauty
            </a>
            <div className="absolute left-0 hidden bg-white shadow-lg rounded-md w-48 mt-1 group-hover:block z-10">
              <a href="#" className="block px-4 py-2 hover:bg-gray-100">
                Expand: Health & Beauty
              </a>
            </div>
          </div>
          <div className="relative group">
            <a href="#" className="hover:bg-gray-200 px-4 py-2 rounded-md inline-block">
              Industrial equipment
            </a>
            <div className="absolute left-0 hidden bg-white shadow-lg rounded-md w-48 mt-1 group-hover:block z-10">
              <a href="#" className="block px-4 py-2 hover:bg-gray-100">
                Expand: Industrial equipment
              </a>
            </div>
          </div>
          <div className="relative group">
            <a href="#" className="hover:bg-gray-200 px-4 py-2 rounded-md inline-block">
              Home & Garden
            </a>
            <div className="absolute left-0 hidden bg-white shadow-lg rounded-md w-48 mt-1 group-hover:block z-10">
              <a href="#" className="block px-4 py-2 hover:bg-gray-100">
                Expand: Home & Garden
              </a>
            </div>
          </div>
          <a href="#" className="hover:bg-gray-200 px-4 py-2 rounded-md inline-block">
            Deals
          </a>
          <a href="#" className="hover:bg-gray-200 px-4 py-2 rounded-md inline-block">
            Sell
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;