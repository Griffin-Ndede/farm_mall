import React from 'react';

function DashboardNav({ setActiveComponent }) {
  return (
    <div id="menu" className="bg-white/10 rounded-lg p-4">
      <h1 className="font-bold text-lg lg:text-3xl bg-gradient-to-br from-custom-green via-white/50 to-transparent bg-clip-text text-transparent">
        Farm Mall<span className="text-custom-green">.</span>
      </h1>
      <p className="text-slate-400 text-xs mb-2">Welcome back,</p>
      <div className="flex flex-col space-y-2 my-5">
        <button
          onClick={() => setActiveComponent('FarmDetailsForm')}
          className="hover:bg-white/10 transition duration-150 ease-linear rounded-lg py-3 px-2 w-full text-left"
        >
          <div className="flex flex-col space-y-2 md:flex-row md:space-y-0 space-x-2 items-center">
            <div>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
                <path d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
              </svg>
            </div>
            <div>
              <p className="font-bold text-base lg:text-lg text-slate-200 leading-4">Farm details</p>
              <p className="text-slate-400 text-xs hidden md:block">Fill in your farm details</p>
            </div>
          </div>
        </button>
        <button
          onClick={() => setActiveComponent('FarmManagement')}
          className="hover:bg-white/10 transition duration-150 ease-linear rounded-lg py-3 px-2 w-full text-left"
        >
          <div className="flex flex-col space-y-2 md:flex-row md:space-y-0 space-x-2 items-center">
            <div>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
                <path d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
              </svg>
            </div>
            <div>
              <p className="font-bold text-base lg:text-lg text-slate-200 leading-4">Farm recent updates</p>
              <p className="text-slate-400 text-xs hidden md:block">Recent activity on your farm</p>
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
