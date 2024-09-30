import React from 'react';
import { Link } from 'react-router-dom';

function DashboardNav({ setActiveComponent }) {
  return (
    <div className="bg-custom-green w-fit rounded-lg p-4 h-screen sticky top-0">
      <Link to="/">
        <h1 className="font-bold text-xl sm:text-2xl md:text-3xl lg:text-4xl bg-black bg-clip-text text-transparent">
          Farm Mall<span className="text-custom-green">.</span>
        </h1>
      </Link>
      <p className="text-black text-xs sm:text-sm md:text-base lg:text-lg mb-2">
        Welcome back to your Farm Mall dashboard
      </p>
      
      <div className="flex flex-col space-y-2 my-5">
        <button
          onClick={() => setActiveComponent('FarmDetailsForm')}
          className="hover:bg-white transition duration-150 ease-linear rounded-lg py-3 px-2 w-full text-left"
        >
          <div className="flex flex-col space-y-2 sm:flex-row sm:space-y-0 space-x-2 items-center">
            <div>
              <p className="font-bold text-sm sm:text-base md:text-lg lg:text-xl text-black leading-4">
                Farm details
              </p>
              <p className="text-black text-xs sm:text-sm md:text-base hidden sm:block">
                Fill in your farm details
              </p>
            </div>
          </div>
        </button>
        
        <button
          onClick={() => setActiveComponent('FarmManagement')}
          className="hover:bg-white transition duration-150 ease-linear rounded-lg py-3 px-2 w-full text-left"
        >
          <div className="flex flex-col space-y-2 sm:flex-row sm:space-y-0 space-x-2 items-center">
            <div>
              <p className="font-bold text-sm sm:text-base md:text-lg lg:text-xl text-black leading-4">
                Farm recent updates
              </p>
              <p className="text-black text-xs sm:text-sm md:text-base hidden sm:block">
                Recent activity on your farm
              </p>
            </div>
          </div>
        </button>
        
        <button
          onClick={() => setActiveComponent('Projections')}
          className="hover:bg-white transition duration-150 ease-linear rounded-lg py-3 px-2 w-full text-left"
        >
          <div className="flex flex-col space-y-2 sm:flex-row sm:space-y-0 space-x-2 items-center">
            <div>
              <p className="font-bold text-sm sm:text-base md:text-lg lg:text-xl text-black leading-4">
                Projections
              </p>
              <p className="text-black text-xs sm:text-sm md:text-base hidden sm:block">
                Estimates on the duration to the next activity
              </p>
            </div>
          </div>
        </button>
        
        {/* Add more navigation items as needed */}
      </div>

      <p className="text-xs sm:text-sm md:text-base text-center text-gray-600">
        v1.0 | &copy; 2024 Farm Mall
      </p>
    </div>
  );
}

export default DashboardNav;
