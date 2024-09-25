import React from 'react';
import { Link } from 'react-router-dom';

function DashboardNav({ setActiveComponent }) {
  return (
    <div className="bg-custom-green rounded-lg p-4 h-screen">
      <Link to = "/">
      <h1 className="font-bold text-lg lg:text-3xl bg-black bg-clip-text text-transparent">
        Farm Mall<span className="text-custom-green">.</span>
      </h1>
      </Link>
      <p className="text-black text-xs mb-2">Welcome back to your Farm Mall dashboard</p>
      <div className="flex flex-col space-y-2 my-5">
        <button
          onClick={() => setActiveComponent('FarmDetailsForm')}
          className="hover:bg-white transition duration-150 ease-linear rounded-lg py-3 px-2 w-full text-left"
        >
          <div className="flex flex-col space-y-2 md:flex-row md:space-y-0 space-x-2 items-center">
            <div>
              <p className="font-bold text-base lg:text-lg text-black leading-4">Farm details</p>
              <p className="text-black text-xs hidden md:block">Fill in your farm details</p>
            </div>
          </div>
        </button>
        <button
          onClick={() => setActiveComponent('FarmManagement')}
          className="hover:bg-white transition duration-150 ease-linear rounded-lg py-3 px-2 w-full text-left"
        >
          <div className="flex flex-col space-y-2 md:flex-row md:space-y-0 space-x-2 items-center">
            <div>
              <p className="font-bold text-base lg:text-lg text-black leading-4">Farm recent updates</p>
              <p className="text-black text-xs hidden md:block">Recent activity on your farm</p>
            </div>
          </div>
        </button>
        <button
          onClick={() => setActiveComponent('Projections')}
          className="hover:bg-white transition duration-150 ease-linear rounded-lg py-3 px-2 w-full text-left"
        >
          <div className="flex flex-col space-y-2 md:flex-row md:space-y-0 space-x-2 items-center">
            <div>
              <p className="font-bold text-base lg:text-lg text-black leading-4">Projections</p>
              <p className="text-black text-xs hidden md:block">Estimates on the duration to the next activity</p>
            </div>
          </div>
        </button>
        {/* Add more navigation items as needed */}
      </div>
      <p className="text-xs text-center text-gray-600">v1.0 | &copy; 2023 Farm Mall</p>
    </div>
  );
}

export default DashboardNav;
