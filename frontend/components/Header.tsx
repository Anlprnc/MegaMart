import { AiOutlineBars } from 'react-icons/ai';
import { BiSearch } from 'react-icons/bi';
import { FiUser } from 'react-icons/fi';
import { LuShoppingCart } from 'react-icons/lu';
import { BiMenuAltLeft } from 'react-icons/bi';
import { useState } from 'react';
import Navbar from './Navbar';

const Header = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="border-b border-gray-200">
      <div className="container mx-auto">
        <div className="flex items-center justify-between p-5">
          <div className="flex items-center justify-between gap-4 w-full md:w-auto">
            <div className="bg-sky-50 p-2 rounded-xl block lg:hidden">
              <BiMenuAltLeft className="text-sky-500" size={35} onClick={toggleSidebar} />
            </div>
            <h2 className="text-3xl font-bold text-sky-600">MegaMart</h2>
          </div>
          <div className="relative w-[40%] bg-sky-50 hidden lg:flex items-center p-3 rounded-xl">
            <BiSearch className="text-sky-500 font-bold" size={25} />
            <input type="text" className="w-full opacity-50 text-sm focus:outline-none" placeholder="Search essentials, groceries and more..." />
            <AiOutlineBars className="text-sky-500 font-bold" size={25} />
          </div>
          <div className="hidden lg:flex items-center gap-4">
            <div className="flex items-center gap-2">
              <FiUser className="text-sky-500" size={25} />
              <span className="font-semibold text-gray-600 cursor-pointer">Sign Up/Sign In</span>
            </div>
            <div className="flex items-center gap-2 border-l-2 border-gray-200 pl-4">
              <LuShoppingCart className="text-sky-500" size={25} />
              <span className="font-semibold text-gray-600 cursor-pointer">Cart</span>
            </div>
          </div>
        </div>
      </div>

      <div
        className={`fixed top-0 left-0 z-40 h-screen p-4 overflow-y-auto transition-transform ${
          isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
        } bg-white w-80 dark:bg-gray-800`}
      >
        <button
          type="button"
          data-drawer-hide="drawer-contact"
          aria-controls="drawer-contact"
          className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 absolute top-2.5 end-2.5 inline-flex items-center justify-center dark:hover:bg-gray-600 dark:hover:text-white"
          onClick={toggleSidebar}
        >
          <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
          </svg>
          <span className="sr-only">Close menu</span>
        </button>
        <div className="flex flex-col items-start gap-5 mt-4">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <FiUser className="text-sky-500" size={25} />
              <span className="font-semibold text-white cursor-pointer">Sign Up/Sign In</span>
            </div>
            <div className="flex items-center gap-2 border-l-2 border-gray-200 pl-4">
              <LuShoppingCart className="text-sky-500" size={25} />
              <span className="font-semibold text-white cursor-pointer">Cart</span>
            </div>
          </div>
          <div className="relative w-full bg-sky-50 flex items-center p-3 rounded-xl">
            <BiSearch className="text-sky-500 font-bold" size={25} />
            <input type="text" className="w-full opacity-50 text-sm focus:outline-none" placeholder="Search essentials, groceries and more..." />
            <AiOutlineBars className="text-sky-500 font-bold" size={25} />
          </div>
          <Navbar />
        </div>
      </div>
    </div>
  );
};

export default Header;
