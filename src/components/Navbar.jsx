import React, { useState } from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { Link } from 'react-router-dom';

function Navbar() {
  const [open, setOpen] = useState(false);

  return (
      <div className="antialiased ">
        <div className="w-full text-black bg-white dark:text-white dark:bg-gray-800">
          <div className="flex flex-col max-w-screen-xl px-4 mx-auto md:items-center md:justify-between md:flex-row md:px-6 lg:px-8">
            <div className="flex flex-row items-center justify-between p-4">
              <a
                className="text-3xl font-bold text-custom-green rounded-lg dark:text-white focus:outline-none focus:shadow-outline"
              >
                Farm Mall
              </a>
              <button
                className="rounded-lg md:hidden focus:outline-none focus:shadow-outline"
                onClick={() => setOpen(!open)}
              >
                <svg fill="currentColor" viewBox="0 0 20 20" className="w-6 h-6">
                  {open ? (
                    <path
                      fillRule="evenodd"
                      d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  ) : (
                    <path
                      fillRule="evenodd"
                      d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z"
                      clipRule="evenodd"
                    />
                  )}
                </svg>
              </button>
            </div>
            <nav className={`flex-col flex-grow ${open ? 'flex' : 'hidden'} pb-4 md:pb-0 md:flex md:justify-end md:flex-row`}>
              <a
                className="px-4 py-2 mt-2 text-sm font-semibold bg-transparent rounded-lg dark:hover:bg-custom-green dark:focus:bg-custom-green dark:focus:text-white dark:hover:text-white dark:text-gray-200 md:mt-0 md:ml-4 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
                href="#"
              >
                About
              </a>
               <AnchorLink
                className="px-4 py-2 mt-2 text-sm font-semibold bg-transparent rounded-lg dark:hover:bg-custom-green dark:focus:bg-custom-green dark:focus:text-white dark:hover:text-white dark:text-gray-200 md:mt-0 md:ml-4 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
                href="#calculator"
              >
                Calculator
              </AnchorLink>
              <Link to ="/login"
                className="px-4 py-2 mt-2 text-sm font-semibold bg-transparent rounded-lg dark:hover:bg-custom-green dark:focus:bg-custom-green dark:focus:text-white dark:hover:text-white dark:text-gray-200 md:mt-0 md:ml-4 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
              >
                Login
              </Link>
              <Link to ="/signup"
                className="px-4 py-2 mt-2 text-sm font-semibold bg-transparent rounded-lg dark:hover:bg-custom-green dark:focus:bg-custom-green dark:focus:text-white dark:hover:text-white dark:text-gray-200 md:mt-0 md:ml-4 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
              >
               Sign up
              </Link>
            </nav>
          </div>
        </div>
      </div>
  );
}

export default Navbar;
