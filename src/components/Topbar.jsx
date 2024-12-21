
const Topbar = () => {
  return (
    <header class="bg-gray-800 p-4">
        <div class="max-w-screen-xl mx-auto flex items-center justify-between">
        
            <div class="flex items-center">
            <img src="your-logo-url.png" alt="Logo" class="h-8 w-auto" />
            </div>

            <div class="flex-grow mx-4">
            <input type="text" placeholder="Search..." class="w-full p-2 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500" />
            </div>

            <div class="flex items-center space-x-4">
        
            <a href="/login" class="text-white px-4 py-2 rounded-md hover:bg-indigo-600 transition-colors duration-300">Login</a>
            <a href="/signup" class="text-white px-4 py-2 rounded-md hover:bg-indigo-600 transition-colors duration-300">Sign Up</a>

            <a href="/cart" class="text-white text-2xl">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="h-6 w-6">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h18l-1 9H4l-1-9zm2 4h14l.75 6H5.25L7 7z" />
                </svg>
            </a>
            </div>
        </div>
    </header>

  );
}

export default Topbar;